# ObsFly Logo Export Instructions

## How to Generate PNG Logo Files

I've created an HTML-based logo export tool that allows you to generate PNG files of the ObsFly logo in various sizes.

### Steps to Export Logo as PNG:

1. **Open the Export Tool**
   ```bash
   # Navigate to the project directory
   cd /home/namlabs/Downloads/obsfly-screen-sculpt-main/obsfly-screen-sculpt-main

   # Open the logo export file in your browser
   # You can open it with any browser:
   open logo-export.html           # macOS
   xdg-open logo-export.html       # Linux
   start logo-export.html          # Windows
   ```

   Or simply drag and drop `logo-export.html` into your browser.

2. **Download the Logo**

   The page will show 4 different logo variants:

   - **256x256 PNG** - Small size (favicon, app icons)
   - **512x512 PNG** - Medium size (social media, general use)
   - **1024x1024 PNG** - Large size (high-resolution displays, print)
   - **1200x400 PNG with Text** - Full logo with "ObsFly" text (website headers, presentations)

3. **Click the Download Button**

   Click the download button under the logo size you want, and the PNG file will be saved to your downloads folder.

## Logo Variants Included

### Icon Only (Square)
- Transparent background
- Butterfly logo with observability details:
  - Data dots on wings (monitoring indicators)
  - Metric lines in body (data flow)
  - Signal indicators on antennae (connectivity)
- Tetragon-inspired colors (purple → blue → green gradient)

### Logo with Text (1200x400)
- Transparent background
- Butterfly icon + "ObsFly" text
- Gradient text matching brand colors
- Perfect for website headers and presentations

## Logo Features

The ObsFly logo includes observability-specific visual elements:

1. **Data Dots on Wings** - Represent monitoring data points
2. **Metric Lines in Body** - Show data flow and metrics
3. **Signal Indicators on Antennae** - Represent connectivity and real-time signals
4. **Gradient Colors** - Tetragon-inspired palette:
   - Purple (Primary): `hsl(262, 83%, 58%)`
   - Blue (Secondary): `hsl(217, 91%, 60%)`
   - Green (Accent): `hsl(142, 76%, 36%)`

## Technical Details

- **Format**: PNG with transparency
- **Color Mode**: RGB
- **Background**: Transparent (alpha channel)
- **Rendering**: High-quality canvas rendering

## Using the Exported Logos

### Web Usage
```html
<!-- Favicon -->
<link rel="icon" type="image/png" href="/obsfly-logo-256.png">

<!-- Logo in header -->
<img src="/obsfly-logo-with-text-1200x400.png" alt="ObsFly Logo" width="300">
```

### React/Component Usage
```jsx
import logo from './assets/obsfly-logo-512.png';

<img src={logo} alt="ObsFly" className="w-12 h-12" />
```

## Saving Logo Files

The exported PNG files will be saved with these names:
- `obsfly-logo-256.png`
- `obsfly-logo-512.png`
- `obsfly-logo-1024.png`
- `obsfly-logo-with-text-1200x400.png`

Move these files to your project's `public/` or `src/assets/` directory as needed.

## Need Custom Sizes?

You can modify the `logo-export.html` file to add custom sizes. Just duplicate one of the canvas sections and change the width/height values.

## Brand Guidelines

- Always maintain aspect ratio when resizing
- Use on backgrounds that provide sufficient contrast
- Minimum size: 32x32 pixels for icon-only version
- Preferred usage: Transparent background for flexibility
- The butterfly represents transformation and observability
- eBPF = lightweight, fast, kernel-level insights

---

**Questions?** The logo export tool is fully self-contained in `logo-export.html` and works in any modern browser.
