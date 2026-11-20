interface ImageConversion {
  enabled: boolean
  format: string
  quality: number
  mime_types: string[]
  max_width: number
  max_height: number
}

/**
 * Converts and scales down an image in the browser, so the server never has to decode large images.
 * Falls back to the original file when the browser cannot decode the image or encode the target format.
 */
export default async function convertImage(file: File): Promise<File> {
  const config: ImageConversion | undefined = window.Nova.config('novaFileManager')?.imageConversion

  if (!config?.enabled || !config.mime_types.includes(file.type)) {
    return file
  }

  const type = `image/${config.format === 'jpg' ? 'jpeg' : config.format}`

  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(
      1,
      (config.max_width || Infinity) / bitmap.width,
      (config.max_height || Infinity) / bitmap.height,
    )

    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close()

    const encode = (mime: string) =>
      new Promise<Blob | null>(resolve => canvas.toBlob(resolve, mime, config.quality / 100))

    let blob = await encode(type)

    // Browsers that cannot encode the requested type (e.g. Safari and WebP) silently return a PNG.
    // Upload the scaled-down image in its original format instead, the server converts it cheaply.
    if (blob?.type !== type) {
      if (scale === 1) {
        return file
      }

      blob = await encode(file.type === 'image/jpeg' ? 'image/jpeg' : 'image/png')
    }

    if (!blob) {
      return file
    }

    const extension = blob.type === type ? config.format : blob.type.replace('image/', '').replace('jpeg', 'jpg')
    const name = `${file.name.replace(/\.[^.]+$/, '')}.${extension}`

    return new File([blob], name, { type: blob.type, lastModified: file.lastModified })
  } catch {
    return file
  }
}
