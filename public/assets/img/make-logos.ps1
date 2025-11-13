$in = "RootLabsBrandLogo_Final.svg"
$widths = 64,96,128,256,384,512,768,1024  # edit as needed

foreach ($w in $widths) {
  # Transparent WebP from SVG
  magick -background none $in `
    -density 512 -units PixelsPerInch `
    -resize ${w}x -filter Lanczos -define filter:blur=0.9 `
    -unsharp 0x0.6+0.6+0.01 -strip -colorspace sRGB `
    -define webp:method=6 -define webp:use-sharp-yuv=true -quality 85 `
    ("logo-" + $w + ".webp")

  # JPEG fallback on white
  magick -background white $in `
    -density 512 -units PixelsPerInch `
    -resize ${w}x -filter Lanczos -define filter:blur=0.9 `
    -unsharp 0x0.6+0.6+0.01 -strip -colorspace sRGB `
    -alpha remove -alpha off -interlace Plane -quality 85 `
    ("logo-" + $w + ".jpg")

  magick -background none $in `
    -density 512 -units PixelsPerInch `
    -resize ${w}x -filter Lanczos -define filter:blur=0.9 `
    -unsharp 0x0.6+0.6+0.01 -strip -colorspace sRGB `
    -define heic:speed=5 -quality 60 `
    ("logo-" + $w + ".avif")

}
