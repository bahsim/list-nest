### Prompt 

Aditionally to previous prompt result
- Mobile wireframe JSON for history view

### Result

Here’s a **mobile-first Excalidraw JSON wireframe** for the Simple History View.  
It’s vertically stacked, with header, search, filters, grouped items, restore, and analytics.  
Copy-paste into [excalidraw.com](https://excalidraw.com/) → menu → "Load Scene" → "Paste JSON".

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "GPT-4",
  "elements": [
    {
      "id": "modal-bg",
      "type": "rectangle",
      "x": 20,
      "y": 20,
      "width": 360,
      "height": 640,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "#f5f5f5",
      "strokeWidth": 2,
      "roughness": 1,
      "seed": 1
    },
    {
      "id": "header",
      "type": "rectangle",
      "x": 40,
      "y": 40,
      "width": 320,
      "height": 48,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "#fff",
      "strokeWidth": 2,
      "roughness": 1,
      "seed": 2
    },
    {
      "id": "back-arrow",
      "type": "text",
      "x": 52,
      "y": 56,
      "width": 24,
      "height": 24,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "transparent",
      "text": "←",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 18,
      "seed": 3
    },
    {
      "id": "header-title",
      "type": "text",
      "x": 90,
      "y": 56,
      "width": 180,
      "height": 24,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "transparent",
      "text": "Purchase History",
      "fontSize": 20,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 18,
      "seed": 4
    },
    {
      "id": "search-bar",
      "type": "rectangle",
      "x": 40,
      "y": 100,
      "width": 240,
      "height": 32,
      "angle": 0,
      "strokeColor": "#adb5bd",
      "backgroundColor": "#fff",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 5
    },
    {
      "id": "search-placeholder",
      "type": "text",
      "x": 52,
      "y": 108,
      "width": 120,
      "height": 18,
      "angle": 0,
      "strokeColor": "#adb5bd",
      "backgroundColor": "transparent",
      "text": "Search for 'Milk'",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 6
    },
    {
      "id": "mic-icon",
      "type": "ellipse",
      "x": 270,
      "y": 106,
      "width": 20,
      "height": 20,
      "angle": 0,
      "strokeColor": "#0d6efd",
      "backgroundColor": "#e7f1ff",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 7
    },
    {
      "id": "filter-bar",
      "type": "rectangle",
      "x": 40,
      "y": 140,
      "width": 320,
      "height": 36,
      "angle": 0,
      "strokeColor": "#adb5bd",
      "backgroundColor": "#e9ecef",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 8
    },
    {
      "id": "category-filter",
      "type": "rectangle",
      "x": 52,
      "y": 148,
      "width": 80,
      "height": 20,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "#fff",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 9
    },
    {
      "id": "category-filter-text",
      "type": "text",
      "x": 56,
      "y": 152,
      "width": 70,
      "height": 14,
      "angle": 0,
      "strokeColor": "#495057",
      "backgroundColor": "transparent",
      "text": "Category ▼",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 10
    },
    {
      "id": "date-filter",
      "type": "rectangle",
      "x": 140,
      "y": 148,
      "width": 80,
      "height": 20,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "#fff",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 11
    },
    {
      "id": "date-filter-text",
      "type": "text",
      "x": 144,
      "y": 152,
      "width": 70,
      "height": 14,
      "angle": 0,
      "strokeColor": "#495057",
      "backgroundColor": "transparent",
      "text": "Date ▼",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 12
    },
    {
      "id": "focus-filter",
      "type": "rectangle",
      "x": 228,
      "y": 148,
      "width": 60,
      "height": 20,
      "angle": 0,
      "strokeColor": "#198754",
      "backgroundColor": "#d1e7dd",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 13
    },
    {
      "id": "focus-filter-text",
      "type": "text",
      "x": 232,
      "y": 152,
      "width": 50,
      "height": 14,
      "angle": 0,
      "strokeColor": "#198754",
      "backgroundColor": "transparent",
      "text": "Focus",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 14
    },
    {
      "id": "date-header",
      "type": "rectangle",
      "x": 40,
      "y": 190,
      "width": 320,
      "height": 28,
      "angle": 0,
      "strokeColor": "#f7b801",
      "backgroundColor": "#fffbe6",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 15
    },
    {
      "id": "date-header-text",
      "type": "text",
      "x": 52,
      "y": 198,
      "width": 200,
      "height": 18,
      "angle": 0,
      "strokeColor": "#f7b801",
      "backgroundColor": "transparent",
      "text": "October 10, 2023 ▼",
      "fontSize": 14,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 12,
      "seed": 16
    },
    {
      "id": "item1",
      "type": "rectangle",
      "x": 52,
      "y": 226,
      "width": 296,
      "height": 40,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "#fff",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 17
    },
    {
      "id": "item1-name",
      "type": "text",
      "x": 62,
      "y": 234,
      "width": 60,
      "height": 20,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "transparent",
      "text": "Milk",
      "fontSize": 14,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 12,
      "seed": 18
    },
    {
      "id": "item1-qty",
      "type": "text",
      "x": 130,
      "y": 234,
      "width": 40,
      "height": 20,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "transparent",
      "text": "2L",
      "fontSize": 14,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 12,
      "seed": 19
    },
    {
      "id": "item1-price",
      "type": "text",
      "x": 180,
      "y": 234,
      "width": 40,
      "height": 20,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "transparent",
      "text": "$3.50",
      "fontSize": 14,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 12,
      "seed": 20
    },
    {
      "id": "item1-cat",
      "type": "rectangle",
      "x": 230,
      "y": 236,
      "width": 40,
      "height": 16,
      "angle": 0,
      "strokeColor": "#198754",
      "backgroundColor": "#d1e7dd",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 21
    },
    {
      "id": "item1-cat-text",
      "type": "text",
      "x": 234,
      "y": 238,
      "width": 32,
      "height": 14,
      "angle": 0,
      "strokeColor": "#198754",
      "backgroundColor": "transparent",
      "text": "Dairy",
      "fontSize": 10,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 22
    },
    {
      "id": "item1-focus",
      "type": "ellipse",
      "x": 275,
      "y": 240,
      "width": 12,
      "height": 12,
      "angle": 0,
      "strokeColor": "#f7b801",
      "backgroundColor": "#fffbe6",
      "strokeWidth": 2,
      "roughness": 1,
      "seed": 23
    },
    {
      "id": "item1-avatar",
      "type": "ellipse",
      "x": 290,
      "y": 240,
      "width": 12,
      "height": 12,
      "angle": 0,
      "strokeColor": "#0d6efd",
      "backgroundColor": "#e7f1ff",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 24
    },
    {
      "id": "item1-restore",
      "type": "rectangle",
      "x": 306,
      "y": 240,
      "width": 16,
      "height": 16,
      "angle": 0,
      "strokeColor": "#198754",
      "backgroundColor": "#d1e7dd",
      "strokeWidth": 1,
      "roughness": 1,
      "seed": 25
    },
    {
      "id": "item1-restore-text",
      "type": "text",
      "x": 310,
      "y": 242,
      "width": 10,
      "height": 12,
      "angle": 0,
      "strokeColor": "#198754",
      "backgroundColor": "transparent",
      "text": "⟳",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "center",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 26
    },
    {
      "id": "analytics-panel",
      "type": "rectangle",
      "x": 40,
      "y": 500,
      "width": 320,
      "height": 80,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "#fff",
      "strokeWidth": 2,
      "roughness": 1,
      "seed": 27
    },
    {
      "id": "analytics-title",
      "type": "text",
      "x": 52,
      "y": 510,
      "width": 120,
      "height": 18,
      "angle": 0,
      "strokeColor": "#1a1a1a",
      "backgroundColor": "transparent",
      "text": "Analytics Summary",
      "fontSize": 14,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 12,
      "seed": 28
    },
    {
      "id": "analytics-items",
      "type": "text",
      "x": 52,
      "y": 530,
      "width": 200,
      "height": 14,
      "angle": 0,
      "strokeColor": "#495057",
      "backgroundColor": "transparent",
      "text": "Total: 45 items, $150.75",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 29
    },
    {
      "id": "analytics-frequent",
      "type": "text",
      "x": 52,
      "y": 546,
      "width": 200,
      "height": 14,
      "angle": 0,
      "strokeColor": "#495057",
      "backgroundColor": "transparent",
      "text": "Frequent: Eggs (5x)",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 30
    },
    {
      "id": "analytics-categories",
      "type": "text",
      "x": 52,
      "y": 562,
      "width": 200,
      "height": 14,
      "angle": 0,
      "strokeColor": "#495057",
      "backgroundColor": "transparent",
      "text": "Dairy: 30%, Veg: 25%",
      "fontSize": 12,
      "fontFamily": 1,
      "textAlign": "left",
      "verticalAlign": "top",
      "baseline": 10,
      "seed": 31
    }
  ],
  "appState": {
    "viewBackgroundColor": "#ffffff"
  }
}
```

This is a mobile wireframe for the history view, with all the described UI elements.  
Want more items, more groups, or a specific flow? Just say so.
