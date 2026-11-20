# Reference

## `default_disk`

The default disk used by the package

| Type     | Default  |
|----------|----------|
| `string` | `public` |

::: warning NOTE
The default disk must be defined in your `filesystems.php` config.
:::

## `available_disks`

Provides a list of available disks to be used by the package

| Type       | Default      |
|------------|--------------|
| `string[]` | `['public']` |

::: warning NOTE
Each disk must be defined in your `filesystems.php` config.
:::

## `show_hidden_files`

Toggles whether to show files and folders that start with a "dot"

| Type   | Default |
|--------|---------|
| `bool` | `false` |

## `human_readable_size`

When set to true, the package will display file sizes in a more friendly readable format

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `human_readable_datetime`

When set to true, the package will display dates with `diffForHumans()`

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `file_analysis.enabled`

When set to true, the package will use getID3 to parse metadata from the files

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `file_analysis.cache.enabled`

When set to true, the package will cache the file analysis result

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `file_analysis.cache.ttl_in_seconds`

TTL for analysis caching in seconds

| Type  | Default |
|-------|---------|
| `int` | `86400` |

## `url_signing.enabled`

When set to true, all the file urls will be signed

| Type   | Default |
|--------|---------|
| `bool` | `false` |

## `url_signing.unit`

Defines the unit for the expiration time

| Type     | Default   |
|----------|-----------|
| `string` | `minutes` |

::: warning NOTE
The expiration time must not exceed 1 week
:::

## `url_signing.value`

Defines the value for the expiration time

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `update_checker.enabled`

Toggles whether to show the update checker banner

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `update_checker.ttl_in_days`

TTL for analysis caching the update checker status in days

| Type  | Default |
|-------|---------|
| `int` | `1`     |

## `tour.enabled`

Toggles whether to show the package tour

| Type   | Default |
|--------|---------|
| `bool` | `true`  |

## `use_pintura`

Toggles whether to show use Pintura image editor

| Type   | Default |
|--------|---------|
| `bool` | `false` |

::: tip NOTE
You can find details about the Pintura integration in the [Pintura image editor section](/pintura).
:::

## `path`

This is the URI path where File Manager will be accessible from

| Type     | Default              |
|----------|----------------------|
| `string` | `/nova-file-manager` |


## `upload_replace_existing`

Toggle whether an upload with an existing file name should replace the existing file or not

| Type   | Default |
|--------|---------|
| `bool` | `false` |

## `image_conversion`

Converts uploaded images to another format and scales them down to fit `max_width` × `max_height` (`0` means no limit). The browser converts images before uploading them, so the server never has to decode large images; the server converts with [intervention/image](https://image.intervention.io) only the images the browser could not. Only files whose mime type is listed in `mime_types` are converted, and the file extension is replaced with the target format, e.g. `photo.jpg` is stored as `photo.webp`.

| Key          | Type     | Default                                     | Env                                          |
|--------------|----------|---------------------------------------------|----------------------------------------------|
| `enabled`    | `bool`   | `true`                                      | `NOVA_FILE_MANAGER_IMAGE_CONVERSION_ENABLED` |
| `format`     | `string` | `webp`                                      | `NOVA_FILE_MANAGER_IMAGE_CONVERSION_FORMAT`  |
| `quality`    | `int`    | `90`                                        | `NOVA_FILE_MANAGER_IMAGE_CONVERSION_QUALITY` |
| `max_width`  | `int`    | `2560`                                      | `NOVA_FILE_MANAGER_IMAGE_CONVERSION_MAX_WIDTH` |
| `max_height` | `int`    | `2560`                                      | `NOVA_FILE_MANAGER_IMAGE_CONVERSION_MAX_HEIGHT` |
| `mime_types` | `array`  | `['image/jpeg', 'image/png', 'image/bmp']`  |                                              |
