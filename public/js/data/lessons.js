// ═══════════════════════════════════════════════
// DEVACADEMY — LESSON CONTENT DATA  (Phase 1)
// ═══════════════════════════════════════════════
const LESSONS = {};

// ════════════ PHASE 1: Web Foundations ════════════

LESSONS['1-0'] = {
  title: 'HTML Semantic Tags',
  emoji: '🏷️',
  tags: ['HTML5', 'Semantics', 'Accessibility', 'Elements'],
  intro: `**HTML (HyperText Markup Language)** is the skeleton of a website—it provides the structure and meaning to your content. When you visit any website, everything you see is defined using HTML elements. Semantic HTML means using elements that clearly describe their meaning to both the browser and the developer.`,
  sections: [
    {
      title: '🏗️ HTML Elements and Tags Explained',
      body: `An HTML element is a complete unit of content. It typically consists of three parts:<br>
1. **Opening tag** - marks the beginning (e.g., <code>&lt;p&gt;</code>)<br>
2. **Content** - the actual text<br>
3. **Closing tag** - marks the end with a slash (e.g., <code>&lt;/p&gt;</code>)<br><br>
**Common Elements:**<br>
- <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Headings. <code>h1</code> is the main title, <code>h2</code> for major sections.<br>
- <code>&lt;p&gt;</code>: Paragraphs for text.<br>
- <code>&lt;a href="..."&gt;</code>: Links to other pages.<br>
- <code>&lt;img src="..." alt="..."&gt;</code>: Images. This is a **void element** (no closing tag).`,
      code: { lang: 'html', src: `<!-- Headings outline your document -->
<h1>Main Website Title</h1>
<h2>Section Title</h2>

<!-- Paragraphs space out text naturally -->
<p>This is a paragraph element.</p>

<!-- Links -> 'href' is an attribute holding the URL -->
<a href="https://example.com">Visit Example</a>

<!-- Images -> 'src' is the path, 'alt' describes the image -->
<img src="cat.jpg" alt="A fluffy orange cat sleeping">` }
    },
    {
      title: '🛠️ HTML Attributes Deep Dive',
      body: `Attributes provide additional information about HTML elements. They always appear in the opening tag as <code>name="value"</code>.<br><br>
- <code>class</code>: Assigns a name for CSS styling (e.g., <code>class="button"</code>)<br>
- <code>id</code>: Unique identifier (e.g., <code>id="header"</code>)<br>
- <code>title</code>: Tooltip text on hover<br>
- <code>target="_blank"</code>: Opens a link in a new tab`,
      code: { lang: 'html', src: `<p class="intro-text" id="welcome-msg">Welcome!</p>

<a href="https://example.com" target="_blank" title="Visit our sponsor">
  Click here
</a>` }
    },
    {
      title: '🎯 Semantic HTML Structure',
      body: `Using generic <code>&lt;div&gt;</code> tags for everything makes code hard to read and breaks screen readers. Semantic tags tell the browser exactly what the content *is*.<br><br>
- <code>&lt;header&gt;</code>: Introductory content/logos<br>
- <code>&lt;nav&gt;</code>: Navigation links<br>
- <code>&lt;main&gt;</code>: Primary unique content (once per page)<br>
- <code>&lt;article&gt;</code>: Independent content (e.g., blog post)<br>
- <code>&lt;section&gt;</code>: Thematic grouping<br>
- <code>&lt;footer&gt;</code>: Copyright/contact info`,
      code: { lang: 'html', src: `<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a> | <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Understanding HTML</h2>
    <p>HTML is the foundation of the web...</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 My Website</p>
</footer>` }
    }
  ],
  realLife: `Think of HTML like building a house. HTML provides the walls, rooms, and foundation. Using Semantic HTML is like labeling the rooms properly on a blueprint—"Kitchen", "Bedroom", "Bathroom"—rather than just labeling everything as "Room" (which is what using 'div' for everything is like). This helps inspectors (search engines) and guests (screen readers) know exactly what each part of the house is for!`,
  youtube: [
    { title: 'HTML Full Course for Beginners', channel: 'freeCodeCamp', url: 'https://youtu.be/mU6anWqZJcc' },
    { title: 'Semantic HTML Explained', channel: 'Kevin Powell', url: 'https://youtu.be/kGW8AlO-oMk' }
  ],
  exam: [
    { q: 'Which tag is an example of a "void element" (doesn\'t have a closing tag)?', options: ['&lt;p&gt;', '&lt;img&gt;', '&lt;a&gt;', '&lt;h1&gt;'], answer: 1 },
    { q: 'What is the purpose of the "alt" attribute on an image?', options: ['To change the image color', 'To link to another page', 'To provide text description for accessibility and SEO', 'To set the image size'], answer: 2 },
    { q: 'Where do HTML attributes go?', options: ['Inside the closing tag', 'Inside the opening tag', 'Between the opening and closing tags', 'In the CSS file'], answer: 1 },
    { q: 'Which semantic element should contain the primary, unique content of a webpage?', options: ['&lt;header&gt;', '&lt;section&gt;', '&lt;body&gt;', '&lt;main&gt;'], answer: 3 },
    { q: 'What does the "href" attribute do in an &lt;a&gt; tag?', options: ['Makes the text bold', 'Specifies the destination URL of the link', 'Adds hover text', 'Opens a new tab'], answer: 1 }
  ]
};

LESSONS['1-1'] = {
  title: 'Forms, Inputs & Tables',
  emoji: '📝',
  tags: ['HTML Forms', 'Tables', 'Inputs'],
  intro: `**Forms** are how users interact with websites—logging in, signing up, searching, or purchasing. **Tables** are used to organize tabular data into rows and columns like a spreadsheet.`,
  sections: [
    {
      title: '📧 HTML Forms and Inputs',
      body: `A <code>&lt;form&gt;</code> wraps input fields and has important attributes: <code>action</code> (where to send data) and <code>method</code> (GET or POST).<br><br>
Inputs come in many types: <code>text</code>, <code>email</code> (auto-validates!), <code>password</code> (masks chars), <code>number</code>, <code>radio</code> (choose one), and <code>checkbox</code> (choose multiple). Always link inputs to a description using a <code>&lt;label for="..."&gt;</code>.`,
      code: { lang: 'html', src: `<form action="/submit" method="POST">
  <!-- The 'for' attribute matches the input's 'id' -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  
  <label>
    <input type="checkbox" name="agree"> I agree to terms
  </label>

  <button type="submit">Sign Up</button>
</form>` }
    },
    {
      title: '📊 HTML Tables',
      body: `Use tables *only* for tabular data, not for page layout!<br><br>
- <code>&lt;table&gt;</code>: The container<br>
- <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>: Logical sections<br>
- <code>&lt;tr&gt;</code>: Table row<br>
- <code>&lt;th&gt;</code>: Table header cell (bold/centered default)<br>
- <code>&lt;td&gt;</code>: Table data cell`,
      code: { lang: 'html', src: `<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$12,500</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$15,300</td>
    </tr>
  </tbody>
</table>` }
    }
  ],
  realLife: `You use forms every single day! Logging into Netflix, searching on Google, or buying something on Amazon all use HTML forms to securely collect your 'method="POST"' actions. Tables are exactly like Microsoft Excel or Google Sheets—perfect for sports leaderboards, pricing tiers, or financial data.`,
  youtube: [
    { title: 'HTML Forms Tutorial', channel: 'Web Dev Simplified', url: 'https://youtu.be/fNcJuPIZ2EQ' },
    { title: 'HTML Tables Complete Guide', channel: 'Net Ninja', url: 'https://youtu.be/jVbGOCGup3Q' }
  ],
  exam: [
    { q: 'Which input type automatically masks the characters a user types?', options: ['type="hidden"', 'type="mask"', 'type="password"', 'type="secret"'], answer: 2 },
    { q: 'How do you properly associate a <label> with its corresponding <input>?', options: ['Nest them in a div', 'Match the label\'s "for" attribute to the input\'s "id" attribute', 'Give them the same class', 'Match the label\'s "id" to the input\'s "name"'], answer: 1 },
    { q: 'Which method should be used in a form when submitting sensitive data like a password?', options: ['SEND', 'GET', 'POST', 'PUT'], answer: 2 },
    { q: 'Which tag is used to create a row in an HTML table?', options: ['&lt;td&gt;', '&lt;th&gt;', '&lt;row&gt;', '&lt;tr&gt;'], answer: 3 },
    { q: 'What is the correct tag for a cell that acts as a header for a table column?', options: ['&lt;th&gt;', '&lt;td&gt;', '&lt;thead&gt;', '&lt;header&gt;'], answer: 0 }
  ]
};

LESSONS['1-2'] = {
  title: 'Audio, Video & iFrame',
  emoji: '🎬',
  tags: ['Media', 'Video', 'iFrame'],
  intro: `HTML5 introduced native <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> elements, ending the era of third-party plugins like Adobe Flash. The <code>&lt;iframe&gt;</code> element is used to embed another webpage or document inside your page.`,
  sections: [
    {
      title: '🎵 Media Elements: Audio & Video',
      body: `The <code>controls</code> attribute is essential—it adds play, pause, and volume buttons. Providing multiple <code>&lt;source&gt;</code> tags allows the browser to pick a format it supports (like .mp4 vs .webm).<br><br>
Video attributes: <code>width</code>, <code>height</code>, <code>poster</code> (shows an image before the video plays), <code>autoplay</code>, and <code>loop</code>.`,
      code: { lang: 'html', src: `<!-- Audio Element -->
<audio controls loop>
  <source src="podcast.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>

<!-- Video Element with a thumbnail (poster) -->
<video width="640" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support video.
</video>` }
    },
    {
      title: '🖼️ Embedding with iFrames',
      body: `An <code>&lt;iframe&gt;</code> (inline frame) embeds external content like YouTube videos or Google Maps directly into your HTML. The <code>src</code> attribute points to the external URL, and <code>title</code> is required for accessibility.`,
      code: { lang: 'html', src: `<!-- Embedding a YouTube Video -->
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player"
  width="560" 
  height="315"
  allowfullscreen
  loading="lazy">
</iframe>` }
    }
  ],
  realLife: `The entire video streaming industry—Netflix, Hulu, YouTube, Spotify Web Player—was revolutionized by HTML5 native media elements. Whenever you see a Google Map embedded on a restaurant's "Contact Us" page or a YouTube video embedded inside a blog post, you're looking at an iframe!`,
  youtube: [
    { title: 'HTML5 Audio and Video Media', channel: 'Traversy Media', url: 'https://youtu.be/M_p1tXWbIfw' },
    { title: 'Using iFrames properly', channel: 'Kevin Powell', url: 'https://youtu.be/zD1F4xI7XW8' }
  ],
  exam: [
    { q: 'Which attribute tells the browser to display the built-in play/pause UI for video?', options: ['play-ui', 'controls', 'show-buttons', 'player'], answer: 1 },
    { q: 'What is the purpose of the "poster" attribute on a <video> element?', options: ['Adds a background color', 'Links to an external site', 'Provides a thumbnail image shown before the video plays', 'Adds subtitles to the video'], answer: 2 },
    { q: 'What does the <source> tag do inside audio/video elements?', options: ['Provides alternative file formats for different browsers to pick from', 'Links to the server IP', 'Defines the video caption language', 'Sets the volume level'], answer: 0 },
    { q: 'Which element is used to embed a Google Map or a YouTube video inside your page?', options: ['&lt;embed&gt;', '&lt;window&gt;', '&lt;object&gt;', '&lt;iframe&gt;'], answer: 3 },
    { q: 'Which attribute improves performance by waiting to load an iframe until the user scrolls near it?', options: ['defer="true"', 'loading="lazy"', 'async', 'wait="true"'], answer: 1 }
  ]
};

LESSONS['1-3'] = {
  title: 'CSS Box Model',
  emoji: '📦',
  tags: ['CSS', 'Box Model', 'Layout'],
  intro: `**CSS (Cascading Style Sheets)** controls the design and presentation of your HTML. While HTML is the structure (walls), CSS is the design (paint, spacing, responsive layout). At the core of CSS layout is the **Box Model**—every single HTML element is inherently a rectangular box!`,
  sections: [
    {
      title: '📦 The Four Layers of the Box',
      body: `Every element has 4 layers, from inside out:<br>
1. **Content**: The actual text, image, etc.<br>
2. **Padding**: Transparent space *inside* the border, creating breathing room around content.<br>
3. **Border**: The visible edge surrounding the padding.<br>
4. **Margin**: Transparent space *outside* the border, pushing elements away from each other.`,
      code: { lang: 'css', src: `.box {
  /* 1. Content */
  width: 300px;
  
  /* 2. Padding (inside space) */
  padding: 20px;
  
  /* 3. Border (edge) */
  border: 5px solid black;
  
  /* 4. Margin (outside space) */
  margin: 30px;
}` }
    },
    {
      title: '🛠️ The box-sizing Fix',
      body: `By default (<code>content-box</code>), padding and borders *add* to your specified width! If you set width 300px, but add 20px padding and 5px border, the visible box is actually 350px wide, breaking layouts.<br><br>The fix is <code>box-sizing: border-box;</code>. This forces padding and borders to sit *inside* the 300px width.`,
      code: { lang: 'css', src: `/* BEST PRACTICE: Apply this to ALL elements */
* {
  box-sizing: border-box;
}

.perfect-box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  /* Visual width remains exactly 300px! */
}` }
    }
  ],
  realLife: `Think of a Box of Chocolates you are mailing to a friend. The chocolates are the **Content**. The bubble wrap protecting the chocolates inside the box is the **Padding**. The cardboard box itself is the **Border**. The space the box takes up on the delivery truck shelf, separating it from other boxes, is the **Margin**.`,
  youtube: [
    { title: 'CSS Box Model Explained', channel: 'Kevin Powell', url: 'https://youtu.be/rIO5326FgPE' },
    { title: 'Box-sizing border-box explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/WnnJAcT3MZI' }
  ],
  exam: [
    { q: 'What is the correct order of the Box Model layers from inside to outside?', options: ['Content, Border, Padding, Margin', 'Padding, Content, Margin, Border', 'Content, Padding, Border, Margin', 'Margin, Border, Padding, Content'], answer: 2 },
    { q: 'Which property creates transparent space INSIDE the border?', options: ['margin', 'spacing', 'padding', 'gap'], answer: 2 },
    { q: 'Which property creates transparent space OUTSIDE the border to separate elements?', options: ['padding', 'margin', 'offset', 'inset'], answer: 1 },
    { q: 'With the default box model, if an element has width: 100px and padding: 10px on all sides, what is the total visible width?', options: ['100px', '110px', '120px', '80px'], answer: 2 },
    { q: 'What CSS rule is considered a universal best practice to make element sizing predictable?', options: ['* { margin: 0; }', '* { box-sizing: border-box; }', '* { padding: 0; }', '* { width: 100%; }'], answer: 1 }
  ]
};

LESSONS['1-4'] = {
  title: 'Display Properties',
  emoji: '🖥️',
  tags: ['CSS', 'Display', 'Inline vs Block'],
  intro: `The <code>display</code> property specifies the display behavior (the type of rendering box) of an element. It dictates whether an element forces a line break, whether it allows width/height to be set, or whether it completely hides from the page.`,
  sections: [
    {
      title: '🧱 Block vs. Inline vs. Inline-Block',
      body: `- **<code>block</code>**: Elements (like <code>&lt;div&gt;, &lt;h1&gt;, &lt;p&gt;</code>) start on a new line and stretch out to take 100% of the available width.<br>
- **<code>inline</code>**: Elements (like <code>&lt;span&gt;, &lt;a&gt;</code>) flow with text and only take up as much width as their content. You *cannot* set width/height on them.<br>
- **<code>inline-block</code>**: A hybrid! Sits inline with text, but *does* respect width and height limits.`,
      code: { lang: 'css', src: `div {
  display: block; /* Default for divs */
}

span {
  display: inline; /* Default for spans */
}

.button {
  /* Sits next to other elements, but allows padding/width */
  display: inline-block;
  padding: 10px 20px;
}` }
    },
    {
      title: '👻 Hiding Elements: display: none',
      body: `Setting <code>display: none;</code> completely removes the element from the document layout. It's as if the element doesn't exist. This is different from <code>visibility: hidden;</code>, which makes the element invisible but leaves an empty space where it used to be.`,
      code: { lang: 'css', src: `.hidden-menu {
  display: none; /* Completely gone from layout */
}

.invisible-box {
  visibility: hidden; /* Invisible, but still takes up space */
}` }
    }
  ],
  realLife: `Imagine placing blocks on a table. "Block" elements are long wooden planks that block off entire rows. "Inline" elements are small dominoes that you can line up side-by-side in a sentence. We use "display: none" heavily in modern web dev to show/hide modals, dropdown menus, and mobile hamburger navigation.`,
  youtube: [
    { title: 'Block vs Inline Elements', channel: 'Net Ninja', url: 'https://youtu.be/x_wtwG583lU' }
  ],
  exam: [
    { q: 'Which display value is default for <p>, <div>, and <h1> elements?', options: ['inline', 'inline-block', 'flex', 'block'], answer: 3 },
    { q: 'What is a key restriction of "display: inline" elements like <span>?', options: ['They cannot have background colors', 'They cannot contain text', 'You cannot set their width or height', 'You cannot change their font size'], answer: 2 },
    { q: 'Which display value behaves like text but accepts width and height properties?', options: ['block', 'inline-block', 'flex', 'inline-flex'], answer: 1 },
    { q: 'What happens to surrounding elements when you set an element to "display: none"?', options: ['They wrap around the empty space left behind', 'They ignore it and collapse to fill its spot as if it didn\'t exist', 'They inherit its hidden property', 'They turn invisible too'], answer: 1 },
    { q: 'What is the difference between "display: none" and "visibility: hidden"?', options: ['There is no difference', 'none hides it for screen readers only, hidden hides it visually', 'none removes it from the layout flow, hidden leaves an empty space gap', 'visibility: hidden is deprecated'], answer: 2 }
  ]
};

LESSONS['1-5'] = {
  title: 'Flexbox Basics',
  emoji: '💪',
  tags: ['CSS Layout', 'Flexbox', 'Responsive'],
  intro: `Before Flexbox, aligning elements horizontally (like a navigation bar) required messy float hacks. **Flexbox (Flexible Box Layout)** is a modern, one-dimensional layout system for aligning items in rows or columns, making distributing space a breeze!`,
  sections: [
    {
      title: '📦 The Flex Container',
      body: `You activate flexbox by setting <code>display: flex</code> on the **parent container**. Then you control the children using parent properties:<br><br>
- <code>flex-direction</code>: <code>row</code> (left-right, default) or <code>column</code> (top-bottom)<br>
- <code>justify-content</code>: Aligns items along the **Main Axis** (e.g., center, space-between)<br>
- <code>align-items</code>: Aligns items along the **Cross Axis** (e.g., center, stretch)<br>
- <code>gap</code>: Adds clean space between items!`,
      code: { lang: 'css', src: `.navbar {
  display: flex;
  flex-direction: row;          /* Lay out items left-to-right */
  justify-content: space-between; /* Space them evenly apart */
  align-items: center;          /* Vertically center the items */
  gap: 20px;                    /* 20px space between links */
}` }
    },
    {
      title: '🎯 The Holy Grail: Perfect Centering',
      body: `Centering an element both horizontally and vertically used to be notoriously difficult in CSS. With Flexbox, it takes exactly three lines on the parent container.`,
      code: { lang: 'css', src: `.center-container {
  display: flex;
  justify-content: center; /* Horizontal center (in a row) */
  align-items: center;     /* Vertical center (in a row) */
  height: 100vh;           /* Screen height */
}` }
    }
  ],
  realLife: `Flexbox is the literal backbone of modern UI design. You know the navigation bar at the top of Amazon where the Logo is on the far left, Search in the middle, and Cart on the far right? That is <code>justify-content: space-between</code> in action. Stacking buttons perfectly in a card? <code>flex-direction: column</code>.`,
  youtube: [
    { title: 'Learn Flexbox in 15 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/fYq5PPEykho' },
    { title: 'CSS Flexbox Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/3YW65K6LcCE' }
  ],
  exam: [
    { q: 'Which property turns an element into a flex container?', options: ['flex: on;', 'layout: flexbox;', 'display: flex;', 'position: flex;'], answer: 2 },
    { q: 'In a default Flexbox (row direction), which property handles vertical alignment?', options: ['justify-content', 'align-items', 'vertical-align', 'margin-top'], answer: 1 },
    { q: 'In a default Flexbox (row direction), which property handles horizontal alignment?', options: ['align-items', 'justify-content', 'text-align', 'float'], answer: 1 },
    { q: 'What does justify-content: space-between do?', options: ['Centers all items with space on the ends', 'Pushes the first item left, last item right, and spaces the rest evenly', 'Adds a border between all items', 'Switches the layout to a column'], answer: 1 },
    { q: 'Which property easily creates consistent spacing between flex items without using margins?', options: ['spacing', 'gap', 'padding', 'margin-between'], answer: 1 }
  ]
};

LESSONS['1-6'] = {
  title: 'Backgrounds & Borders',
  emoji: '🎨',
  tags: ['CSS Styling', 'Background', 'Borders'],
  intro: `Backgrounds and borders bring your sites to life. Beyond flat colors, CSS allows you to map rich imagery, gorgeous color gradients, rounded "pill" corners, and deep drop-shadows to element backgrounds.`,
  sections: [
    {
      title: '🖼️ Background Images & Gradients',
      body: `You can use images or generate gradients directly in CSS. Crucial properties to pair with images are <code>background-size: cover</code> (scales it nicely to fill) and <code>background-position: center</code>.<br><br>
Gradients are generated via <code>linear-gradient()</code> and don't require external image files!`,
      code: { lang: 'css', src: `.hero {
  /* Load an image */
  background-image: url('header-bg.jpg');
  background-size: cover;  /* Fil the container without stretching */
  background-position: center; /* Center the image */
}

.gradient-btn {
  /* CSS generated gradient */
  background: linear-gradient(to right, #ff6b6b, #4ecdc4);
}` }
    },
    {
      title: '🔲 Borders, Curves, and Shadows',
      body: `The <code>border</code> shorthand property requires 3 things: width, style, and color. <code>border-radius</code> softens corners—using <code>50%</code> on a square creates a perfect circle! Finally, <code>box-shadow</code> adds a 3D elevation effect by drawing a shadow behind the element.`,
      code: { lang: 'css', src: `.avatar {
  border: 4px solid #3498db;
  border-radius: 50%; /* Perfect circle */
}

.card {
  border-radius: 12px;
  /* x-offset, y-offset, blur, color */
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1); 
}` }
    }
  ],
  realLife: `Open Twitter or Instagram on your phone. Every user profile picture is just an <code>&lt;img&gt;</code> with <code>border-radius: 50%</code>. The modern "Glassmorphism" trend Apple uses in macOS heavily relies on backgrounds with transparency (RGBA) and subtle box-shadows to separate layers!`,
  youtube: [
    { title: 'CSS Backgrounds Guide', channel: 'Kevin Powell', url: 'https://youtu.be/nJhwfsH0-D0' }
  ],
  exam: [
    { q: 'Which property scales a background image to completely fill the container (padding any overflow)?', options: ['background-scale: full', 'background-size: contain', 'background-size: cover', 'image-fill: true'], answer: 2 },
    { q: 'How do you create a perfect circle from a square div?', options: ['border-circle: true', 'border-radius: 100px', 'border-radius: 50%', 'border: round'], answer: 2 },
    { q: 'What are the three values typically used in the border shorthand property?', options: ['width, height, color', 'width, style, color', 'color, darkness, style', 'radius, width, padding'], answer: 1 },
    { q: 'What does linear-gradient() do in CSS?', options: ['Creates a smooth color transition background without an image file', 'Adds an outline to text', 'Makes images grayscale', 'Controls flexbox direction'], answer: 0 },
    { q: 'Which property adds a 3D elevation drop shadow to an element?', options: ['text-shadow', 'elevation', 'box-shadow', 'drop-shadow'], answer: 2 }
  ]
};

LESSONS['1-7'] = {
  title: 'CSS Selectors',
  emoji: '🎯',
  tags: ['CSS Selectors', 'Targeting'],
  intro: `**CSS Selectors** are how you tell the browser *which* HTML elements you want to style. From finding every paragraph on a page, to finding only the one button the user is currently hovering over, mastery of selectors is non-negotiable.`,
  sections: [
    {
      title: '🔍 Basic Selection',
      body: `The three main selectors you will use constantly are:<br>
1. **Element**: Targets tags by their name (e.g., <code>p</code> or <code>h1</code>)<br>
2. **Class**: Targets a reusable class attribute, denoted by a dot (e.g., <code>.button</code>)<br>
3. **ID**: Targets a unique element, denoted by a hash (e.g., <code>#header</code>)<br><br>
**Pro Tip:** Use classes 95% of the time. IDs should only be used once per page.`,
      code: { lang: 'css', src: `/* 1. Element Selector (affects ALL paragraphs) */
p { font-size: 16px; }

/* 2. Class Selector (affects <button class="btn">) */
.btn { background: blue; color: white; }

/* 3. ID Selector (affects <nav id="main-nav">) */
#main-nav { border-bottom: 1px solid gray; }` }
    },
    {
      title: '👻 Pseudo-classes (State Selectors)',
      body: `**Pseudo-classes** start with a colon <code>:</code> and style elements based on their *state* or relative position.<br><br>
- <code>:hover</code> (when mouse is over it)<br>
- <code>:focus</code> (when input is clicked into/typing)<br>
- <code>:nth-child(even)</code> (every other list item/table row)`,
      code: { lang: 'css', src: `/* Only applies while hovering with cursor! */
.btn:hover {
  background: darkblue;
  transform: translateY(-2px);
}

/* Zebra-striping table rows */
tr:nth-child(even) {
  background-color: #f2f2f2;
}` }
    }
  ],
  realLife: `When you hover your mouse over an Amazon product and the image slightly zooms in or gets a shadow, that is the <code>:hover</code> pseudo-class triggering a CSS transition. When you click into a search bar and a blue border appears around it, that is the <code>:focus</code> pseudo-class at work!`,
  youtube: [
    { title: 'CSS Selectors Masterclass', channel: 'Kevin Powell', url: 'https://youtu.be/l1mER1bV0N0' }
  ],
  exam: [
    { q: 'Which syntax correctly targets an element with class="card"?', options: ['card', '#card', '.card', '*card'], answer: 2 },
    { q: 'Which syntax correctly targets an element with id="login-form"?', options: ['.login-form', '#login-form', 'id=login-form', '%login-form'], answer: 1 },
    { q: 'Why is it recommended to use Class selectors more often than ID selectors?', options: ['Classes load faster', 'Classes can be reused on multiple elements, IDs must be unique per page', 'IDs cannot apply color styles', 'Classes are required by HTML5'], answer: 1 },
    { q: 'Which selector creates a hover effect when the user rests their mouse on a button?', options: ['.button-hover', 'hover:button', 'button:hover', 'button::after'], answer: 2 },
    { q: 'Which selector would target every alternating (even) row in a table to create "zebra stripes"?', options: ['tr:even', 'tr:nth-child(even)', 'tr.even', 'table > even'], answer: 1 }
  ]
};

LESSONS['1-8'] = {
  title: 'Git Basics (init, add, commit, push)',
  emoji: '🔧',
  tags: ['Git', 'Version Control'],
  intro: `**Git** is a Version Control System for tracking changes in your files. Think of it as an incredibly powerful "Save Game" feature for your code. It ensures you never lose work, can travel back in time, and can safely experiment without breaking working code.`,
  sections: [
    {
      title: '📸 The "Take a Picture" Workflow',
      body: `The standard Git workflow involves 4 main commands:<br>
1. <code>git init</code>: Creates a new, empty tracking database in your folder.<br>
2. <code>git add .</code>: Mounts your changed files to the "Staging Area" (putting them on stage).<br>
3. <code>git commit -m "msg"</code>: Snaps a picture of the stage and saves it permanently to history.<br>
4. <code>git push</code>: Uploads your saved snapshots to the cloud (GitHub).`,
      code: { lang: 'bash', src: `# Check what files changed
git status

# Stage ALL changed files
git add .

# Save the snapshot with a present-tense message
git commit -m "Add navigation menu"

# Review your save history
git log --oneline` }
    },
    {
      title: '🌿 Branches: Work in Parallel',
      body: `Branches act as alternate timelines. You can create a branch called "new-feature", play around with code without touching your "main" stable codebase. If it works, you **merge** it back!`,
      code: { lang: 'bash', src: `# Create a new branch and switch to it immediately
git checkout -b feature/dark-mode

# -- Make edits, git add, git commit --

# Switch back to the safe main timeline
git checkout main

# Bring the new feature into main
git merge feature/dark-mode` }
    }
  ],
  realLife: `Before Git, developers created folders like "Project_Final", "Project_Final_v2", "Project_Real_Final_DO_NOT_TOUCH". It was chaos. Today, giant teams of 10,000 developers at Google or Meta can edit the exact same massive codebase safely, because Git tracks precisely who changed what line, and intelligently merges the parallel branches back together!`,
  youtube: [
    { title: 'Git Tutorial for Beginners', channel: 'Programming with Mosh', url: 'https://youtu.be/8JJ101D3knE' },
    { title: 'Git & GitHub Crash Course', channel: 'freeCodeCamp', url: 'https://youtu.be/RGOj5yH7evk' }
  ],
  exam: [
    { q: 'Which command starts a brand new, empty Git repository in a folder?', options: ['git start', 'git create', 'git init', 'git make'], answer: 2 },
    { q: 'Which command moves all changed files into the Staging Area?', options: ['git stage all', 'git commit .', 'git push .', 'git add .'], answer: 3 },
    { q: 'What is the purpose of the commit message in git commit -m "..."?', options: ['To set the password for the file', 'To describe the snapshot of changes for future developers to understand', 'To tell GitHub what folder to use', 'To name the new branch'], answer: 1 },
    { q: 'What does "git status" do?', options: ['Shows if files are modified, staged, or untracked', 'Uploads files to the web', 'Deletes all old commits', 'Shows the developer\'s login name'], answer: 0 },
    { q: 'Why do developers use Git branches?', options: ['To speed up the computer', 'To automatically backup to the cloud', 'To safely work on new features in an isolated "timeline" without breaking main code', 'To write CSS separately from HTML'], answer: 2 }
  ]
};

LESSONS['1-9'] = {
  title: 'GitHub Workflow & Hosting',
  emoji: '🐙',
  tags: ['GitHub', 'Collaboration', 'Hosting'],
  intro: `While **Git** is the timeline tool on your local computer, **GitHub** is the cloud platform that stores your Git timelines online. It enables worldwide developer collaboration, code review (Pull Requests), and even free website hosting via GitHub Pages!`,
  sections: [
    {
      title: '🌍 Pushing Local Code to the Cloud',
      body: `Once you have local commits, you link your local folder to an empty GitHub repository via a "remote URL". Then, you push the code up. You only have to setup the remote link once!`,
      code: { lang: 'bash', src: `# 1. Add the GitHub URL as 'origin'
git remote add origin https://github.com/username/my-project.git

# 2. Push your main branch up (-u sets the default tracking)
git push -u origin main

# Future pushes are just:
git push` }
    },
    {
      title: '🛑 The .gitignore File',
      body: `You absolutely DO NOT want to upload system files, passwords, or massive generated folders to GitHub. A file named exactly <code>.gitignore</code> tells Git to ignore matching files completely.`,
      code: { lang: 'bash', src: `node_modules/
.env
.DS_Store
dist/
*.log` }
    },
    {
      title: '🤝 The Pull Request (PR) Workflow',
      body: `In professional teams, you never push directly to <code>main</code>! You push your feature branch to GitHub, then click "Open Pull Request". A teammate reviews the code online, and if it looks good, they click "Merge PR".`
    }
  ],
  realLife: `Open Source software like React, Linux, and VS Code are built entirely on GitHub using Pull Requests. Anyone in the world can "Fork" (copy) the React repository, make an improvement, and submit a Pull Request to Facebook's engineers. If approved, their code gets merged into the real React library used by millions!`,
  youtube: [
    { title: 'Git & GitHub Tutorial', channel: 'freeCodeCamp', url: 'https://youtu.be/RGOj5yH7evk' }
  ],
  exam: [
    { q: 'What is the difference between Git and GitHub?', options: ['They are the same thing', 'Git is the cloud server, GitHub is the local tool', 'Git is the local version control software, GitHub is the cloud platform hosting Git repos', 'Git is for HTML, GitHub is for JavaScript'], answer: 2 },
    { q: 'Which command uploads your committed local changes to a remote GitHub repository?', options: ['git upload', 'git sync', 'git push', 'git send'], answer: 2 },
    { q: 'What is a Pull Request (PR)?', options: ['A request to delete code', 'Downloading code from a server', 'A formal code review online before merging a branch into main', 'An error report submitted by a user'], answer: 2 },
    { q: 'What is the purpose of the .gitignore file?', options: ['To hide CSS errors', 'To list files that Git should completely ignore and never track/upload', 'To ignore angry users on GitHub', 'To temporarily stop Git from working'], answer: 1 },
    { q: 'What does "git clone" do?', options: ['Duplicates your local computer', 'Copies an existing GitHub remote repository down to your local machine', 'Creates a new branch', 'Overrides your gitignore'], answer: 1 }
  ]
};

LESSONS['1-10'] = {
  title: 'Build a Personal Portfolio',
  emoji: '🎭',
  tags: ['Project', 'Portfolio', 'Deployment'],
  intro: `Your **personal portfolio website** is your most important asset as a web developer. It proves to employers that you know HTML, CSS, layouts, and Git. In this phase finale, you'll build your portfolio and host it for free on the live internet using GitHub Pages.`,
  sections: [
    {
      title: '🏗️ Suggested Portfolio Structure',
      body: `Build a clean, single-page website using proper Semantic HTML and Flexbox for layout.<br><br>
1. **&lt;header&gt;**: Your name and a Navigation bar (Home, About, Projects)<br>
2. **#hero &lt;section&gt;**: A big picture of you, your title ("Web Developer"), and a "Hire Me" button.<br>
3. **#projects &lt;section&gt;**: A CSS Flexbox grid showing placeholder cards for future projects.<br>
4. **&lt;footer&gt;**: Links to your GitHub and LinkedIn.`,
      code: { lang: 'html', src: `<!-- Example Hero Construction -->
<section id="hero" class="hero-container">
  <div class="hero-text">
    <h1>Hi, I'm Alex Developer</h1>
    <p>I build beautiful websites using HTML, CSS, and JS!</p>
    <a href="#projects" class="btn">View My Work</a>
  </div>
  <img src="alex.jpg" alt="Alex smiling" class="profile-pic">
</section>` }
    },
    {
      title: '🚀 Deploying for Free with GitHub Pages',
      body: `GitHub provides incredible free hosting for static HTML/CSS files! Just initialize Git in your portfolio folder, commit, and push it to a new GitHub repo.<br><br>Then in your repo on GitHub: **Settings -> Pages -> Select 'main' branch -> Save**. Within 2 minutes, your site is LIVE globally at <code>https://username.github.io/reponame</code>!`,
      code: { lang: 'bash', src: `git init
git add .
git commit -m "Initial portfolio launch"
git remote add origin https://github.com/myname/portfolio.git
git push -u origin main` }
    }
  ],
  realLife: `A strong portfolio overrides a computer science degree in modern tech hiring. Hiring managers get 500 resumes; they will only interview the 10 who linked a live, well-designed portfolio. By hosting on GitHub Pages, you're not only proving you can build a site, you're proving you understand industry-standard cloud deployment!`,
  youtube: [
    { title: 'Build a Portfolio Website from Scratch', channel: 'Kevin Powell', url: 'https://youtu.be/h3bTwCqX4Es' },
    { title: 'Deploy Website to GitHub Pages', channel: 'Web Dev Simplified', url: 'https://youtu.be/skcxqfeFwgA' }
  ],
  exam: [
    { q: 'Which CSS layout system is best suited for aligning links inside your <nav> element?', options: ['CSS Float', 'Flexbox (display: flex)', 'HTML Tables', 'Absolute positioning'], answer: 1 },
    { q: 'What is a "Hero" section in web design?', options: ['A section dedicated to Marvel movies', 'The main server cluster', 'The large, prominent introductory section at the very top of a homepage', 'The footer copyright text'], answer: 2 },
    { q: 'Why is it recommended to use semantic tags like <section id="projects"> instead of <div id="projects">?', options: ['It uses less memory', 'It enables GitHub Pages to work', 'It clearly describes the structural meaning to screen readers and search engines', 'It automatically styles the text'], answer: 2 },
    { q: 'What feature of GitHub allows you to host static HTML/CSS websites completely for free?', options: ['GitHub Cloud', 'GitHub Pages', 'GitHub Compute', 'GitHub Deploy'], answer: 1 },
    { q: 'What is the primary benefit of having a live portfolio when applying for developer jobs?', options: ['It replaces the need for an interview', 'It proves visually and technically that you can actually build and deploy web applications', 'It generates ad revenue', 'It satisfies the HTML 5 standard requirements'], answer: 1 }
  ]
};

// ════════════ PHASE 2: Responsive Design ════════════

LESSONS['2-0'] = {
  title: 'Advanced Flexbox',
  emoji: '💪',
  tags: ['Flexbox', 'Layout', 'CSS'],
  intro: `In Phase 1, you learned the basics of Flexbox. Now we dive into **control**—how items grow, shrink, and align precisely using the \`flex\` shorthand property and advanced alignment techniques.`,
  sections: [
    {
      title: '📦 The flex Shorthand',
      body: `The <code>flex</code> property is a shorthand for <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.<br><br>- <b>flex-grow</b>: How much it expands to fill space.<br>- <b>flex-shrink</b>: How much it shrinks if space is tight.<br>- <b>flex-basis</b>: The initial size before growing/shrinking.`,
      code: { lang: 'css', src: `/* Grow to fill space, don't shrink, start at 0 */
.flex-fill { flex: 1 0 0; }

/* Don't grow, don't shrink, size based on content */
.flex-fixed { flex: 0 0 auto; }

/* Grow equally, shrink equally */
.flex-equal { flex: 1; }` }
    },
    {
      title: '🎯 Advanced Alignment',
      body: `While <code>align-items</code> aligns items on the cross axis, <code>align-content</code> aligns <b>multiple lines</b> of items when <code>flex-wrap: wrap</code> is used. <code>align-self</code> can override container alignment for a specific item.`,
      code: { lang: 'css', src: `.container {
  display: flex;
  flex-wrap: wrap; 
  align-content: space-between; 
}
.item-special { align-self: stretch; }` }
    }
  ],
  realLife: `Think of Flexbox like packing a suitcase safely. You have some items that are stiff and can't be squished ('flex-shrink: 0' like shoes), some items you want perfectly folded and stacked next to each other ('flex-basis: 150px' like shirts), and soft items that fill in all the remaining gaps ('flex-grow: 1' like socks).`,
  youtube: [
    { title: 'Advanced Flexbox Explained', channel: 'Kevin Powell', url: 'https://youtu.be/K74l26pE4YA' }
  ],
  exam: [
    { q: 'In the shorthand property "flex: 1 0 200px;", what does the "1" represent?', options: ['flex-shrink', 'flex-basis', 'flex-grow', 'flex-order'], answer: 2 },
    { q: 'Which property prevents a flex item from shrinking smaller than its content when space is tight?', options: ['flex-shrink: 0', 'flex-grow: 1', 'flex-basis: auto', 'justify-content: stretch'], answer: 0 },
    { q: 'What is the requirement for "align-content" to work properly?', options: ['The flex items must have a fixed height', 'The flex container must have "flex-wrap: wrap"', 'The container must be a grid', 'You cannot use justify-content at the same time'], answer: 1 },
    { q: 'Which CSS property allows a single flex item to override the container\'s vertical alignment rule?', options: ['justify-self', 'align-self', 'override: true', 'item-align'], answer: 1 },
    { q: 'What does "flex-basis" determine?', options: ['The background image size', 'The initial size of the element before growing or shrinking occurs', 'How much the item grows', 'The gap between items'], answer: 1 }
  ]
};

LESSONS['2-1'] = {
  title: 'CSS Grid',
  emoji: '🔲',
  tags: ['CSS Grid', 'Two-Dimensional', 'Layout'],
  intro: `While Flexbox is one-dimensional (Row OR Column), **CSS Grid** is Two-dimensional (Rows AND Columns). It is incredibly powerful for overall page layout and complex image galleries.`,
  sections: [
    {
      title: '📐 Defining the Grid',
      body: `You define a grid on the container using <code>grid-template-columns</code> and <code>grid-template-rows</code>. The <code>fr</code> unit represents a "fraction of available space".`,
      code: { lang: 'css', src: `.container {
  display: grid;
  /* 3 columns: 200px, flexible middle, 200px */
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 100px auto;
  gap: 20px;
}` }
    },
    {
      title: '🧩 Placing Items',
      body: `Place items using grid line numbers or human-readable named areas! <code>grid-template-areas</code> makes it visually obvious what the layout looks like.`,
      code: { lang: 'css', src: `.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main";
}
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }` }
    }
  ],
  realLife: `Grid is exactly like laying out a literal magazine page. You say "I want a big 2-column wide photo here, a skinny 1-column sidebar text here, and a header spanning the entire top." Flexbox is for laying out the buttons *inside* the sidebar. Grid is for the big picture.`,
  youtube: [
    { title: 'CSS Grid Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/jV8B24rSN5o' },
    { title: 'Learn CSS Grid the easy way', channel: 'Kevin Powell', url: 'https://youtu.be/rg7Fvvl3taU' }
  ],
  exam: [
    { q: 'What is the main difference between Flexbox and CSS Grid?', options: ['Flexbox is older and deprecated', 'Grid is 1D, Flexbox is 2D', 'Flexbox is 1D (rows OR columns), Grid is 2D (rows AND columns)', 'Grid cannot use gaps'], answer: 2 },
    { q: 'What does the "fr" unit stand for in CSS Grid?', options: ['Frame rate', 'Free row', 'Fraction of available space', 'Fixed ratio'], answer: 2 },
    { q: 'If a grid has "grid-template-columns: 1fr 2fr 1fr", how much horizontal space does the middle column take?', options: ['50%', '33%', '25%', '100%'], answer: 0 },
    { q: 'Which Grid feature lets you name sections and visually draw the layout in your CSS?', options: ['grid-map', 'grid-template-areas', 'grid-draw', 'grid-layout'], answer: 1 },
    { q: 'Which CSS property creates space between grid cells?', options: ['margin', 'padding', 'gap', 'cell-spacing'], answer: 2 }
  ]
};

LESSONS['2-2'] = {
  title: 'Multi-section Layouts',
  emoji: '🥞',
  tags: ['Layouts', 'Web Architecture', 'Components'],
  intro: `Don't build "pages." Build **components** that make up pages. Every modern website relies on a "Box Within a Box" mental model. Structuring your HTML safely ensures maintenance is easy.`,
  sections: [
    {
      title: '📦 Box Within a Box',
      body: `Every layout consists of:<br>1. <b>Container</b>: Limits max width and centers.<br>2. <b>Section</b>: Adds vertical spacing (padding top/bottom).<br>3. <b>Grid/Flex</b>: Arranges items inside the section.<br>4. <b>Card/Item</b>: The actual content.`,
      code: { lang: 'html', src: `<!-- Container -->
<div class="max-width-wrapper centering-margin">
  <!-- Section -->
  <section class="padding-y">
    <!-- Grid -->
    <div class="card-grid">
      <!-- Item -->
      <div class="card">...</div>
    </div>
  </section>
</div>` }
    },
    {
      title: '🏗️ Separation of Concerns',
      body: `When structuring large layouts, keep things organized:<br>- <b>Layout Code</b>: Handles positioning (Grid, margins).<br>- <b>Content Code</b>: Handles text, inputs.<br>- <b>Style Code</b>: Handles colors, fonts, borders.` }
  ],
  realLife: `Building a multi-section layout is like building a shelving unit. The "Container" is your living room space. The "Section" is the wooden bookshelf furniture itself. The "Grid" is the layout of the individual shelves. And the "Items" are the books and photos you place on those shelves.`,
  youtube: [
    { title: 'Conquering Responsive Layouts', channel: 'Kevin Powell', url: 'https://youtu.be/VQqnEw0A4G8' }
  ],
  exam: [
    { q: 'What is the "Box Within a Box" mental model?', options: ['A rule that says you can only nest divs twice', 'A strategy where a Container holds a Section, which holds a Grid, which holds Items', 'A 3D CSS animation technique', 'An old IE6 hack'], answer: 1 },
    { q: 'Why is it better to think in "Components" rather than full "Pages"?', options: ['Components are faster to type', 'Components allow for reusability (like using the same Navbar everywhere)', 'Pages cannot load JavaScript', 'Browsers don\'t understand pages'], answer: 1 },
    { q: 'What is the typical job of a wrapper/container element?', options: ['To make the text bold', 'To limit the absolute maximum width of the content and center it on large screens', 'To add background colors', 'To connect to the database'], answer: 1 },
    { q: 'Which CSS properties belong to the "Layout Code" concern?', options: ['color, font-size, text-shadow', 'display: grid, margin, gap', 'background-image, border-radius', 'transition, opacity'], answer: 1 },
    { q: 'True or False: A <section> tag is meant to add vertical padding to separate thematic areas of a page.', options: ['True', 'False', 'Only on mobile', 'Only on desktop'], answer: 0 }
  ]
};

LESSONS['2-3'] = {
  title: 'Media Queries & Breakpoints',
  emoji: '📏',
  tags: ['Media Queries', 'Breakpoints', 'Responsive'],
  intro: `A website needs to adapt when viewed on a phone versus a 32-inch monitor. **Media Queries** are CSS rules that apply ONLY at specific screen sizes ("breakpoints").`,
  sections: [
    {
      title: '💻 Syntax Breakdown',
      body: `Media queries use the <code>@media</code> syntax followed by a condition. Any CSS placed inside the curly braces will only trigger if the condition is met.`,
      code: { lang: 'css', src: `/* Base styles applied to ALL screens */
body { font-size: 16px; padding: 10px; }

/* Apply ONLY if screen is 768px or wider (Tablet+) */
@media (min-width: 768px) {
  body {
    font-size: 18px;
    padding: 20px;
  }
}` }
    },
    {
      title: '📱 Standard Breakpoints',
      body: `Common industry conventions (used by Tailwind/Bootstrap):<br>- **640px (sm)**: Large phones<br>- **768px (md)**: Tablets<br>- **1024px (lg)**: Laptops<br>- **1280px (xl)**: Desktops` }
  ],
  realLife: `Media queries are like a smart thermostat. You give the system a baseline rule ("keep the house at 70 degrees"). Then you give it a media query condition: "IF it is after 10:00 PM (the breakpoint), dropping the temperature to 65 degrees." CSS does this but with screen pixel widths instead of time!`,
  youtube: [
    { title: 'CSS Media Queries Tutorial', channel: 'Web Dev Simplified', url: 'https://youtu.be/yU7jY3NIeL4' }
  ],
  exam: [
    { q: 'What does the "@media (min-width: 768px)" query mean?', options: ['Apply styles only if screen is narrower than 768px', 'Apply styles only if screen is exactly 768px', 'Apply styles only if screen is 768px or wider', 'Turn the screen to 768px mode'], answer: 2 },
    { q: 'At roughly what pixel width does the tablet (md) breakpoint typically begin?', options: ['320px', '768px', '1440px', '2000px'], answer: 1 },
    { q: 'Where should you write your base, default CSS before media queries take over?', options: ['At the very bottom of the file', 'Inside a max-width media query', 'In a separate javascript file', 'Outside of any media queries, acting as the foundation'], answer: 3 },
    { q: 'Can you change a flex container into a block column using a media query?', options: ['Yes, by overriding the display or flex-direction properties inside the query', 'No, layout properties cannot be changed', 'Only using JavaScript', 'Only if you use max-width'], answer: 0 },
    { q: 'What happens if a screen size matches multiple media queries (e.g. min-width 500px and min-width 800px on a 1000px screen)?', options: ['The browser crashes', 'It applies neither', 'It applies the first one it reads and ignores the rest', 'It applies both, with the CSS parsed later overriding earlier ones'], answer: 3 }
  ]
};

LESSONS['2-4'] = {
  title: 'Mobile-first Design',
  emoji: '📱',
  tags: ['Mobile First', 'Strategy', 'Performance'],
  intro: `Over 55% of global web traffic comes from mobile devices, and Google uses **mobile-first indexing**. You *must* design for mobile first.`,
  sections: [
    {
      title: '🥇 Mobile-First (min-width)',
      body: `**Mobile-first** logic means you write your base styles for mobile phones. Then, you use <code>min-width</code> media queries to add complexity for larger screens. It results in faster performance because phones download less CSS.`,
      code: { lang: 'css', src: `/* Mobile foundation (single column) */
.card-container {
  display: flex;
  flex-direction: column;
}

/* Tablet and up (row added ONLY when needed) */
@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}` }
    }
  ],
  realLife: `Mobile-first is like packing for a trip using a small backpack first. You put in the absolute essentials (phone layout). Then, if you get a bigger suitcase later (tablet breakpoint), you add more luxury items. It's much harder to pack a giant suitcase (desktop first) and then be forced to cram everything into a tiny backpack at the airport!`,
  youtube: [
    { title: 'Mobile First Responsive Design', channel: 'Kevin Powell', url: 'https://youtu.be/0oXYLzAqFFA' }
  ],
  exam: [
    { q: 'Why do we use "mobile-first" design today?', options: ['Because desktop computers are obsolete', 'It performs better on slow networks and is favored by Google search ranking', 'CSS requires it', 'Mobile screens use grid naturally'], answer: 1 },
    { q: 'Mobile-first design utilizes which type of media queries?', options: ['max-width', 'min-width', 'min-height', 'device-type: touch'], answer: 1 },
    { q: 'What does the term "Mobile-First Indexing" by Google mean?', options: ['Google deletes sites that don\'t work on phones', 'Google search relies on your mobile site version to determine your search ranking', 'Google charges you if you don\'t have a mobile app', 'Desktop search is turned off'], answer: 1 },
    { q: 'If your base CSS has "width: 100%" and your 1024px media query has "width: 50%", what width is a mobile phone (375px)?', options: ['50%', '100%', '0%', '25%'], answer: 1 },
    { q: 'True or False: Mobile devices process CSS faster if they don\'t have to evaluate heavy desktop layout rules first.', options: ['True', 'False', 'Only on iOS', 'Only on Android'], answer: 0 }
  ]
};

LESSONS['2-5'] = {
  title: 'Desktop-first Design',
  emoji: '🖥️',
  tags: ['Desktop First', 'Legacy', 'Strategy'],
  intro: `**Desktop-first** is the legacy approach from the early 2010s. You build the complex desktop site first, then use \`max-width\` queries to strip things away and squish it down for mobile.`,
  sections: [
    {
      title: '🕰️ Desktop-First (max-width)',
      body: `This logic involves writing your base styles for massive desktop monitors. Then, you use <code>max-width</code> media queries to restrict the design for smaller screens. **This is generally discouraged today**, but you will see older codebases using it.`,
      code: { lang: 'css', src: `/* Desktop foundation (complex rows) */
.card-container {
  display: flex;
  flex-direction: row;
  width: 50%;
}

/* Try to fix it for mobile (strip things away) */
@media (max-width: 767px) {
  .card-container {
    flex-direction: column;
    width: 100%;
  }
}` }
    }
  ],
  realLife: `Desktop-first is like buying a massive mansion, and then being forced to move all your belongings into a tiny studio apartment (mobile). You have to constantly throw things away (hide elements) to make it fit. It's much messier than Mobile-first!`,
  youtube: [
    { title: 'Responsive Design Strategies', channel: 'Traversy Media', url: 'https://youtu.be/srvUrASNj0s' }
  ],
  exam: [
    { q: 'What type of media query does a Desktop-first design strategy rely on?', options: ['min-width', 'max-width', 'screen-max', 'mobile-width'], answer: 1 },
    { q: 'Why is Desktop-first generally discouraged for modern web development?', options: ['It forces mobile phones to download complex desktop CSS rules they don\'t need', 'It looks ugly', 'It doesn\'t work in Safari', 'It uses more RAM on laptops'], answer: 0 },
    { q: 'If base CSS has "display: grid" and a max-width 700px query changes it to "display: none", what do mobile users see?', options: ['A grid', 'An error', 'Nothing (it is hidden)', 'A flexbox'], answer: 2 },
    { q: 'In Desktop-first, the base code outside of media queries applies to...', options: ['Small screens', 'Large screens', 'Print', 'Screen readers'], answer: 1 },
    { q: 'True or False: If you are maintaining a 10-year old codebase, you might have to write max-width queries because the site was built Desktop-first.', options: ['True', 'False', 'Never', 'Always'], answer: 0 }
  ]
};

LESSONS['2-6'] = {
  title: 'Tailwind CSS Utility Classes',
  emoji: '🪶',
  tags: ['Tailwind', 'Frameworks', 'CSS'],
  intro: `Instead of writing custom CSS classes (like \`.btn-primary\`) and jumping between files, **Tailwind CSS** provides pre-existing utility classes that you apply directly in your HTML (\`bg-blue-500 text-white px-4 py-2\`).`,
  sections: [
    {
      title: '⚡ Core Utility Classes',
      body: `Tailwind creates tiny classes for every CSS property.<br><br>
- <b>Layout</b>: <code>flex</code>, <code>grid</code>, <code>hidden</code><br>
- <b>Spacing (4px base factor)</b>: <code>p-4</code> (padding 16px), <code>m-2</code> (margin 8px)<br>
- <b>Sizing</b>: <code>w-full</code> (width 100%), <code>h-screen</code> (100vh height)<br>
- <b>Colors</b>: <code>bg-blue-500</code>, <code>text-gray-900</code>`,
      code: { lang: 'html', src: `<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
  Click Me
</button>` }
    },
    {
      title: '🎯 Why use Tailwind?',
      body: `1. **Speed:** No context switching between HTML/CSS.<br>2. **Consistency:** Enforces a rigid design system (you can't accidentally pick the wrong shade of gray).<br>3. **Size:** Unused CSS is deleted in production (PurgeCSS).` }
  ],
  realLife: `Instead of building custom Lego blocks from scratch in a plastic mold factory (writing custom CSS), Tailwind gives you a bucket of 10,000 perfectly pre-made standard Lego bricks. You just snap them together directly on the page. It's incredibly fast!`,
  youtube: [
    { title: 'Tailwind CSS in 100 Seconds', channel: 'Fireship', url: 'https://youtu.be/mr15Xzb1Ook' },
    { title: 'Tailwind CSS Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/dFgzHOX84xQ' }
  ],
  exam: [
    { q: 'What is Tailwind CSS?', options: ['A javascript framework', 'A Utility-first CSS framework', 'A database', 'An older version of Bootstrap'], answer: 1 },
    { q: 'What does the Tailwind class "p-4" generally equate to?', options: ['4 pixels of padding', '4% padding', 'Padding level 4 (usually 1rem or 16px)', 'A paragraph with 4 lines'], answer: 2 },
    { q: 'Which class makes text bold and centered in Tailwind?', options: ['text-strong center', 'font-bold text-center', 'bold text-middle', 'b center-text'], answer: 1 },
    { q: 'How does Tailwind handle hover states?', options: ['You write it in a CSS file', 'With a prefix like hover:bg-black', 'By using javascript events', 'You cannot use hover in Tailwind'], answer: 1 },
    { q: 'Why do developers prefer Tailwind over writing custom CSS?', options: ['It requires no setup', 'It creates smaller HTML files', 'It eliminates context switching and provides a strict design system out of the box', 'It makes the server run faster'], answer: 2 }
  ]
};

LESSONS['2-7'] = {
  title: 'Responsive Navigation',
  emoji: '🧭',
  tags: ['Navigation', 'Tailwind', 'Practice'],
  intro: `Navigations are the ultimate responsive challenge. You need a row of links on desktop, but a hidden "hamburger" toggle on mobile. We combine Flexbox, Media Queries (or Tailwind prefixes), and Mobile-first logic to achieve this.`,
  sections: [
    {
      title: '🪄 Tailwind Responsive Prefixes',
      body: `Add a breakpoint prefix **before** the utility to apply it *only* at that size. Tailwind uses mobile-first, meaning non-prefixed classes apply to mobile!`,
      code: { lang: 'html', src: `<!-- Default (Mobile): Stacked flex column -->
<!-- Md (Tablet+): Switch to flex row -->
<nav class="flex flex-col md:flex-row md:justify-between p-4">
  <div class="logo">MySite</div>
  
  <ul class="flex flex-col md:flex-row gap-4">
    <li>Home</li>
    <li>About</li>
  </ul>
</nav>` }
    }
  ],
  realLife: `Building a responsive navbar is a rite of passage for every developer. It demonstrates you understand how to break down a design structurally and physically move elements based on screen real estate restrictions using CSS modifiers.`,
  youtube: [
    { title: 'Responsive Tailwind Navbar', channel: 'Web Dev Simplified', url: 'https://youtu.be/tS7upsfHXmY' }
  ],
  exam: [
    { q: 'In Tailwind, what does the "md:flex-row" class do?', options: ['Changes the margin', 'Sets the layout to a row only on medium-sized screens and up', 'Hides the element on mobile', 'Changes the color to medium red'], answer: 1 },
    { q: 'If you want an element hidden on mobile but visible on desktop, what Tailwind classes do you use?', options: ['hide show-desktop', 'none block-lg', 'hidden lg:block', 'display-none flex-md'], answer: 2 },
    { q: 'What is a "hamburger" menu?', options: ['A menu related to food websites', 'The three-line icon used to toggle vertical navigation links on mobile', 'A 3D button style', 'A deprecated HTML tag'], answer: 1 },
    { q: 'When designing a navbar, what flex direction is best for the mobile view?', options: ['row', 'row-reverse', 'column', 'absolute'], answer: 2 },
    { q: 'What is the standard CSS property used to create space between the navigation links?', options: ['margin-padding', 'between-space', 'gap', 'offset'], answer: 2 }
  ]
};

LESSONS['2-8'] = {
  title: 'Card Layouts',
  emoji: '🃏',
  tags: ['Cards', 'Grid', 'UI'],
  intro: `Cards are the fundamental building block of modern UI (think YouTube thumbnails, Amazon products, Airbnb listings). We use CSS Grid's "auto-fit" magic to create responsive card grids without ANY media queries!`,
  sections: [
    {
      title: '✨ The Magic Auto-Fit Grid',
      body: `This incredibly powerful single line of CSS creates as many columns as will fit, ensuring each is at least 250px wide. If space runs out, it auto-wraps the cards.`,
      code: { lang: 'css', src: `.card-container {
  display: grid;
  /* Create columns dynamically based on screen width! */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}` }
    },
    {
      title: '🃏 Constructing the Card itself',
      body: `Use Flexbox (column) *inside* the card to stack the image, title, and "Buy" button neatly.`,
      code: { lang: 'css', src: `.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden; /* Keeps image inside borders */
}` }
    }
  ],
  realLife: `Open Netflix. The rows of movie posters are card structures using Flexbox or Grid. They are self-contained boxes with an image on top, text in the middle, and tags on the bottom. Responsive grid ensures you see 5 movies on your TV, 3 on your iPad, and 1 on your phone.`,
  youtube: [
    { title: 'CSS Grid Responsive Cards', channel: 'Kevin Powell', url: 'https://youtu.be/705XCEruZFs' }
  ],
  exam: [
    { q: 'What does "repeat(auto-fit, minmax(250px, 1fr))" do?', options: ['Creates exactly 3 columns', 'Dynamically generates responsive columns that are at least 250px wide, and stretch to share space', 'Hides cards on mobile', 'Centers the cards perfectly'], answer: 1 },
    { q: 'Why is "overflow: hidden" often used on card containers?', options: ['To hide the text', 'To ensure if an image image goes to the edge, it respects the card\'s rounded corners and doesn\'t spill out', 'To hide the scrollbar', 'To make it responsive'], answer: 1 },
    { q: 'If making a horizontal card (Image on left, text on right), what property do you use on the card?', options: ['display: grid', 'display: block', 'display: flex; flex-direction: row;', 'align-items: center'], answer: 2 },
    { q: 'What is the purpose of box-shadow on a card?', options: ['To make the text readable', 'To create a 3D elevation effect lifting it off the background', 'To draw an outline', 'To darken the image'], answer: 1 },
    { q: 'What is the difference between auto-fit and auto-fill in Grid?', options: ['They are the same', 'auto-fit collapses empty tracks stretching items out, auto-fill leaves empty tracks in place', 'auto-fit is for mobile, auto-fill is for desktop', 'auto-fit uses images'], answer: 1 }
  ]
};

LESSONS['2-9'] = {
  title: 'Responsive Images',
  emoji: '🖼️',
  tags: ['Images', 'Responsive', 'Optimization'],
  intro: `An image that is thousands of pixels wide will break your layout and cause a horizontal scrollbar if you don't make it fluid. Responsive images shrink and grow elegantly with their container.`,
  sections: [
    {
      title: '🌊 Fluid Image Rule',
      body: `The golden rule of responsive images: Never use fixed pixel widths. Instead, set the image max-width to 100% so it never exceeds its parent container.`,
      code: { lang: 'css', src: `/* Apply globally to prevent broken layouts */
img {
  max-width: 100%;
  height: auto; /* Maintains aspect ratio */
}` }
    },
    {
      title: '✂️ Object-Fit Magic',
      body: `When you need an image to perfectly fill a square or specific height (like an avatar or card header) without squishing or stretching, use <code>object-fit: cover</code>.`,
      code: { lang: 'css', src: `.profile-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  
  /* Acts like background-size: cover! Fill without stretching */
  object-fit: cover;
}` }
    }
  ],
  realLife: `Have you ever opened a website on your phone and seen tiny text, requiring you to swipe a mile left to right just to read a paragraph? That happened because a giant fixed-width image blew the layout apart. Setting max-width 100% solves that instantly.`,
  youtube: [
    { title: 'Responsive Images using CSS', channel: 'Kevin Powell', url: 'https://youtu.be/jAOXEDhOEQg' }
  ],
  exam: [
    { q: 'What is the golden rule for responsive image CSS?', options: ['width: 1000px', 'max-width: 100%; height: auto;', 'display: image', 'scale: fit'], answer: 1 },
    { q: 'What happens if you set BOTH width and height of an image as fixed pixels (e.g. 500x500)?', options: ['It will look perfect always', 'The image may become distorted/squished if the original aspect ratio isn\'t 1:1', 'It will automatically crop', 'It will turn into a background'], answer: 1 },
    { q: 'Which CSS property allows an image tag to behave like background-cover, preventing stretching?', options: ['image-fill', 'object-fit: cover', 'image-size: fit', 'cover-image: true'], answer: 1 },
    { q: 'What does "height: auto" do on an image with max-width: 100%?', options: ['Forces the height to match the screen', 'Automatically calculates the correct height to maintain the image\'s natural aspect ratio as the width shrinks', 'Hides the height', 'Fills the parent container visually'], answer: 1 },
    { q: 'Why do large, non-responsive images break mobile layouts?', options: ['Because mobile phones can\'t load images', 'Because they bleed outside the viewport width, creating an unwanted horizontal scrollbar', 'Because the colors invert', 'Because they violate SEO'], answer: 1 }
  ]
};

// ════════════ PHASE 3: JavaScript Fundamentals ════════════

LESSONS['3-0'] = {
  title: 'Variables: var, let, const',
  emoji: '📦',
  tags: ['JavaScript', 'Variables', 'Basics'],
  intro: `If HTML is the skeleton and CSS is the skin, **JavaScript** is the nervous system. It makes web pages interactive. Let's start with **Variables**, the labeled boxes where you store information.`,
  sections: [
    {
      title: '📦 Storing Data in JavaScript',
      body: `Avoid using the old <code>var</code> keyword. Instead, use:<br>- <code>let</code>: When the value will change later (reassignable).<br>- <code>const</code>: When the value is constant and will never change.`,
      code: { lang: 'javascript', src: `// let: Can be reassigned
let age = 25;
age = 26; // ✅ Valid

// const: Cannot be reassigned
const birthYear = 1998;
// birthYear = 1999; ❌ Error!

// Naming: Use camelCase!
let firstName = "John";` }
    }
  ],
  realLife: `Think of variables like storage containers in your kitchen. 'const' is a jar of spices with the lid glued shut—you can see what's inside but you can't replace the spices! 'let' is a tupperware container—you can put leftovers inside today, wash it, and put soup in it tomorrow.`,
  youtube: [
    { title: 'Variables in JavaScript', channel: 'Programming with Mosh', url: 'https://youtu.be/W6NZfCO5SIk' }
  ],
  exam: [
    { q: 'Which keyword should you use to declare a variable whose value will change later?', options: ['var', 'const', 'let', 'mutable'], answer: 2 },
    { q: 'What happens if you try to reassign a variable declared with "const"?', options: ['It silently ignores the change', 'It creates a new variable', 'It throws a TypeError', 'It works perfectly'], answer: 2 },
    { q: 'What is the recommended naming convention for variables in JavaScript?', options: ['snake_case', 'PascalCase', 'kebab-case', 'camelCase'], answer: 3 },
    { q: 'Why is the "var" keyword generally avoided in modern JavaScript?', options: ['It is slower', 'Because of its function-level scoping which can cause unexpected bugs', 'It cannot hold numbers', 'It requires strict mode'], answer: 1 },
    { q: 'Which of these is a valid variable name?', options: ['1stName', 'first-name', 'firstName', 'first Name'], answer: 2 }
  ]
};

LESSONS['3-1'] = {
  title: 'Data Types',
  emoji: '🏷️',
  tags: ['Data Types', 'Primitives', 'JavaScript'],
  intro: `JavaScript is **dynamically typed**, meaning you don't declare the type of data (like String or Int); JS figures it out automatically!`,
  sections: [
    {
      title: '🧬 Primitive Types',
      body: `There are several basic data types stored by value:<br>
- **String**: Text (<code>"Hello"</code>)<br>
- **Number**: Integers & floats (<code>25</code>, <code>3.14</code>)<br>
- **Boolean**: Logical (<code>true</code>, <code>false</code>)<br>
- **Undefined**: Declared but empty.<br>
- **Null**: Intentional empty value.`,
      code: { lang: 'javascript', src: `let name = "Alice";    // String
let price = 9.99;      // Number
let isAdmin = false;   // Boolean
let emptyValue = null; // Null

// Check types
console.log(typeof age); // "number"` }
    }
  ],
  realLife: `If variables are labeled boxes, data types describe what kind of physical object can fit in the box. Strings are sticky notes with text on them. Numbers are calculator readouts. Booleans are simple light switches (ON/OFF, True/False).`,
  youtube: [
    { title: 'JavaScript Data Types', channel: 'Net Ninja', url: 'https://youtu.be/c5IGOjzGlg4' }
  ],
  exam: [
    { q: 'What type of data is: 3.14159?', options: ['Float', 'Double', 'Number', 'Integer'], answer: 2 },
    { q: 'What does typeof null return in JavaScript?', options: ['null', 'undefined', 'object', 'error'], answer: 2 },
    { q: 'If you declare "let myVar;" without assigning a value, what is its data type?', options: ['null', 'undefined', 'string', 'NaN'], answer: 1 },
    { q: 'Which of these is a String?', options: ['false', '42', '"42"', 'undefined'], answer: 2 },
    { q: 'Is JavaScript statically typed or dynamically typed?', options: ['Statically typed', 'Dynamically typed', 'Neither', 'Both'], answer: 1 }
  ]
};

LESSONS['3-2'] = {
  title: 'Operators',
  emoji: '🧮',
  tags: ['Math', 'Logic', 'Operators'],
  intro: `Operators allow you to perform math, assign values, and compare data. The most critical operator to master is strict equality (<code>===</code>)!`,
  sections: [
    {
      title: '⚖️ Comparison & Logic',
      body: `**Always use <code>===</code>**! Loose equality (<code>==</code>) only checks the value, which causes terrible bugs because JavaScript coerces types to match.<br><br>Use Logical operators: AND (<code>&&</code>), OR (<code>||</code>), NOT (<code>!</code>).`,
      code: { lang: 'javascript', src: `5 == "5";  // ✅ true (Loose: value only)
5 === "5"; // ❌ false (Strict: value AND type)

let a = 10;
a += 5; // Same as a = a + 5 -> 15

// Both must be true
(5 > 3) && (10 === 10); // True

// At least one must be true
(1 > 5) || (2 === 2); // True` }
    }
  ],
  realLife: `The difference between "==" and "===" is crucial. Imagine you ordered a literal Apple (the fruit) online. JavaScript's loose equality (==) looks at an Apple iPhone and says "Eh, they're both called Apple, here's your phone." Strict equality (===) looks at them and says "No, the name matches but the TYPE of object is completely different!"`,
  youtube: [
    { title: 'JavaScript Operators', channel: 'Web Dev Simplified', url: 'https://youtu.be/yW1EUSL_Hns' }
  ],
  exam: [
    { q: 'What does 5 === "5" evaluate to?', options: ['true', 'false', 'undefined', 'Error'], answer: 1 },
    { q: 'What does the % (modulus) operator do?', options: ['Calculates percentages', 'Divides two numbers', 'Returns the remainder of division', 'Multiplies two numbers'], answer: 2 },
    { q: 'Which logical operator requires BOTH conditions to be true?', options: ['||', '&&', '!', '!='], answer: 1 },
    { q: 'What is the shorthand for "x = x + 1"?', options: ['x++', 'x+1', '+x', 'x=>1'], answer: 0 },
    { q: 'What does !true evaluate to?', options: ['true', 'false', 'null', 'undefined'], answer: 1 }
  ]
};

LESSONS['3-3'] = {
  title: 'If/Else Conditions',
  emoji: '🚦',
  tags: ['Control Flow', 'Conditions', 'Logic'],
  intro: `Code often needs to behave differently based on dynamic conditions (e.g., if the user is authenticated, show the dashboard; else, show the login page).`,
  sections: [
    {
      title: '🔀 Branching Logic',
      body: `Use <code>if</code>, <code>else if</code>, and <code>else</code> to create paths in your code based on boolean (true/false) evaluations.`,
      code: { lang: 'javascript', src: `let age = 20;

if (age >= 18) {
  console.log("Welcome to the website.");
} else if (age >= 13) {
  console.log("You need parental consent.");
} else {
  console.log("Access denied.");
}` }
    }
  ],
  realLife: `If/Else logic is just your standard brain routine. "IF it is raining outside, I will bring an umbrella. ELSE IF it is cloudy, I will wear a jacket. ELSE, I will wear a t-shirt."`,
  youtube: [
    { title: 'If Else Statements in JS', channel: 'Programming with Mosh', url: 'https://youtu.be/IsG4Xd6LlsA' }
  ],
  exam: [
    { q: 'Which statement starts a conditional logic block?', options: ['then', 'when', 'if', 'condition'], answer: 2 },
    { q: 'If multiple conditions might be true, which code block executes in an if -> else if chain?', options: ['All of them', 'Only the first one that evaluates to true', 'Only the last one that evaluates to true', 'It causes an error'], answer: 1 },
    { q: 'What serves as the "catch-all" block at the end of an if/else chain?', options: ['catch', 'finally', 'else', 'default'], answer: 2 },
    { q: 'If x = 10, does "if (x > 10)" evaluate to true or false?', options: ['True', 'False', 'Undefined', 'Error'], answer: 1 },
    { q: 'What must be placed inside the parentheses of an if() statement?', options: ['A string', 'A variable assignment', 'An expression that evaluates to truthy or falsy', 'HTML code'], answer: 2 }
  ]
};

LESSONS['3-4'] = {
  title: 'Switch Statements',
  emoji: '🎛️',
  tags: ['Switch', 'Conditions', 'Ternary'],
  intro: `When you have many specific cases to check against a single variable, a <code>switch</code> statement is much cleaner than a massive chain of <code>else if</code> blocks.`,
  sections: [
    {
      title: '🛤️ The Switch Case',
      body: `You must include a <code>break;</code> statement after every case, or the code will "fall through" and execute the next case accidentally!`,
      code: { lang: 'javascript', src: `let role = "admin";

switch (role) {
  case "admin":
    console.log("Full Access");
    break; // Stops execution here
  case "editor":
    console.log("Can edit posts");
    break;
  default: // Like 'else'
    console.log("Read only");
}` }
    },
    {
      title: '❓ Ternary Operator',
      body: `A powerful 1-line shorthand for simple If-Else statements.`,
      code: { lang: 'javascript', src: `// condition ? ifTrue : ifFalse
let access = (age >= 18) ? "Allowed" : "Denied";` }
    }
  ],
  realLife: `A switch statement is like an old-school telephone operator. You plug in a variable ("Get me the operator for New York"), and it automatically switches the cable directly to the "New York" case block!`,
  youtube: [
    { title: 'Switch Statements Explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/j5vWqCudLzY' }
  ],
  exam: [
    { q: 'What keyword stops a switch block from executing the cases below it?', options: ['stop', 'return', 'exit', 'break'], answer: 3 },
    { q: 'What serves as the "catch-all" block in a switch statement?', options: ['else', 'default', 'all', 'any'], answer: 1 },
    { q: 'What is the syntax structure of the Ternary Operator?', options: ['condition ? true : false', 'true ? false : condition', 'condition : true ? false', 'if condition ? true : else false'], answer: 0 },
    { q: 'What happens if you forget a "break" statement in a switch case?', options: ['Syntax Error', 'The case won\'t run', 'It falls through and runs the code in the next cases until it hits a break', 'It breaks immediately'], answer: 2 },
    { q: 'Which symbol is used in the ternary operator?', options: ['&', '!', '?', '#'], answer: 2 }
  ]
};

LESSONS['3-5'] = {
  title: 'For & While Loops',
  emoji: '🔁',
  tags: ['Loops', 'Iteration', 'Control Flow'],
  intro: `Computers are great at doing repetitive tasks instantly. Instead of writing <code>console.log()</code> 100 times, you use a loop to iterate.`,
  sections: [
    {
      title: '🔄 Repeating Code',
      body: `Use a **For Loop** when you know how many times to repeat. It takes 3 arguments: the start, the condition to stop, and the increment step.<br><br>Use a **While Loop** when you don't know how many times it will run (e.g., "While the user hasn't won the game yet").`,
      code: { lang: 'javascript', src: `// Start at 0; Run while i < 5; Add 1 each time
for (let i = 0; i < 5; i++) {
  console.log("Iteration " + i);
}

// Unknown iterations
let count = 0;
while (count < 5) {
  count++;
}` }
    }
  ],
  realLife: `A 'For' loop is like running on a track: you say "I will run exactly 4 laps, increment my lap counter each time, and then stop." A 'While' loop is like running until you're tired: "While my energy > 0, keep running."`,
  youtube: [
    { title: 'JavaScript Loops Tutorial', channel: 'Fireship', url: 'https://youtu.be/s9wW2PpJsmQ' }
  ],
  exam: [
    { q: 'What are the three parts of a For loop definition?', options: ['variable, array, object', 'initializer, condition, incrementor', 'start, stop, error', 'index, value, key'], answer: 1 },
    { q: 'Which loop is best used when you don\'t know exactly how many iterations will occur in advance?', options: ['For loop', 'While loop', 'For...of loop', 'Switch loop'], answer: 1 },
    { q: 'What happens if a While loop\'s condition never evaluates to false?', options: ['It stops automatically after 1000 runs', 'It creates an infinite loop and crashes the browser', 'It throws an error immediately', 'It skips the loop'], answer: 1 },
    { q: 'What does "i++" do in a loop?', options: ['Adds 2 to i', 'Multiplies i by 2', 'Increases the value of i by 1', 'Exits the loop'], answer: 2 },
    { q: 'Which keyword immediately terminates an entire loop early?', options: ['continue', 'stop', 'exit', 'break'], answer: 3 }
  ]
};

LESSONS['3-6'] = {
  title: 'Arrays & Array Methods',
  emoji: '📚',
  tags: ['Arrays', 'Data Structures', 'Lists'],
  intro: `Arrays store multiple values in a single variable. They are **zero-indexed**, meaning the very first item is at position 0!`,
  sections: [
    {
      title: '📂 Lists of Data',
      body: `Grab array items using bracket notation <code>array[0]</code>. Use powerful built-in methods to modify arrays on the fly.`,
      code: { lang: 'javascript', src: `const fruits = ["Apple", "Banana", "Orange"];

// Accessing
console.log(fruits[0]); // "Apple"
console.log(fruits.length); // 3

// Adding to the END
fruits.push("Mango"); 

// Removing from the END
fruits.pop();

// Removing from the START
fruits.shift();` }
    }
  ],
  realLife: `An array is just a bookshelf. You know exactly what book is at position 0, position 1, and position 2. If you want to put a new book at the end of the shelf, you "push" it there.`,
  youtube: [
    { title: '8 Must Know JS Array Methods', channel: 'Web Dev Simplified', url: 'https://youtu.be/R8rmfD9Y5-c' }
  ],
  exam: [
    { q: 'What number does a JavaScript array index start at?', options: ['1', '0', '-1', 'none'], answer: 1 },
    { q: 'Which method adds a new element to the END of an array?', options: ['unshift()', 'push()', 'pop()', 'concat()'], answer: 1 },
    { q: 'Which method removes the LAST element of an array?', options: ['pop()', 'shift()', 'delete()', 'remove()'], answer: 0 },
    { q: 'If arr = ["a", "b", "c"], what is arr[1]?', options: ['"a"', '"b"', '"c"', 'undefined'], answer: 1 },
    { q: 'How do you find the total number of items in an array called "myList"?', options: ['myList.size()', 'myList.count', 'myList.length', 'myList.amount'], answer: 2 }
  ]
};

LESSONS['3-7'] = {
  title: 'Strings & String Methods',
  emoji: '✍️',
  tags: ['Strings', 'Text', 'Methods'],
  intro: `Strings are simply text. In JavaScript, strings are packed with built-in methods to easily manipulate reading, parsing, and formatting text data.`,
  sections: [
    {
      title: '🔤 Manipulating Text',
      body: `Use **Template Literals** (backticks) to inject variables directly into strings using <code>\${}</code>. It's much cleaner than using the <code>+</code> operator.`,
      code: { lang: 'javascript', src: `const name = "Alice";
// Template Literal
const msg = \`Hi, \${name}!\`; // "Hi, Alice!"

const text = "  Learn JS  ";
text.length;          // 12
text.toUpperCase();   // "  LEARN JS  "
text.trim();          // "Learn JS" (removes spaces)
text.includes("JS");  // true
text.split(" ");      // Splits into array by spaces` }
    }
  ],
  realLife: `Strings are just necklaces of characters. String methods are the tools you use to inspect the necklace (includes), polish the necklace (trim), or take the necklace apart into individual beads (split).`,
  youtube: [
    { title: 'JavaScript String Methods', channel: 'Programming with Mosh', url: 'https://youtu.be/80M2_Y2M6mU' }
  ],
  exam: [
    { q: 'Which character is used to create a Template Literal in JS?', options: ['\' (Single quote)', '" (Double quote)', '\` (Backtick)', '~ (Tilde)'], answer: 2 },
    { q: 'How do you inject a variable "age" into a template literal string?', options: ['{age}', '\${age}', '%age%', '+age+'], answer: 1 },
    { q: 'Which method removes whitespace from both ends of a string?', options: ['strip()', 'clean()', 'trim()', 'slice()'], answer: 2 },
    { q: 'What does the .includes("JS") method return?', options: ['A string', 'An array', 'A boolean (true/false)', 'A number'], answer: 2 },
    { q: 'Which string method converts "hello" into an array ["h", "e", "l", "l", "o"]?', options: ['split("")', 'slice(0)', 'toArray()', 'join("")'], answer: 0 }
  ]
};

LESSONS['3-8'] = {
  title: 'Objects',
  emoji: '🏠',
  tags: ['Objects', 'JSON', 'Data Structures'],
  intro: `While Arrays are lists of data, **Objects** represent complex single entities holding **Key-Value pairs** (properties) and actions (methods).`,
  sections: [
    {
      title: '🔑 Key-Value Pairs',
      body: `You define objects with curly braces <code>{}</code>. You access the data inside them using dot notation (e.g., <code>person.firstName</code>).`,
      code: { lang: 'javascript', src: `const person = {
  firstName: "John",
  age: 30,
  isEmployed: true,
  
  // Method!
  greet: function() {
    console.log(\`Hi, I'm \${this.firstName}\`);
  }
};

// Accessing Data
console.log(person.age); // 30
console.log(person["firstName"]); // "John"

// Calling Method
person.greet(); // "Hi, I'm John"` }
    }
  ],
  realLife: `An object is like a real-life Car. A Car object has *properties* (color: red, brand: Toyota, weight: 2000kg). It also has *methods* which are actions it can take (startEngine(), brake(), honkHorn()).`,
  youtube: [
    { title: 'JavaScript Objects for Beginners', channel: 'Programming with Mosh', url: 'https://youtu.be/PR1nch365_0' }
  ],
  exam: [
    { q: 'How do you declare an empty object in JavaScript?', options: ['let obj = [];', 'let obj = {};', 'let obj = ();', 'let obj = "";'], answer: 1 },
    { q: 'What is the most common way to access the "age" property of an object named "user"?', options: ['user[age]', 'user->age', 'user.age', 'user(age)'], answer: 2 },
    { q: 'What is a function placed inside an object called?', options: ['A property', 'A method', 'A nested loop', 'A class'], answer: 1 },
    { q: 'In an object method, what keyword refers to the object itself?', options: ['my', 'self', 'this', 'object'], answer: 2 },
    { q: 'What punctuation separates properties in an object definition?', options: ['Semicolon (;)', 'Comma (,)', 'Colon (:)', 'Period (.)'], answer: 1 }
  ]
};

LESSONS['3-9'] = {
  title: 'Functions',
  emoji: '⚙️',
  tags: ['Functions', 'Arrow Functions', 'Reusable'],
  intro: `A function is a **recipe**. You define the steps once, give it a name, and then you can "cook" (execute) it as many times as you want!`,
  sections: [
    {
      title: '📜 Function Declarations vs Arrows',
      body: `Modern JavaScript heavily uses **Arrow Functions** (<code>=></code>) for their clean, concise syntax. Functions accept **Parameters** (inputs) and <code>return</code> a result (output).`,
      code: { lang: 'javascript', src: `// Standard Declaration
function add(a, b) {
  return a + b;
}

// Arrow Function (Clean!)
const multiply = (a, b) => {
  return a * b;
};

// Arrow Function (Implicit Return 1-liner)
const divide = (a, b) => a / b;

console.log(add(5, 3)); // 8` }
    }
  ],
  realLife: `Think of a function as a coffee machine. You provide the INPUT parameters (coffee beans and water). The coffee machine runs its internal code (brewing). And it RETURNs the output (a hot cup of coffee).`,
  youtube: [
    { title: 'JavaScript Functions Tutorial', channel: 'Programming with Mosh', url: 'https://youtu.be/N8ap4k_1QEQ' }
  ],
  exam: [
    { q: 'What does the "return" keyword do in a function?', options: ['Prints text to the console', 'Restarts the function', 'Stops the function and outputs the specified value back to the caller', 'Throws an error'], answer: 2 },
    { q: 'What is the modern, concise syntax for writing functions introduced in ES6?', options: ['Standard Functions', 'Arrow Functions (=>)', 'Class Functions', 'Object Functions'], answer: 1 },
    { q: 'What are the variables passed INTO a function when calling it called?', options: ['Returns', 'Arguments', 'Arrays', 'Scope'], answer: 1 },
    { q: 'If an arrow function has no curly braces, what does it automatically do?', options: ['Errors out', 'Returns null', 'Implicitly returns the evaluation of the expression', 'Loops infinitely'], answer: 2 },
    { q: 'Can a function execute without the parentheses "()" operator?', options: ['Yes', 'No, referencing the name without () just points to the function definition, it doesn\'t run it', 'Only arrow functions can', 'Yes, in strict mode'], answer: 1 }
  ]
};

LESSONS['3-10'] = {
  title: 'Scope & Closures',
  emoji: '🔭',
  tags: ['Scope', 'Advanced JS', 'Closures'],
  intro: `Scope determines the visibility and accessibility of variables. If you try to use a variable created inside a function on the outside, JavaScript will throw an error!`,
  sections: [
    {
      title: '🔐 Global vs Local Scope',
      body: `**Global variables** live outside all functions and can be seen by everyone. **Local variables** (created inside {}) are destroyed when the function finishes running!`,
      code: { lang: 'javascript', src: `let globalVar = "Everyone sees me";

function testScope() {
  let localVar = "Only the function sees me";
  console.log(globalVar); // ✅ Works!
}

testScope();
// console.log(localVar); ❌ ERROR: Not defined!` }
    }
  ],
  realLife: `Global Scope is the sky—everyone standing on Earth can look up and see the same sun. Local Block Scope is like your house—people in the living room can see the TV, but people outside walking on the street cannot see your TV.`,
  youtube: [
    { title: 'JavaScript Scope Explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/XgSjoHgy3Rk' }
  ],
  exam: [
    { q: 'Where do Global variables reside?', options: ['Inside the main function', 'Outside of all functions and blocks', 'Inside conditional statements', 'In the CSS file'], answer: 1 },
    { q: 'If you declare "let x = 10;" inside an if-statement block, can you access it outside the block?', options: ['No, "let" is block-scoped', 'Yes, "let" is global-scoped', 'Yes, but it is read-only', 'No, JavaScript doesn\'t allow variables inside if-statements'], answer: 0 },
    { q: 'What happens if you try to console.log a variable that is trapped inside another function\'s local scope?', options: ['It prints undefined', 'It prints null', 'It throws a ReferenceError (not defined)', 'It prints the value normally'], answer: 2 },
    { q: 'Why is it bad practice to use too many global variables?', options: ['It makes the code too fast', 'They consume too much battery', 'Any function can randomly modify them, causing chaotic bugs (pollution)', 'They interfere with HTML'], answer: 2 },
    { q: 'True or False: An inner nested function can look "up" and access the variables of its parent function.', options: ['True', 'False', 'Only if using var', 'Only once'], answer: 0 }
  ]
};

LESSONS['3-11'] = {
  title: 'Problem Solving',
  emoji: '🧩',
  tags: ['Logic', 'Algorithms', 'Pseudocode'],
  intro: `Coding is 10% typing syntax and 90% solving problems. Before writing a single line of JavaScript, you must learn to think like an engineer.`,
  sections: [
    {
      title: '📝 Pseudocode to JS',
      body: `Always write **Pseudocode** first—plain English steps detailing the logic. Break down huge problems into tiny, solvable steps. Use <code>console.log()</code> constantly to verify your assumptions!`,
      code: { lang: 'javascript', src: `// PROBLEM: Find largest num in array
// 1. Assume the first number is largest
// 2. Loop through every number
// 3. If current > largest, update largest
// 4. Return largest

function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}` }
    }
  ],
  realLife: `You already write pseudocode! If someone asks you how to make a PB&J sandwich, you give them sequence steps: 1) Get bread 2) Open peanut butter 3) Spread on bread. Problem solving in JS is literally just giving those exact tiny sequential instructions to a very literal, very dumb computer.`,
  youtube: [
    { title: 'Think Like a Programmer', channel: 'Fireship', url: 'https://youtu.be/azcrPFhaY9k' }
  ],
  exam: [
    { q: 'What is Pseudocode?', options: ['A secret coding language', 'Plain English steps written out before writing actual code', 'Code that has bugs in it', 'Machine code'], answer: 1 },
    { q: 'What is the most effective built-in JavaScript tool for debugging your logic step-by-step?', options: ['alert()', 'console.log()', 'document.write()', 'debugger()'], answer: 1 },
    { q: 'What is the "Accumulator" problem pattern?', options: ['Looping through an array to find a specific item', 'Looping through an array to sum up values into a final total', 'Sorting an array', 'Filtering out bad data'], answer: 1 },
    { q: 'When breaking a problem down, what is an "edge case"?', options: ['The main path of execution', 'A visual border on the screen', 'An unusual or extreme input scenario (like passing an empty array) that might break the code', 'A syntax error'], answer: 2 },
    { q: 'True or False: The best developers memorize all code and never need to write pseudocode or Google things.', options: ['True', 'False (Everyone Googles and plans!)', 'True, but only senior devs', 'False, they use AI exclusively'], answer: 1 }
  ]
};

// ════════════ PHASE 4: DOM & Interactive JS ════════════

LESSONS['4-0'] = {
  title: 'What is the DOM',
  emoji: '🌳',
  tags: ['DOM', 'Document', 'JavaScript'],
  intro: `**The Document Object Model (DOM)** is the bridge between your HTML and JavaScript. When a browser loads a webpage, it creates a **tree structure** of all the HTML elements. This tree is the DOM.`,
  sections: [
    {
      title: '🏗️ The DOM Tree',
      body: `JavaScript sees your HTML as a nested object structure where every tag is a **Node** that can be manipulated.<br>You must ensure your JavaScript runs **after** the HTML loads. Use the <code>DOMContentLoaded</code> event or put your script at the very end of the body.`,
      code: { lang: 'javascript', src: `// Safe execution block
document.addEventListener('DOMContentLoaded', () => {
  // DOM is ready! Safe to manipulate nodes here.
  console.log("Ready!");
});` }
    }
  ],
  realLife: `The DOM is like the blueprint of a house. The people living inside (JavaScript) can look at the blueprint, find exactly where the kitchen is located ("Select Element"), and remodel it by adding a new island ("Manipulate Node").`,
  youtube: [
    { title: 'DOM Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/0ik6X4DJKCc' }
  ],
  exam: [
    { q: 'What does DOM stand for?', options: ['Data Object Model', 'Document Object Model', 'Digital Object Matrix', 'Dynamic Option Menu'], answer: 1 },
    { q: 'What structure does the DOM use to represent HTML elements?', options: ['A flat list', 'A database', 'A tree structure (nodes)', 'A grid'], answer: 2 },
    { q: 'Why should you put a <script> tag at the end of the <body> or use DOMContentLoaded?', options: ['To make the text bold', 'To ensure the HTML tags exist before JavaScript tries to manipulate them', 'To hide the code from users', 'To bypass security'], answer: 1 },
    { q: 'In the DOM, what is an HTML tag referred to as?', options: ['A Node', 'A CSS Block', 'A Variable', 'A Function'], answer: 0 },
    { q: 'Does modifying the DOM physically change the underlying index.html file on the server?', options: ['Yes', 'No, it only changes the live representation in the user\'s browser memory', 'Only if you save it', 'Yes, but only in Node.js'], answer: 1 }
  ]
};

LESSONS['4-1'] = {
  title: 'Selecting Elements (getElementById, querySelector)',
  emoji: '🎯',
  tags: ['Selectors', 'DOM', 'Elements'],
  intro: `You must **select** an element before you can do anything to it. Modern JavaScript provides powerful ways to grab elements using the same syntax you use in CSS!`,
  sections: [
    {
      title: '🔎 Selecting Nodes',
      body: `**<code>querySelector</code>** is the absolute best practice today. It takes ANY valid CSS selector and returns the very first match it finds. If you want ALL matches, use **<code>querySelectorAll</code>**, which returns a NodeList (like an array).`,
      code: { lang: 'javascript', src: `// Select by ID (Fastest)
const title = document.getElementById('main-title');

// CSS Selector: Class
const button = document.querySelector('.submit-btn');

// CSS Selector: Complex
const firstItem = document.querySelector('ul#list li:first-child');

// Select ALL items (returns a NodeList)
const allCards = document.querySelectorAll('.card');` }
    }
  ],
  realLife: `Selecting elements is like using a search engine for your HTML. "Hey Document, please Query your Selectors and find me the first thing that looks exactly like this CSS class!"`,
  youtube: [
    { title: 'Selecting Elements in the DOM', channel: 'Web Dev Simplified', url: 'https://youtu.be/v7lNN_x_MGU' }
  ],
  exam: [
    { q: 'Which method returns the FIRST element that matches a specified CSS selector?', options: ['getElementById', 'querySelectorAll', 'getElementsByClassName', 'querySelector'], answer: 3 },
    { q: 'If you use document.querySelectorAll(), what kind of object is returned?', options: ['An Array', 'A NodeList (array-like object)', 'A single HTML element', 'A string'], answer: 1 },
    { q: 'What is the correct way to select an element with an id of "header"?', options: ['document.querySelector("header")', 'document.querySelector("#header")', 'document.querySelector(".header")', 'document.querySelector("*header")'], answer: 1 },
    { q: 'True or False: getElementById requires the "#" symbol to be passed to it.', options: ['True', 'False (because it inherently only looks for IDs)', 'Only in older browsers', 'Only in React'], answer: 1 },
    { q: 'If querySelector(".box") is called but there are 5 elements with the class "box", which one is returned?', options: ['An array of all 5', 'The last one', 'The first one it encounters in the DOM tree', 'None, it throws an error'], answer: 2 }
  ]
};

LESSONS['4-2'] = {
  title: 'Changing Content & Styles',
  emoji: '🎨',
  tags: ['Manipulation', 'Classes', 'Style'],
  intro: `Once you've selected an element, you can change what it says, what image it displays, and how it looks!`,
  sections: [
    {
      title: '🖌️ Modifying Styles safely',
      body: `**Avoid inline styles** (<code>element.style.color = "red"</code>). The best practice is to define your styles in CSS, and use JavaScript to add/remove classes via <code>classList</code>.<br><br>Also, use <code>textContent</code> to change text safely, rather than <code>innerHTML</code> which risks XSS attacks.`,
      code: { lang: 'javascript', src: `const btn = document.querySelector('.btn');
const img = document.querySelector('img');

// Change Text safely
btn.textContent = "Clicked!";

// Read & Modify Attributes
img.setAttribute('src', 'new-photo.jpg');
console.log(img.alt); // Read attribute

// CSS Class Toggle (Best Practice!)
btn.classList.add('active');
btn.classList.remove('hidden');
btn.classList.toggle('highlight'); // Adds if missing, removes if present` }
    }
  ],
  realLife: `Don't hire a painter to paint your kitchen red (inline styles). Just buy a red wallpaper panel that easily pops on and off (toggling a CSS class). It's much easier to clean up later!`,
  youtube: [
    { title: 'Modify Element Classes in JS', channel: 'Kevin Powell', url: 'https://youtu.be/E-rEYT0rL2I' }
  ],
  exam: [
    { q: 'What is the safest property to use to change the text inside an element?', options: ['innerHTML', 'innerText', 'textContent', 'textValue'], answer: 2 },
    { q: 'Why is innerHTML potentially dangerous?', options: ['It crashes the server', 'It deletes the element', 'It can allow malicious Cross-Site Scripting (XSS) attacks if user input is injected directly', 'It removes CSS'], answer: 2 },
    { q: 'What is the best practice for applying multiple styles to an element via JS?', options: ['Writing elements.style inline for every property', 'Using element.classList.add() to apply a pre-written CSS class', 'Using jQuery', 'Deleting the element and making a new one'], answer: 1 },
    { q: 'What does the classList.toggle() method do?', options: ['Adds the class', 'Removes the class', 'Adds the class if it is missing, or removes it if it is already present', 'Throws an error'], answer: 2 },
    { q: 'Which method sets the "href" attribute of an <a> tag?', options: ['element.setAttribute("href", "http...")', 'element.hrefAttr("http...")', 'element.class("href")', 'element.setHref()'], answer: 0 }
  ]
};

LESSONS['4-3'] = {
  title: 'Creating & Removing Elements',
  emoji: '🔨',
  tags: ['CreateElement', 'AppendChild', 'DOM'],
  intro: `You can dynamically spawn brand new HTML elements out of thin air and inject them into the page, or destroy existing ones.`,
  sections: [
    {
      title: '➕ Creating and Appending',
      body: `Creation is a 3-step process:<br>1. Create the node (<code>document.createElement</code>)<br>2. Add content/classes to it<br>3. Append it to a parent container on the page.`,
      code: { lang: 'javascript', src: `const container = document.querySelector('.container');

// 1. Create it out of thin air
const newPara = document.createElement('p');

// 2. Decorate it
newPara.textContent = "Hello World!";
newPara.classList.add('text-lg');

// 3. Inject it into the live DOM
container.appendChild(newPara); // Adds to the very end
// container.prepend(newPara); // Adds to the very beginning

// Remove an element
newPara.remove();` }
    }
  ],
  realLife: `Creating an element is like buying a piece of furniture at IKEA. At first, it's just pieces sitting in your garage (in JavaScript memory). Nobody can see it. It only becomes useful once you assemble it and physically place it inside your living room (appendChild into the Document).`,
  youtube: [
    { title: 'Creating HTML Elements in JS', channel: 'Programming with Mosh', url: 'https://youtu.be/4eYyH0P0k-o' }
  ],
  exam: [
    { q: 'Which method creates a new, blank HTML element in memory?', options: ['document.makeElement()', 'document.createElement()', 'document.newElement()', 'document.spawn()'], answer: 1 },
    { q: 'If you create an element, when does it actually appear on the screen?', options: ['Immediately upon creation', 'When the page reloads', 'When you append/prepend it to an existing node inside the DOM', 'When you call display()'], answer: 2 },
    { q: 'What is the difference between appendChild() and prepend()?', options: ['They are the same', 'appendChild adds to the end of the parent, prepend adds to the beginning', 'append works for text, prepend works for images', 'prepend removes the element'], answer: 1 },
    { q: 'How do you modernly remove an element from the DOM?', options: ['element.delete()', 'element.remove()', 'document.removeNode(element)', 'element.hide()'], answer: 1 },
    { q: 'Can you append an element before setting its textContent?', options: ['No, text must be set first', 'Yes, you can append it empty and modify it later because you still hold the reference in memory', 'Yes, but it causes lag', 'No, that causes an error'], answer: 1 }
  ]
};

LESSONS['4-4'] = {
  title: 'Event Handling (click, input, submit)',
  emoji: '⚡',
  tags: ['Events', 'Interactivity', 'Listeners'],
  intro: `An Event is a signal that something happened—a click, a keypress, a scroll. We "listen" for these events and run a function when they occur.`,
  sections: [
    {
      title: '🎧 addEventListener',
      body: `**Avoid inline events** like <code>onclick=""</code> in your HTML. Always use <code>addEventListener</code>. An **Event Object (e)** is automatically passed into your function, providing massive amounts of data about what exactly happened.`,
      code: { lang: 'javascript', src: `const btn = document.querySelector('#actionBtn');

// Listen for a 'click' event
btn.addEventListener('click', (e) => {
  console.log("Button was clicked!");
  
  // The Event Object 'e' tells you who triggered the event
  console.log(e.target); // The exact HTML element clicked
  
  // Prevent default behavior (crucial for forms/links!)
  e.preventDefault(); 
});` }
    }
  ],
  realLife: `An Event Listener is literally a security guard staring at a specific door. You tell them: "Hey, listen for the 'door-open' event. When that happens, grab the person who opened it (the event object) and run the alarm function!"`,
  youtube: [
    { title: 'JavaScript Events Explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/XF1_MlZ5l6M' }
  ],
  exam: [
    { q: 'What is the modern, preferred way to handle events in JavaScript?', options: ['HTML attributes like onclick=""', 'element.onclick = function()', 'element.addEventListener()', 'document.onEvent()'], answer: 2 },
    { q: 'What is the "Event Object" (often named "e" or "event")?', options: ['An object representing the current state of the database', 'An object containing data about the triggered event (like mouse coordinates and the element clicked)', 'An animation object', 'A reserved keyword'], answer: 1 },
    { q: 'Which event type fires every time the user presses a keystroke inside a text field?', options: ['keyboard', 'input', 'submit', 'click'], answer: 1 },
    { q: 'What does e.target represent?', options: ['The body of the page', 'The form being submitted', 'The specific HTML element that triggered the event', 'The server endpoint'], answer: 2 },
    { q: 'Why is it bad practice to use onclick="doTask()" directly inside HTML files?', options: ['It breaks CSS', 'It pollutes the global scope and mixes logic with presentation', 'It is too fast', 'It doesn\'t work in Chrome'], answer: 1 }
  ]
};

LESSONS['4-5'] = {
  title: 'Event Bubbling & Delegation',
  emoji: '🫧',
  tags: ['Performance', 'Bubbling', 'Delegation'],
  intro: `When you click a deeply nested element, the event doesn't just stop there. It "bubbles up" through all its parent containers like a bubble rising in a glass of soda.`,
  sections: [
    {
      title: '🚀 Event Delegation',
      body: `**Delegation** is a performance powerhouse. Instead of adding a listener to 100 individual list items, you add ONE listener to the parent <code>&lt;ul&gt;</code>. As clicks bubble up, you check exactly who originated the click.`,
      code: { lang: 'javascript', src: `const list = document.getElementById('todo-list');

// Add ONE listener to the parent
list.addEventListener('click', (e) => {
  
  // Did the click originate from a delete button?
  if (e.target.classList.contains('delete')) {
    const item = e.target.parentElement;
    item.remove(); // Remove the specific <li>
  }
});
// Bonus: New <li> elements added LATER will automatically work!` }
    }
  ],
  realLife: `Event Delegation is like being a teacher in a classroom of 30 kids. You don't attach an individual microphone (listener) to every single child. You just use your own ears (one parent listener) for the whole room. When a sound is made (event bubbles up), you look to see exactly which child made it (e.target).`,
  youtube: [
    { title: 'Event Bubbling and Delegation', channel: 'Web Dev Simplified', url: 'https://youtu.be/F1anRyL37lE' }
  ],
  exam: [
    { q: 'What is Event Bubbling?', options: ['A visual animation effect', 'The process where an event triggered on a child element travels up through all parent elements', 'A memory leak', 'When a button makes a popping sound'], answer: 1 },
    { q: 'What is Event Delegation?', options: ['Delegating CSS to JavaScript', 'Attaching one event listener to a parent element to manage events for multiple child elements', 'Using a completely separate JS file for events', 'Hiding elements off-screen'], answer: 1 },
    { q: 'What is a major benefit of using Event Delegation?', options: ['It saves memory and automatically works for child elements generated dynamically later', 'It creates prettier buttons', 'It fixes CSS bugs', 'It prevents hacking'], answer: 0 },
    { q: 'How do you stop an event from bubbling up through its parents?', options: ['e.stop()', 'e.preventBubbles()', 'e.stopPropagation()', 'e.preventDefault()'], answer: 2 },
    { q: 'In event delegation, how do you verify WHICH child element was actually clicked?', options: ['By checking e.parent', 'By checking e.target', 'By using querySelector again', 'By checking e.source'], answer: 1 }
  ]
};

LESSONS['4-6'] = {
  title: 'Form Validation',
  emoji: '📋',
  tags: ['Forms', 'Validation', 'Submit'],
  intro: `Forms are the primary way users send data. Intercepting a form submission allows you to validate data (e.g. checking if a password is long enough) before it goes to the server.`,
  sections: [
    {
      title: '🛑 Preventing Default Submission',
      body: `By default, HTML forms trigger a full page reload when submitted. Use <code>e.preventDefault()</code> inside the submit handler to stop this, read the data via <code>FormData</code>, and validate it!`,
      code: { lang: 'javascript', src: `const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop the page from reloading!
  
  // Read all inputs at once using FormData magic
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  if (data.password.length < 8) {
     alert("Password too short!");
     return; // Stop execution
  }
  
  console.log("Success! Data:", data);
});` }
    }
  ],
  realLife: `A form submit event without preventDefault() is like trying to hand someone a letter, but the moment they take it, your house teleports 5 miles away (page reload). e.preventDefault() glues the house down so you can safely read the letter on the spot!`,
  youtube: [
    { title: 'JavaScript Form Validation', channel: 'Programming with Mosh', url: 'https://youtu.be/rsd4FNGTRBw' }
  ],
  exam: [
    { q: 'What does e.preventDefault() do when called inside a form "submit" listener?', options: ['It clears the form data', 'It prevents the browser from executing its default full-page reload submission behavior', 'It encrypts the data', 'It makes the button disabled'], answer: 1 },
    { q: 'What is the modern, powerful API used to easily grab all named input values from a form?', options: ['FormData API', 'document.getInputs()', 'InputReader', 'Object.keys()'], answer: 0 },
    { q: 'Why do we validate forms on the client-side (in the browser) using JS?', options: ['Because servers cannot validate data', 'To provide instantaneous feedback to the user without making them wait for a slow server response', 'To secure a database completely', 'It is required by law'], answer: 1 },
    { q: 'If validation fails, what keyword stops the rest of the function from executing?', options: ['stop', 'exit', 'return', 'break'], answer: 2 },
    { q: 'Which event type should you listen to on the <form> element?', options: ['click', 'input', 'submit', 'enter'], answer: 2 }
  ]
};

LESSONS['4-7'] = {
  title: 'LocalStorage Basics',
  emoji: '💾',
  tags: ['Storage', 'Data', 'Web API'],
  intro: `When a user refreshes a page, all JavaScript variables are wiped out. **LocalStorage** lets you save string data in the user's browser that persists forever (even if they close the tab).`,
  sections: [
    {
      title: '📦 Using the Storage API',
      body: `LocalStorage operates on a strict **Key-Value** system, and it ONLY stores Strings. If you want to store a complex Array or Object, you must convert it to a string using <code>JSON.stringify()</code> and parse it back using <code>JSON.parse()</code>.`,
      code: { lang: 'javascript', src: `// 1. SAVE to storage
localStorage.setItem('theme', 'dark');

// 2. READ from storage
const currentTheme = localStorage.getItem('theme');
console.log(currentTheme); // "dark"

// 3. Complex Objects
const user = { name: "John", age: 30 };
localStorage.setItem('userObj', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('userObj'));
console.log(storedUser.name); // "John"

// 4. DELETE
localStorage.removeItem('theme');
localStorage.clear(); // Wipes EVERYTHING` }
    }
  ],
  realLife: `LocalStorage is the glovebox of a car. When you turn off the engine (close the tab) and return tomorrow, anything you left inside the glovebox (like a pair of sunglasses or a saved theme preference) will still be there waiting for you.`,
  youtube: [
    { title: 'Local Storage Tutorial', channel: 'Web Dev Simplified', url: 'https://youtu.be/k8yJCeuP6I8' }
  ],
  exam: [
    { q: 'What data type is LocalStorage restricted to holding natively?', options: ['Numbers', 'Booleans', 'Strings', 'Objects'], answer: 2 },
    { q: 'If you close the browser and reopen it the next day, what happens to LocalStorage data?', options: ['It is deleted', 'It is sent to a server', 'It persists and remains available', 'It expires after 1 hour'], answer: 2 },
    { q: 'What method do you use to convert a JS Object into a string for storage?', options: ['object.toString()', 'JSON.parse()', 'String(object)', 'JSON.stringify()'], answer: 3 },
    { q: 'How do you retrieve a saved item named "token"?', options: ['localStorage.get()', 'localStorage.getItem("token")', 'localStorage("token")', 'localStorage.read("token")'], answer: 1 },
    { q: 'What method completely wipes out all data stored in LocalStorage for that domain?', options: ['localStorage.delete()', 'localStorage.wipe()', 'localStorage.clear()', 'localStorage.destroy()'], answer: 2 }
  ]
};

LESSONS['4-8'] = {
  title: 'Dynamic UI Components',
  emoji: '🧩',
  tags: ['Components', 'Generation', 'UI'],
  intro: `Building entire UI components (like Cards, Modals, or Lists) dynamically from data is a core skill for modern frameworks like React and Vue.`,
  sections: [
    {
      title: '🏭 Component Factories',
      body: `Create functions that act as "Factories." You pass data in, and the function assembles the HTML string or DOM nodes, and returns the finished component ready to be injected.`,
      code: { lang: 'javascript', src: `function createProductCard(product) {
  const card = document.createElement('div');
  card.className = "card p-4 bg-white shadow rounded";
  
  // Note: textContent is safer if 'product.name' 
  // comes from an untrusted user input!
  card.innerHTML = \`
    <h3 class="font-bold">\${product.name}</h3>
    <p class="text-green-600">$\${product.price}</p>
    <button class="bg-blue-500 text-white p-2">Buy</button>
  \`;
  
  return card;
}

// Usage
const catalog = document.getElementById('catalog');
const laptop = { name: "MacBook", price: 1200 };
catalog.appendChild(createProductCard(laptop));` }
    }
  ],
  realLife: `A component factory function is literally an assembly line. You feed raw materials (a JSON data object containing title and price) into the machine, and out pops a fully assembled, styled, and functional physical Card element that you can place into your website.`,
  youtube: [
    { title: 'Build Dynamic UI Components in JS', channel: 'Traversy Media', url: 'https://youtu.be/T33XXdOtsA0' }
  ],
  exam: [
    { q: 'What is a "Component" in the context of web UI?', options: ['A backend server file', 'A reusable piece of the user interface (like a card or navbar) generated from code', 'An image file', 'A CSS property'], answer: 1 },
    { q: 'Why do we generate HTML dynamically with JavaScript instead of hardcoding it in index.html?', options: ['Because HTML is deprecated', 'It allows the website to render dynamic data (like an array of hundreds of shop products from a database) without manual typing', 'It makes the CSS load faster', 'To hide the code'], answer: 1 },
    { q: 'If you fetch a list of 10 users from an API, what array method is commonly combined with a DOM creation function to render them all?', options: ['Array.sort()', 'Array.reduce()', 'Array.forEach() or Array.map()', 'Array.pop()'], answer: 2 },
    { q: 'What is a major security risk when using innerHTML with raw user input?', options: ['DDoS Attack', 'SQL Injection', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)'], answer: 2 },
    { q: 'In the provided code, what does the template literal (the backticks ``) allow?', options: ['Multiline strings and variable injection ${}', 'Automatic CSS styling', 'A connection to a database', 'Event delegation'], answer: 0 }
  ]
};

LESSONS['4-9'] = {
  title: 'Build a Todo App Project',
  emoji: '✅',
  tags: ['Project', 'CRUD', 'Integration'],
  intro: `The ultimate test of Phase 4! A Todo App combines DOM Selection, Element Creation, Event Handling, Event Delegation, Form Validation, and LocalStorage into one project.`,
  sections: [
    {
      title: '🛠️ The CRUD Concept',
      body: `Almost all web apps revolve around basic data operations known as **CRUD**: <br>1. **Create** (Add a new Todo).<br>2. **Read** (Render the ToDos to the screen).<br>3. **Update** (Mark a Todo as completed).<br>4. **Delete** (Remove the Todo).`,
      code: { lang: 'javascript', src: `// Mental Architecture of a Todo App:

let todos = []; // Master State

// 1. Submit form -> Push object to array -> Call Render
// 2. Render function -> clears container, loops through array, creates <li> nodes
// 3. Event Delegation on <ul> -> If clicked "Delete", grab ID, filter array, Call Render
// 4. Save/Load array using LocalStorage so it persists` }
    }
  ],
  realLife: `A Todo App is to a developer what playing "Stairway to Heaven" is to a guitarist. It's the foundational rite of passage that proves you understand how to orchestrate moving pieces of data, user interactions, and visual UI updates in harmony.`,
  youtube: [
    { title: 'Build a Todo List App in JS', channel: 'Web Dev Simplified', url: 'https://youtu.be/W7FaYfuwu70' }
  ],
  exam: [
    { q: 'What does the acronym CRUD stand for?', options: ['Code, Read, Undo, Deploy', 'Create, Read, Update, Delete', 'Compile, Render, Upload, Download', 'Copy, Run, Use, Drop'], answer: 1 },
    { q: 'When building an App, why do you typically maintain a Javascript Array containing the data, rather than just reading from the HTML DOM?', options: ['Because arrays are faster', 'The DOM should be a reflection of the "State" (Data), maintaining an array as a source of truth makes managing data/storage much easier', 'HTML cannot be read', 'DOM doesn\'t support strings'], answer: 1 },
    { q: 'When rendering a full list of items from an array to the DOM, what should you often do to the container first?', options: ['Make it invisible', 'Clear its existing contents (e.g. innerHTML = "") to prevent duplicates from stacking', 'Change its color', 'Add an id'], answer: 1 },
    { q: 'If clicking a specific Todo <li> toggles a "completed" CSS class, which element of CRUD does this represent?', options: ['Create', 'Read', 'Update', 'Delete'], answer: 2 },
    { q: 'Why is Event Delegation perfect for a Todo App\'s delete buttons?', options: ['It uses less CSS', 'It makes the buttons red automatically', 'Because Todos are generated dynamically, a parent listener catches their clicks without needing to attach new listeners every time a Todo is added', 'It saves battery'], answer: 2 }
  ]
};

// ════════════ PHASE 5: Modern JavaScript (ES6+) ════════════

LESSONS['5-0'] = {
  title: 'Arrow Functions',
  emoji: '🏹',
  tags: ['ES6', 'Functions', 'Syntax'],
  intro: `Introduced in ES6, **Arrow Functions** provide a more concise syntax for writing function expressions. They are heavily used in modern frameworks like React and Vue.`,
  sections: [
    {
      title: '🎯 The Arrow Syntax',
      body: `Arrow functions omit the <code>function</code> keyword. If the function only has one line of code, you can omit the curly braces AND the <code>return</code> keyword (known as an implicit return).`,
      code: { lang: 'javascript', src: `// ❌ Old Way
const add = function(a, b) {
  return a + b;
};

// ✅ Modern Way
const addArrow = (a, b) => {
  return a + b;
};

// 🔥 Implicit Return (One-liner!)
const multiply = (a, b) => a * b;` }
    }
  ],
  realLife: `An arrow function is like shorthand notation. Instead of writing out the full word "function", you just point an arrow '=>' indicating "these inputs GO INTO this output".`,
  youtube: [
    { title: 'Arrow Functions in JavaScript', channel: 'Web Dev Simplified', url: 'https://youtu.be/h33Srr5J9nY' }
  ],
  exam: [
    { q: 'What symbol defines an arrow function?', options: ['->', '=>', '<=', '=='], answer: 1 },
    { q: 'What is an "implicit return" in an arrow function?', options: ['When you forget the return keyword and it returns undefined', 'When the function automatically returns the evaluation of a single-line expression without needing the "return" keyword', 'When it returns a promise automatically', 'When it returns an array'], answer: 1 },
    { q: 'If an arrow function takes exactly ONE parameter, what can you optionally omit?', options: ['The arrow symbol', 'The fat arrow', 'The parentheses () around the parameter', 'The parameter name'], answer: 2 },
    { q: 'Can you use the "this" keyword normally inside an arrow function?', options: ['Yes', 'No, arrow functions do not bind their own "this", they inherit it from the parent scope', 'Only if you use "let"', 'Only inside classes'], answer: 1 },
    { q: 'Which is valid implicit return syntax?', options: ['() => { 5; }', 'x => x * 2', '() => return 5', 'x => { return x; }'], answer: 1 }
  ]
};

LESSONS['5-1'] = {
  title: 'Destructuring (Array & Object)',
  emoji: '📦',
  tags: ['ES6', 'Destructuring', 'Objects'],
  intro: `Destructuring is a syntax that allows you to unpack values from arrays, or properties from objects, into distinct standalone variables instantly.`,
  sections: [
    {
      title: '🧩 Object Destructuring',
      body: `Instead of repeatedly targeting <code>user.name</code> and <code>user.age</code>, you can extract them in one line. You can even rename them or set defaults!`,
      code: { lang: 'javascript', src: `const user = { name: "Alice", age: 25, city: "NY" };

// ❌ Old Way
const n = user.name;

// ✅ Modern Way
const { name, age } = user; // 'name' = "Alice"

// Renaming and Default values
const { name: userName, country = "USA" } = user;` }
    },
    {
      title: '📊 Array Destructuring',
      body: `Arrays use square brackets to unpack by **position** instead of by key.`,
      code: { lang: 'javascript', src: `const colors = ["Red", "Green", "Blue"];

// Extract first and second items
const [first, second] = colors; // "Red", "Green"

// Skip an item with a comma
const [, , third] = colors; // "Blue"` }
    }
  ],
  realLife: `Destructuring is like unboxing a delivery. You don't keep carrying the cardboard box (the Object) around your house; you take out the specific items you ordered (the variables) and throw the box away.`,
  youtube: [
    { title: 'Destructuring in JS', channel: 'Programming with Mosh', url: 'https://youtu.be/NIq3qLaHCIs' }
  ],
  exam: [
    { q: 'What brackets are used for Object Destructuring?', options: ['[]', '{}', '()', '<>'], answer: 1 },
    { q: 'In Array Destructuring, how are elements matched to variables?', options: ['By index position', 'By alphabetical order', 'By object key', 'Randomly'], answer: 0 },
    { q: 'What does the syntax { name: userName } do in object destructuring?', options: ['It checks if name equals userName', 'It changes the object key to userName', 'It extracts the "name" property but assigns it to a completely new variable called "userName"', 'It throws an error'], answer: 2 },
    { q: 'How do you set a "fallback" default value if the property doesn\'t exist in the object?', options: ['{ name || "Alice" }', '{ name = "Alice" }', '{ name ?? "Alice" }', 'You cannot'], answer: 1 },
    { q: 'How do you skip the second item in an array when destructuring?', options: ['[first, skip, third]', '[first, null, third]', '[first, , third]', '[first, undefined, third]'], answer: 2 }
  ]
};

LESSONS['5-2'] = {
  title: 'Spread & Rest Operators',
  emoji: '✨',
  tags: ['Spread', 'Rest', 'ES6'],
  intro: `The <code>...</code> syntax does two entirely different things depending on context. It either **expands** an array (Spread) or **collects** items into an array (Rest).`,
  sections: [
    {
      title: '🧈 Spread: Expanding',
      body: `Use Spread to quickly combine arrays, or make **shallow copies** of objects without mutating the original.`,
      code: { lang: 'javascript', src: `const arr1 = [1, 2];
const arr2 = [3, 4];

// Combine Arrays
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copy & Add Object properties
const original = { a: 1 };
const copy = { ...original, b: 2 }; // { a: 1, b: 2 }` }
    },
    {
      title: '🧲 Rest: Collecting',
      body: `Used in function parameters when you don't know how many arguments the user will pass. It gathers them all into a standard array.`,
      code: { lang: 'javascript', src: `// Unknown number of arguments!
function sum(...numbers) {
  // 'numbers' is now an Array [1, 2, 3, 4]
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4); // 10` }
    }
  ],
  realLife: `Spread is like taking a deck of cards and fanning them out onto a table so you can see all the individual cards. Rest is the exact opposite—scooping up a bunch of loose cards from the table and putting them neatly back into a single deck.`,
  youtube: [
    { title: 'Spread and Rest Operators', channel: 'Web Dev Simplified', url: 'https://youtu.be/iLx4ma8ZqvQ' }
  ],
  exam: [
    { q: 'What is the syntax for the Spread/Rest operator?', options: ['***', '...', '&&', '??'], answer: 1 },
    { q: 'If arr = [1,2], what does [...arr, 3] result in?', options: ['[[1,2], 3]', '[1, 2, 3]', 'Error', 'undefined'], answer: 1 },
    { q: 'What is the primary difference between Spread and Rest?', options: ['Spread is for arrays, Rest is for objects', 'Spread expands elements out, Rest collects arguments in', 'Spread is deprecated', 'They are the exact same thing'], answer: 1 },
    { q: 'When copying an object via { ...myObject }, what type of copy is created?', options: ['Deep copy', 'Shallow copy', 'Reference link', 'Stringified copy'], answer: 1 },
    { q: 'Where does the Rest parameter have to be placed in a function definition?', options: ['At the beginning', 'In the middle', 'At the very end of the parameter list', 'Anywhere'], answer: 2 }
  ]
};

LESSONS['5-3'] = {
  title: 'Template Literals',
  emoji: '📝',
  tags: ['Text', 'Strings', 'ES6'],
  intro: `Template literals completely replace the headache of string concatenation (stitching strings together using the <code>+</code> operator).`,
  sections: [
    {
      title: '🪨 The Old Way vs Template Literals',
      body: `By wrapping strings in **backticks (\`\`)**, you can inject variables directly using <code>\${}</code> syntax, and even press ENTER to create multi-line strings effortlessly!`,
      code: { lang: 'javascript', src: `const name = "Alice";
const age = 30;

// ❌ Old Way (Ugly concats)
const msg = "My name is " + name + "\\nAnd my age is " + age;

// ✅ Modern Way (Clean interpolation)
const modernMsg = \`My name is \${name}
And my age is \${age}\`;` }
    }
  ],
  realLife: `Template literals are like Mad Libs or Fill-in-the-blank forms. Instead of cutting out individual words with scissors and manually taping them together (+), you just print a standard form with blank lines (\${}) and quickly write the variables in.`,
  youtube: [
    { title: 'Template Literals in ES6', channel: 'Programming with Mosh', url: 'https://youtu.be/NgFGpAEY00E' }
  ],
  exam: [
    { q: 'What character is used to start and end a Template Literal?', options: ['Single Quote', 'Double Quote', 'Backtick', 'Tilde'], answer: 2 },
    { q: 'What syntax allows you to inject variables directly into a Template Literal?', options: ['{var}', '#var', '${var}', '+var+'], answer: 2 },
    { q: 'Can you write HTML code across multiple lines smoothly using Template Literals?', options: ['Yes', 'No, you must use \\n', 'Only if you use innerHTML', 'No, JS doesn\'t support multiline strings'], answer: 0 },
    { q: 'Can you perform math operations inside the interpolation block?', options: ['Yes, e.g., ${5 + 5}', 'No, only variables are allowed', 'Yes, but only subtraction', 'No, it causes a syntax error'], answer: 0 },
    { q: 'What was the older, outdated method of joining strings and variables together called?', options: ['String Mutation', 'String Concatenation (using +)', 'String Interpolation', 'String Parsing'], answer: 1 }
  ]
};

LESSONS['5-4'] = {
  title: 'Array Methods: map, filter, reduce',
  emoji: '🛠️',
  tags: ['Arrays', 'Functional', 'Iterators'],
  intro: `Loops (<code>for</code>) are verbose. Modern JS uses **higher-order array functions**. They are cleaner, chainable, and return *new* arrays without mutating the original data.`,
  sections: [
    {
      title: '🗺️ Map & Filter',
      body: `<code>map()</code> runs a function on *every* item and returns a new list of modified items.<br><code>filter()</code> runs a condition on every item and returns a list of only things that passed (true).`,
      code: { lang: 'javascript', src: `const numbers = [1, 2, 3, 4, 5];

// Map: Transform every item (multiply by 2)
const doubled = numbers.map(num => num * 2); 
// [2, 4, 6, 8, 10]

// Filter: Select specific items (only evens)
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]` }
    },
    {
      title: '🗜️ Reduce',
      body: `<code>reduce()</code> squashes an entire array down into a *single value* (like a total sum). It uses an **Accumulator (acc)** that acts as a running total.`,
      code: { lang: 'javascript', src: `const cart = [{ price: 10 }, { price: 20 }];

// Reduce: (Accumulator, CurrentItem) => logic, initialValue
const total = cart.reduce((acc, item) => {
  return acc + item.price;
}, 0); // 30` }
    }
  ],
  realLife: `Imagine an array of Apples. \nMap: Puts every apple through a slicer, returning an array of Apple Slices.\nFilter: Throws away rotten apples, returning an array of Good Apples.\nReduce: Puts all the apples into a blender, returning a single cup of Apple Juice.`,
  youtube: [
    { title: 'Map, Filter, Reduce Explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/rRgD1yVwIvE' }
  ],
  exam: [
    { q: 'Does map() mutate (change) the original array?', options: ['Yes, permanently', 'No, it returns a brand new array leaving the original untouched', 'Only if you use const', 'Sometimes'], answer: 1 },
    { q: 'Which method should you use if you have an array of 100 users, and you only want an array of users who are older than 18?', options: ['array.map()', 'array.reduce()', 'array.filter()', 'array.sort()'], answer: 2 },
    { q: 'In the reduce callback (acc, curr), what does "acc" stand for?', options: ['Account', 'Accurate', 'Accumulator (the running total)', 'Access'], answer: 2 },
    { q: 'What does map() return?', options: ['A single number', 'A boolean (true/false)', 'A new array of the exact same length as the original', 'An object'], answer: 2 },
    { q: 'What is the second argument passed to the reduce() method usually used for?', options: ['Handling errors', 'Setting the initial starting value for the accumulator', 'Looping speed', 'Logging data'], answer: 1 }
  ]
};

LESSONS['5-5'] = {
  title: 'Optional Chaining (?.)',
  emoji: '⛓️',
  tags: ['Safety', 'Objects', 'ES2020'],
  intro: `Have you ever seen the error <code>Cannot read property 'x' of undefined</code>? Optional Chaining solves this infamous crash instantly!`,
  sections: [
    {
      title: '🛡️ Safe Navigation',
      body: `By placing a <code>?</code> before the dot, you tell JS: "If the thing before me doesn't exist, stop immediately and return undefined. Don't crash!"`,
      code: { lang: 'javascript', src: `const user = { profile: { address: { city: "NY" } } };

// What if 'profile' didn't exist?
// ❌ Old Way: Uncaught TypeError! Crash!
const city = user.settings.address.city; 

// ✅ Modern Way: Fails silently and safely returns undefined
const safeCity = user?.settings?.address?.city; ` }
    }
  ],
  realLife: `Optional chaining is like checking if doors are unlocked before violently slamming into them. "Is the house unlocked? Yes. Is the bedroom unlocked? No." Instead of breaking your nose (throwing a crash error), you just shrug and walk away safely (returning undefined).`,
  youtube: [
    { title: 'Optional Chaining in JS', channel: 'Fireship', url: 'https://youtu.be/v2tJ3nzXh8I' }
  ],
  exam: [
    { q: 'What symbols make up the Optional Chaining operator?', options: ['??', '!.', '?.', '||'], answer: 2 },
    { q: 'What happens if you use optional chaining on an object property that does NOT exist?', options: ['The app crashes', 'It returns "null"', 'It breaks the loop', 'It safely evaluates to "undefined" without throwing an error'], answer: 3 },
    { q: 'What infamous JavaScript error does Optional Chaining prevent?', options: ['SyntaxError', 'Cannot read properties of undefined', 'Stack Overflow', 'CORS Error'], answer: 1 },
    { q: 'Can optional chaining be used on arrays (e.g., users?.[0]?.name)?', options: ['Yes', 'No', 'Only in React', 'Only on strings'], answer: 0 },
    { q: 'If user = null, what does user?.age return?', options: ['0', 'error', 'undefined', 'false'], answer: 2 }
  ]
};

LESSONS['5-6'] = {
  title: 'Nullish Coalescing (??)',
  emoji: '🛟',
  tags: ['Defaults', 'Fallback', 'ES2020'],
  intro: `Sometimes you want to set a "fallback" default value if data is missing. People used to use the OR (<code>||</code>) operator, but that causes bugs with the number 0.`,
  sections: [
    {
      title: '👯 Difference between || and ??',
      body: `The <code>||</code> operator triggers its fallback on **ANY falsy value** (including <code>0</code> or <code>""</code>).<br>The <code>??</code> operator triggers ONLY on strictly **null** or **undefined**.`,
      code: { lang: 'javascript', src: `const taxRate = 0; // A valid number that happens to be falsy!

// ❌ OR operator (Thinks 0 means "missing", defaults to 10!)
const result = taxRate || 10; // 10 (Wrong!)

// ✅ Nullish Coalescing (Respects the 0, only falls back on null/undefined)
const fixed = taxRate ?? 10; // 0 (Correct!)` }
    }
  ],
  realLife: `Using the OR (||) operator is like an annoying waiter. You say "I want 0 sugar in my coffee," and the waiter says "0 is basically nothing, so I'm giving you the default 10 sugars!" Nullish Coalescing (??) respects you: "0 is a valid number, you get 0 sugar."`,
  youtube: [
    { title: 'Nullish Coalescing Operator', channel: 'Web Dev Simplified', url: 'https://youtu.be/v2tJ3nzXh8I' }
  ],
  exam: [
    { q: 'What symbols make up the Nullish Coalescing operator?', options: ['??', '||', '&&', '?!'], answer: 0 },
    { q: 'Under what specific conditions will the ?? operator use the fallback right-side value?', options: ['If the left side is falsy', 'If the left side is exactly null or undefined', 'If the left side is 0', 'If the left side is false'], answer: 1 },
    { q: 'Why is the logical OR (||) dangerous for setting default numbers?', options: ['Because it cannot handle numbers', 'Because the valid number 0 is "falsy", triggering an unwanted fallback overwrite', 'Because it crashes', 'Because it converts strings to numbers'], answer: 1 },
    { q: 'What does `"" ?? "Default"` evaluate to?', options: ['"Default"', '"" (The empty string)', 'null', 'undefined'], answer: 1 },
    { q: 'What does `undefined ?? "Default"` evaluate to?', options: ['"Default"', 'undefined', 'null', 'Crash'], answer: 0 }
  ]
};

LESSONS['5-7'] = {
  title: 'Promises',
  emoji: '🤝',
  tags: ['Async', 'Promises', 'Then/Catch'],
  intro: `Fetching data from the internet takes time. A **Promise** is a JavaScript object representing a value that may be available *now*, *later* (when data loads), or *never* (if it fails).`,
  sections: [
    {
      title: '⏳ Handling Future Values',
      body: `A Promise has 3 states: **Pending**, **Fulfilled** (Success), or **Rejected** (Error). You use <code>.then()</code> to handle the success, and <code>.catch()</code> to handle the error.`,
      code: { lang: 'javascript', src: `const myPromise = new Promise((resolve, reject) => {
  // Simulating an async API call
  setTimeout(() => {
    resolve("Data Loaded!"); 
    // If it failed: reject("Error!");
  }, 1000);
});

// Consuming it
myPromise
  .then(data => console.log(data)) // Runs on success
  .catch(error => console.error(error)); // Runs on error` }
    }
  ],
  realLife: `A Promise is taking a buzzer at a busy restaurant. The buzzer represents your future food (data). While waiting (Pending), you can sit down and talk (non-blocking). When it buzzes, you get the food (Fulfilled). If the kitchen burns down, the waiter tells you (Rejected).`,
  youtube: [
    { title: 'JavaScript Promises In 10 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/DHjqpvDnNGE' }
  ],
  exam: [
    { q: 'What are the three potential states of a Promise?', options: ['Open, Closed, Running', 'Pending, Fulfilled, Rejected', 'Loading, Loaded, Failed', 'Sync, Async, Await'], answer: 1 },
    { q: 'Which method runs when a Promise successfully resolves?', options: ['.catch()', '.finally()', '.then()', '.success()'], answer: 2 },
    { q: 'Which method runs when a Promise encounters an error and is rejected?', options: ['.error()', '.reject()', '.catch()', '.fail()'], answer: 2 },
    { q: 'Why are Promises useful?', options: ['They make the website look prettier', 'They allow JS to handle operations that take an unknown amount of time (like network requests) without freezing the entire browser', 'They compress image sizes', 'They replace CSS'], answer: 1 },
    { q: 'If JS were entirely synchronous (no promises/async), what would happen during a 5-second API fetch?', options: ['It would load instantly', 'The entire browser tab would completely freeze and lock up for 5 seconds waiting', 'It would throw a timeout error', 'Nothing'], answer: 1 }
  ]
};

LESSONS['5-8'] = {
  title: 'Async / Await',
  emoji: '⏱️',
  tags: ['Async', 'Await', 'Syntactic Sugar'],
  intro: `While <code>.then()</code> Promise chains are good, they can get messy. **Async/Await** is syntactic sugar introduced in ES8 that makes asynchronous code *look* like normal synchronous code!`,
  sections: [
    {
      title: '🎩 Syntactic Magic',
      body: `Put <code>async</code> in front of the function. Now you can use the <code>await</code> keyword to literally pause JS execution at that specific line until the Promise finishes resolving.`,
      code: { lang: 'javascript', src: `// ❌ Old Way (Then chains)
function getData() {
  fetch('api.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
}

// ✅ Modern Way (Clean, readable line-by-line)
async function getModernData() {
  console.log("Fetching...");
  
  // Code pauses exactly here until data arrives!
  const res = await fetch('api.com/users'); 
  const data = await res.json();
  
  console.log(data);
}` }
    }
  ],
  realLife: `Promise chains (.then) are like setting an alarm and trying to coordinate when to check the oven. Async/Await is like having a private chef: you just type "await" and say "I am not moving a finger until you put the food directly into my hands," freeing your brain from thinking about the background cooking process.`,
  youtube: [
    { title: 'Async Await JavaScript Tutorial', channel: 'Web Dev Simplified', url: 'https://youtu.be/V_Kr9OSfDeU' }
  ],
  exam: [
    { q: 'What does adding the "async" keyword to a function do?', options: ['It makes it run twice as fast', 'It forces it to return an array', 'It allows the use of the "await" keyword inside it, and ensures the function always returns a Promise', 'It hides the function from the global scope'], answer: 2 },
    { q: 'What does the "await" keyword literally do to the JavaScript execution?', options: ['It destroys the Promise', 'It pauses execution on that exact line until the Promise resolves or rejects, making async code read synchronously', 'It skips the line', 'It creates a loop'], answer: 1 },
    { q: 'Can you use "await" in a normal, non-async function (in native older JS)?', options: ['Yes', 'No, it throws a Syntax Error', 'Only in loops', 'Only for variables'], answer: 1 },
    { q: 'What is the main benefit of Async/Await over .then() chains?', options: ['It uses less RAM', 'It avoids "Callback Hell" and reads much cleaner line-by-line', 'It works offline', 'It makes HTTP requests faster natively'], answer: 1 },
    { q: 'True or False: Async/Await is fundamentally just syntactic sugar wrapped around standard Promises.', options: ['True', 'False', 'Only in Node.js', 'Only in React'], answer: 0 }
  ]
};

LESSONS['5-9'] = {
  title: 'The Event Loop',
  emoji: '🕰️',
  tags: ['Architecture', 'Concurrency', 'Advanced'],
  intro: `JavaScript is single-threaded (it only has one Call Stack, doing one thing at a time). So how does it do Async tasks in the background? The **Event Loop**.`,
  sections: [
    {
      title: '🎡 The Event Loop Mechanism',
      body: `1. **Call Stack**: Executes your fast, synchronous code.<br>2. **Web APIs**: The browser handles slow tasks (timers, fetch) outside of JS entirely!<br>3. **Task Queue**: Completed Web API tasks wait in line here.<br>4. **Event Loop**: If the Call Stack is completely empty, it pushes the first item from the Queue into the Stack.`,
      code: { lang: 'javascript', src: `console.log("1. Start");

// Sent straight to Web API, then to Task Queue
setTimeout(() => {
  console.log("3. Timeout finished");
}, 0); 

console.log("2. End");

// Output Order:
// "1. Start"
// "2. End"
// "3. Timeout finished" (Waited for the stack to clear!)` }
    }
  ],
  realLife: `The Call Stack is a busy Chef in a kitchen. The Web API is the oven. The Chef puts a pizza in the oven (fetch) and keeps chopping veggies (sync code). When the oven dings, it doesn't interrupt the Chef mid-slice; it goes on the Task Queue plate. The Event Loop waits until the Chef finishes chopping to hand them the pizza.`,
  youtube: [
    { title: 'What the heck is the event loop anyway?', channel: 'JSConf', url: 'https://youtu.be/8aGhPhVfaqM' }
  ],
  exam: [
    { q: 'How many threads (Call Stacks) does JavaScript execute on?', options: ['One (Single-threaded)', 'Two', 'Unlimited', 'Four'], answer: 0 },
    { q: 'Who actually processes the setTimeout() and fetch() requests in the background?', options: ['The JS Engine itself', 'The Operating System', 'The Web APIs provided by the Browser (like C++)', 'The CSS renderer'], answer: 2 },
    { q: 'What is the "Task Queue" (Callback Queue)?', options: ['A list of CSS variables', 'A holding area where finished background tasks wait in line to be executed by the Call Stack', 'A stack of HTML errors', 'A database format'], answer: 1 },
    { q: 'When does the Event Loop move a callback from the Task Queue onto the Call Stack?', options: ['Immediately, interrupting the stack', 'ONLY when the Call Stack is completely empty', 'Every 5 seconds', 'When the user clicks the mouse'], answer: 1 },
    { q: 'If a setTimeout has a delay of 0 milliseconds, does it run instantly?', options: ['Yes', 'No, it still gets sent to the Web API and Task Queue, meaning it runs AFTER all synchronous code finishes', 'It crashes', 'It never runs'], answer: 1 }
  ]
};

LESSONS['5-10'] = {
  title: 'JSON Handling',
  emoji: '🗄️',
  tags: ['JSON', 'Data Interchange', 'Parsing'],
  intro: `**JSON (JavaScript Object Notation)** is arguably the most important data format on the internet. It is the universal language that frontends and backends use to talk to each other.`,
  sections: [
    {
      title: '🔄 Stringify & Parse',
      body: `JSON looks identically like a JavaScript object, but it is **strictly text (strings)**. You cannot send raw JS objects across a network, they must be stringified!`,
      code: { lang: 'javascript', src: `// 1. Data going OUT (Object -> String)
const user = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(user); 
// '{"name":"Alice","age":25}'

// 2. Data coming IN (String -> Object)
const dataStr = '{"name":"Bob","age":30}';
const userObject = JSON.parse(dataStr); 
// { name: 'Bob', age: 30 }` }
    }
  ],
  realLife: `JSON stringifying is like taking a 3D physical chair (an Object), running it through a woodchipper, and putting the pieces into an envelope (a String) to mail it. JSON parsing is taking that envelope, opening it, and instantly magically reassembling the 3D chair to use in your app.`,
  youtube: [
    { title: 'JSON Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/wI1CWzNtE-M' }
  ],
  exam: [
    { q: 'What does JSON stand for?', options: ['Java Standard Object Notation', 'JavaScript Object Notation', 'Joint Server Operation Network', 'Just Strings Or null'], answer: 1 },
    { q: 'What are the strict syntax rules of JSON compared to normal JS Objects?', options: ['Keys must be wrapped in double quotes, no functions allowed, no trailing commas', 'Single quotes must be used', 'It must start with an Array', 'Comments are required'], answer: 0 },
    { q: 'If you want to send data TO a server via fetch, what method do you use to format your JS Object?', options: ['JSON.parse()', 'JSON.format()', 'JSON.toString()', 'JSON.stringify()'], answer: 3 },
    { q: 'If you receive a JSON string FROM a server, what method turns it back into a usable JS Object?', options: ['JSON.stringify()', 'JSON.parse()', 'JSON.object()', 'Object.assign()'], answer: 1 },
    { q: 'What causes the error: "Unexpected token u in JSON at position 0"?', options: ['A virus', 'Missing semicolon', 'Attempting to JSON.parse(undefined)', 'Using double quotes'], answer: 2 }
  ]
};

LESSONS['5-11'] = {
  title: 'Fetch API',
  emoji: '📡',
  tags: ['Fetch', 'API', 'Network'],
  intro: `The **Fetch API** is built into all modern browsers. It allows you to make HTTP requests across the network to grab data from servers or APIs securely and easily.`,
  sections: [
    {
      title: '🐕 Go Fetch!',
      body: `Calling <code>fetch()</code> automatically initiates a GET request and returns a Promise. You must manually check if <code>response.ok</code> is true, and then await <code>response.json()</code> to parse the body.`,
      code: { lang: 'javascript', src: `async function loadUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Check for HTTP errors (like 404 Not Found)
    if (!res.ok) {
      throw new Error("HTTP Error " + res.status);
    }
    
    // Parse the JSON body into a real list of USer objects
    const users = await res.json();
    console.log(users);
    
  } catch(error) {
    console.error("Network failed", error);
  }
}` }
    }
  ],
  realLife: `Fetch is literally telling your dog to go grab a newspaper from exactly 5 miles down the road. You 'await' the dog to return. Once the dog returns, you take the newspaper (the response), translate it from French to English using response.json(), and then finally read it.`,
  youtube: [
    { title: 'Learn Fetch API In 6 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/cuEtnrL9-H0' }
  ],
  exam: [
    { q: 'What does the fetch() method return?', options: ['A JSON object', 'A string', 'An Array', 'A Promise that resolves to a Response object'], answer: 3 },
    { q: 'What property should you check to ensure the HTTP request was successful (e.g., status 200)?', options: ['response.success', 'response.ok', 'response.good', 'response.done'], answer: 1 },
    { q: 'How do you extract the JSON body data from the fetch response?', options: ['await response.json()', 'response.body()', 'JSON.parse(response)', 'response.extract()'], answer: 0 },
    { q: 'By default, what HTTP method does fetch() use if you don\'t specify one?', options: ['POST', 'PUT', 'DELETE', 'GET'], answer: 3 },
    { q: 'Why is error handling (try/catch) so critical when using fetch?', options: ['To hide errors from users', 'Because network requests frequently fail due to bad URLs, server outages, or lost WiFi connections', 'Because fetch always throws warnings', 'To make it run faster'], answer: 1 }
  ]
};

LESSONS['5-12'] = {
  title: 'REST API Integration',
  emoji: '🌐',
  tags: ['REST', 'HTTP', 'POST'],
  intro: `When building full-stack apps, you will constantly interact with REST APIs using different **HTTP Methods** depending on the action you want to take.`,
  sections: [
    {
      title: '📮 Submitting Data (POST)',
      body: `To create new data (like registering a user), use the **POST** method. You must pass a configuration object to <code>fetch</code> specifying the Method, Headers, and stringified Body.`,
      code: { lang: 'javascript', src: `async function createUser(userData) {
  const response = await fetch('https://api.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Telling the server it's JSON
    },
    body: JSON.stringify(userData) // The actual data
  });
  
  return await response.json();
}

// HTTP Methods Overview:
// GET: Retrieve data
// POST: Create new data
// PUT/PATCH: Update existing data
// DELETE: Destroy data` }
    }
  ],
  realLife: `HTTP methods are verbs in a sentence. \nGET = "Server, READ me this file."\nPOST = "Server, CREATE a brand new file with this data."\nPUT = "Server, REPLACE that old file with this new one."\nDELETE = "Server, BURN that file immediately."`,
  youtube: [
    { title: 'What is a REST API?', channel: 'Fireship', url: 'https://youtu.be/-mN3VyJuCjM' }
  ],
  exam: [
    { q: 'Which HTTP method is universally used to create NEW records in a database via a REST API?', options: ['GET', 'UPDATE', 'POST', 'PATCH'], answer: 2 },
    { q: 'When making a POST request with JSON, what necessary configuration must be set in the headers?', options: ['Accept-Language: EN', 'Content-Type: application/json', 'Authorization: true', 'Origin: localhost'], answer: 1 },
    { q: 'Which HTTP method should be used to completely destroy or remove data?', options: ['REMOVE', 'DESTROY', 'DELETE', 'KILL'], answer: 2 },
    { q: 'Can you send a payload "body" within a standard GET request?', options: ['Yes, always', 'No, GET requests should generally not include a body according to HTTP specs (data goes in the URL query string)', 'Yes, but only strings', 'Yes, but it\'s slow'], answer: 1 },
    { q: 'Before attaching a JavaScript object to the "body" of a fetch request, what must you do to it?', options: ['Encrypt it', 'Convert it via JSON.stringify()', 'Pass it directly', 'Make it an Array'], answer: 1 }
  ]
};

LESSONS['5-13'] = {
  title: 'Error Handling with try/catch',
  emoji: '🚒',
  tags: ['Errors', 'Safety', 'UX'],
  intro: `In async programming, things WILL fail. APIs go down, WiFi disconnects, and endpoints change. You must catch these errors gracefully so your entire app doesn't crash.`,
  sections: [
    {
      title: '🚨 The try/catch/finally block',
      body: `Put potentially explosive code inside <code>try {}</code>. If anything inside it explodes, execution instantly jumps to the <code>catch (error) {}</code> block. The <code>finally {}</code> block runs at the very end no matter what happens (perfect for hiding loading spinners).`,
      code: { lang: 'javascript', src: `const ui = document.getElementById('state');

async function loadData() {
  ui.textContent = "Loading..."; // 1. Set Loading UI
  
  try {
    const res = await fetch('api.com/data');
    if (!res.ok) throw new Error("Server rejected us!");
    
    const data = await res.json();
    ui.textContent = "Data: " + data.message; // 2. Success UI
    
  } catch (err) {
    ui.textContent = "Error: " + err.message; // 3. Error UI
  } finally {
    // 4. Always runs!
    console.log("Cleanup complete. Hide spinner.");
  }
}` }
    }
  ],
  realLife: `Try/Catch is having a safety net. "TRY to perform this dangerous aerial trapeze stunt. If you slip and fail, CATCH them in the net instead of hitting the floor. FINALLY, whether they succeeded or hit the net, bow and end the show."`,
  youtube: [
    { title: 'JavaScript Try Catch Error Handling', channel: 'Web Dev Simplified', url: 'https://youtu.be/cFTFtuEQ-10' }
  ],
  exam: [
    { q: 'What happens immediately if an error is thrown inside a "try" block?', options: ['The code keeps running', 'The browser crashes', 'Execution instantly stops and jumps down into the "catch" block', 'It logs to the server'], answer: 2 },
    { q: 'What is the "finally" block used for?', options: ['It only runs if the try block succeeded', 'It only runs if the catch block ran', 'It is code that executes absolutely no matter what (e.g., stopping a loading animation clock)', 'To finally log the user out'], answer: 2 },
    { q: 'What keyword allows you to manually create and trigger an error intentionally?', options: ['error', 'stop', 'reject', 'throw'], answer: 3 },
    { q: 'In the catch(error) block, what does the "error" variable represent?', options: ['A boolean flag', 'The Error object containing the message and stack trace of what went wrong', 'A DOM HTML element', 'The url that failed'], answer: 1 },
    { q: 'Why is showing an Error UI to a user better than just letting the console throw a red error?', options: ['It uses less battery', 'Users don\'t see the developer console; if there is no Error UI, the app just looks frozen and broken to them', 'It hacks the server', 'It bypasses CORS'], answer: 1 }
  ]
};

// ════════════ PHASE 6: React Fundamentals ════════════

LESSONS['6-0'] = {
  title: 'What is React & Why Use It',
  emoji: '⚛️',
  tags: ['React', 'Frameworks', 'SPA'],
  intro: `**React** is a JavaScript library for building user interfaces, maintained by Meta (Facebook). Instead of manually manipulating the DOM (like in Phase 4), you describe **what the UI should look like**, and React updates it automatically.`,
  sections: [
    {
      title: '🏗️ The React Advantage',
      body: `1. **Component-Based:** Build reusable UI pieces (Buttons, Cards, Navbars) like LEGO blocks.<br>2. **Virtual DOM:** React keeps a lightweight copy of the DOM in memory. It compares changes and only updates the exact pixels that changed (insanely fast).<br>3. **Declarative:** You write code saying <code>&lt;Dashboard /&gt;</code> instead of manually creating divs and appending them.`,
      code: { lang: 'bash', src: `# Setup Recommendation:
# Use Vite for lightning-fast development
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev` }
    }
  ],
  realLife: `Vanilla JavaScript DOM manipulation is like a custom car builder hammering out every piece of metal by hand. React is like a modern LEGO factory. You build standardized, reusable blocks (Components), snap them together, and if one block breaks, you replace just that block without rebuilding the whole car.`,
  youtube: [
    { title: 'React in 100 Seconds', channel: 'Fireship', url: 'https://youtu.be/Tn6-PIqc4UM' }
  ],
  exam: [
    { q: 'Who created and maintains React?', options: ['Google', 'Meta (Facebook)', 'Microsoft', 'Twitter'], answer: 1 },
    { q: 'What is the "Virtual DOM"?', options: ['A VR headset feature', 'A lightweight, in-memory copy of the real DOM that makes updating the screen much faster', 'A CSS styling technique', 'A database'], answer: 1 },
    { q: 'What does "Component-Based" architecture mean?', options: ['Everything is one giant file', 'Building the UI out of isolated, reusable, independent pieces of code (like Lego blocks)', 'Using lots of folders', 'Writing no HTML'], answer: 1 },
    { q: 'Which modern build tool is highly recommended over the outdated Create-React-App?', options: ['Webpack', 'Gulp', 'Vite', 'Babel'], answer: 2 },
    { q: 'Is React imperative (step-by-step instructions) or declarative (describe the final result)?', options: ['Declarative', 'Imperative', 'Neither', 'Both'], answer: 0 }
  ]
};

LESSONS['6-1'] = {
  title: 'JSX Syntax',
  emoji: '✍️',
  tags: ['JSX', 'Syntax', 'HTML'],
  intro: `JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code directly inside JavaScript. Under the hood, it's converted into standard JS objects.`,
  sections: [
    {
      title: '📜 The Rules of JSX',
      body: `1. **Single Parent:** You must return one wrapping element (like a <code>&lt;div&gt;</code> or a Fragment <code>&lt;&gt;&lt;/&gt;</code>).<br>2. **Close All Tags:** Even <code>&lt;img /&gt;</code> and <code>&lt;input /&gt;</code> must have a closing slash.<br>3. **camelCase:** Attributes change. <code>class</code> becomes <code>className</code>.`,
      code: { lang: 'jsx', src: `// ✅ Valid JSX Example
function Welcome() {
  const name = "Alice"; // JS Variable

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <img src="/logo.png" alt="Logo" />
    </div>
  );
}` }
    }
  ],
  realLife: `JSX is a perfect translator. In the past, HTML and JS hated living together, so they stayed in separate rooms (.html and .js). JSX is the language that lets them finally fall in love and live perfectly within the exact same file.`,
  youtube: [
    { title: 'React JSX Tutorial', channel: 'Programming with Mosh', url: 'https://youtu.be/Ke90Tje7VS0' }
  ],
  exam: [
    { q: 'What does JSX stand for?', options: ['Java Standard Extension', 'JavaScript XML', 'JSON Syntax Extension', 'JavaScript Styling'], answer: 1 },
    { q: 'Can a React component return multiple sibling elements without a parent wrapper?', options: ['Yes', 'No, they must be wrapped in a single parent element or a Fragment <>...</>', 'Only if there are 2', 'Only in classes'], answer: 1 },
    { q: 'How do you inject a JavaScript variable into JSX?', options: ['Using $variable', 'Using "variable"', 'Wrapping it in curly braces {variable}', 'Using %variable%'], answer: 2 },
    { q: 'Why do we use "className" instead of "class" in JSX?', options: ['Because class is a reserved keyword in JavaScript', 'It looks better', 'React cannot read CSS', 'It is faster'], answer: 0 },
    { q: 'Which of the following is valid JSX?', options: ['<input type="text">', '<img src="a.png">', '<input type="text" />', '<br>'], answer: 2 }
  ]
};

LESSONS['6-2'] = {
  title: 'Functional Components',
  emoji: '🧱',
  tags: ['Components', 'Functions', 'UI'],
  intro: `A Component is just a JavaScript function that returns JSX. They are the fundamental building blocks of React applications.`,
  sections: [
    {
      title: '🏭 Building Blocks',
      body: `Components **must** start with a Capital Letter (otherwise React thinks they are standard HTML tags like <code>&lt;button&gt;</code>). They should be "pure", meaning the same input always yields the same output natively.`,
      code: { lang: 'jsx', src: `// 1. Definition (Starts with Capital Letter)
export default function CustomButton() {
  return <button className="btn">Click Me</button>;
}

// 2. Usage in another file
import CustomButton from './CustomButton';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <CustomButton /> 
      <CustomButton /> 
    </div>
  );
}` }
    }
  ],
  realLife: `A component is like a stamp. You carve the design into the rubber once (Defining the Component). Then, you can stamp it onto the paper 1,000 times (Using the Component) with just one line of code!`,
  youtube: [
    { title: 'React Components Explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/Y2hgEGPzTZY' }
  ],
  exam: [
    { q: 'What is a functional React component fundamentally?', options: ['A CSS file', 'A JavaScript function that returns JSX/HTML', 'A database connection', 'A global variable'], answer: 1 },
    { q: 'What naming convention MUST React components follow?', options: ['camelCase', 'snake_case', 'PascalCase (Starts with a Capital Letter)', 'lowercase'], answer: 2 },
    { q: 'Why do components need to start with a Capital Letter?', options: ['For aesthetic reasons', 'To differentiate them from standard HTML tags like <div> or <span>', 'To make them load faster', 'To avoid compiler warnings'], answer: 1 },
    { q: 'How do you render a component named Header inside JSX?', options: ['{Header()}', '<Header></Header>', '<Header />', 'Both B and C are correct'], answer: 3 },
    { q: 'What is a "pure" function/component?', options: ['A component with no CSS', 'A component that returns the exact same UI given the exact same inputs without side effects', 'A component that only renders text', 'A component written in TypeScript'], answer: 1 }
  ]
};

LESSONS['6-3'] = {
  title: 'Props & PropTypes',
  emoji: '🫴',
  tags: ['Props', 'Data', 'Arguments'],
  intro: `Props (short for Properties) are how you pass data from a Parent component down into a Child component. They act just like arguments passed into a normal function.`,
  sections: [
    {
      title: '🚚 Passing Data Down',
      body: `Props are **read-only**; child components cannot modify their own props. By convention, you should destructure them immediately in the function arguments.`,
      code: { lang: 'jsx', src: `// 1. Parent Component
function App() {
  // Passing "name" and "age" down
  return <WelcomeMessage name="John" age={25} />;
}

// 2. Child Component (Destructuring props)
function WelcomeMessage({ name, age }) { 
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}` }
    }
  ],
  realLife: `Props are like genetics passed from a parent to a child. The child receives blue eyes and brown hair (props) from the parent. The child can use and display those traits, but the child cannot natively mutate or change the parent's genetics! (Read-only).`,
  youtube: [
    { title: 'React Props Explained', channel: 'Programming with Mosh', url: 'https://youtu.be/m7OWXtbiXX8' }
  ],
  exam: [
    { q: 'What does "Props" stand for?', options: ['Proposals', 'Properties', 'Propaganda', 'Proptypes'], answer: 1 },
    { q: 'Can a child component freely modify the props passed to it by its parent?', options: ['Yes', 'No, Props are strictly read-only', 'Only if it uses let instead of const', 'Sometimes'], answer: 1 },
    { q: 'How do you pass a number or boolean as a prop?', options: ['age="25"', 'age={25}', 'age=25', 'age:(25)'], answer: 1 },
    { q: 'What is a common best practice when receiving props in a functional component?', options: ['Using props.name everywhere', 'Destructuring them instantly in the parameters: ({ name, age })', 'Assigning them to global variables', 'Ignoring them'], answer: 1 },
    { q: 'What special prop is used to render nested elements inside a component (e.g., <Card> <p>Hi</p> </Card>)?', options: ['{nested}', '{internal}', '{children}', '{content}'], answer: 2 }
  ]
};

LESSONS['6-4'] = {
  title: 'State with useState',
  emoji: '🧠',
  tags: ['Hooks', 'State', 'Dynamic'],
  intro: `Regular variables do not update the screen when they change. If you want the UI to react to dynamic data (like a counter or text input), you must use **State**.`,
  sections: [
    {
      title: '🪝 The useState Hook',
      body: `Hooks always start with <code>use</code>. <code>useState</code> returns an array with two items: the exact current value, and a function to update it (which triggers a rerender!).`,
      code: { lang: 'jsx', src: `import { useState } from 'react';

function Counter() {
  // [currentValue, updateFunction]
  const [count, setCount] = useState(0);

  const increment = () => {
    // Best practice: use previous state
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}` }
    }
  ],
  realLife: `State is the "Short Term Memory" of a component. If you just define "let count = 0", when the component rerenders, it forgets the count and resets. Using "useState" tells React: "Remember this specific number for me forever, and if I call setCount, please redraw the entire screen immediately!"`,
  youtube: [
    { title: 'Learn useState In 15 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/O6P86uwfdR0' }
  ],
  exam: [
    { q: 'Why do we use "useState" instead of a normal variable (let count = 0)?', options: ['It uses less RAM', 'Updating state automatically triggers React to re-render the UI, while normal variables do not', 'Variables are deprecated in React', 'It looks cooler'], answer: 1 },
    { q: 'What does the useState hook return?', options: ['A string', 'An object with data', 'An array containing: [currentValue, updaterFunction]', 'A boolean'], answer: 2 },
    { q: 'What rule must you follow when calling Hooks like useState?', options: ['Call them inside loops', 'Call them conditionally inside if statements', 'Call them at the very top level of your component only', 'Call them outside the function'], answer: 2 },
    { q: 'Is it guaranteed that the state will be updated immediately on the very next line after calling setState()?', options: ['Yes', 'No, state updates are asynchronous in React', 'Only for numbers', 'Only in classes'], answer: 1 },
    { q: 'If the new state depends on the old state, how should you update it?', options: ['setCount(count + 1)', 'setCount(prevCount => prevCount + 1)', 'count = count + 1', 'setCount()'], answer: 1 }
  ]
};

LESSONS['6-5'] = {
  title: 'useEffect Hook',
  emoji: '👁️',
  tags: ['Hooks', 'Effects', 'Lifecycle'],
  intro: `A "Side Effect" is anything outside the pure render cycle of React (e.g., fetching API data, starting timers, manually editing the DOM). You handle these using **useEffect**.`,
  sections: [
    {
      title: '⏱️ The Dependency Array',
      body: `<code>useEffect</code> takes two arguments: a callback function, and a **Dependency Array** <code>[]</code>. This array dictates EXACTLY when the effect should run.`,
      code: { lang: 'jsx', src: `import { useEffect } from 'react';

function Logger({ userId }) {

  // 1. Empty Array [] -> Runs exactly ONCE when component mounts
  useEffect(() => {
    console.log("Component appeared on screen!");
  }, []);

  // 2. Tracked Array [userId] -> Runs whenever 'userId' changes
  useEffect(() => {
    console.log("User ID changed to:", userId);
  }, [userId]);

  // If you omit the array completely, it runs on EVERY SINGLE render
  // (Warning: Usually causes infinite loops!)
}` }
    }
  ],
  realLife: `useEffect is like hiring a Butler. \nThe Callback is the task: "Water the plants." \nThe Dependency Array tells him WHEN to do it. \n[] means "Do it once when I move in." \n[isRaining] means "Do it only when the rain status changes." \nLeaving the array out entirely means "Water the plants literally every second nonstop forever." (Don't do that).`,
  youtube: [
    { title: 'Learn useEffect In 13 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/0ZJgIjIuY7U' }
  ],
  exam: [
    { q: 'What is a "Side Effect" in React?', options: ['A bad CSS transition', 'Any operation that touches things outside the React render cycle (like network requests or DOM timers)', 'An error thrown by the console', 'Prop drilling'], answer: 1 },
    { q: 'How many times does useEffect(() => {}, []) run?', options: ['Every single time the component re-renders', 'Exactly once when the component first mounts (appears)', 'Never', 'Only when the window is resized'], answer: 1 },
    { q: 'What happens if you completely omit the dependency array in useEffect?', options: ['It runs once', 'It throws an error', 'It runs after every single render (high risk of infinite loops)', 'It creates a promise'], answer: 2 },
    { q: 'How does a component perform "cleanup" (like stopping a timer) when it is destroyed/unmounted?', options: ['By calling clear()', 'By returning a cleanup function from inside the useEffect callback', 'By destroying the state', 'By reloading the page'], answer: 1 },
    { q: 'If you want to fetch user data only when the "userId" prop changes, what is the correct dependency array?', options: ['[userId]', '[]', '["user"]', 'Leave it empty'], answer: 0 }
  ]
};

LESSONS['6-6'] = {
  title: 'Handling Events in React',
  emoji: '🖱️',
  tags: ['Events', 'Interactivity', 'DOM'],
  intro: `Unlike plain HTML, React event handlers are written in **camelCase** (e.g. <code>onClick</code> instead of <code>onclick</code>), and you pass a function directly rather than a string.`,
  sections: [
    {
      title: '🎯 Passing Functions',
      body: `Be careful! Do not *invoke* the function when passing it (e.g., <code>handleClick()</code>). Pass exactly the function *reference* (e.g., <code>handleClick</code>), or wrap it in an inline arrow function if it needs arguments.`,
      code: { lang: 'jsx', src: `function Actions() {
  
  const handleClick = (e) => {
    console.log("Button Clicked!", e.target);
  };

  const deleteItem = (id) => {
    console.log("Deleting...", id);
  };

  return (
    <div>
      {/* Pass the reference */}
      <button onClick={handleClick}>Standard Click</button>
      
      {/* If passing arguments, MUST wrap in an inline arrow function! */}
      <button onClick={() => deleteItem(99)}>Delete ID 99</button>
    </div>
  );
}` }
    }
  ],
  realLife: `Passing an event handler is like giving someone a phone number. You want to hand them the business card with the number on it (onClick={handleClick}). If you add () parentheses, it's like literally calling the number right in front of them before handing them the card!`,
  youtube: [
    { title: 'React Event Handling', channel: 'Codevolution', url: 'https://youtu.be/nmbX2OUjZxg' }
  ],
  exam: [
    { q: 'How are React event handlers named?', options: ['lowercase (onclick)', 'camelCase (onClick)', 'snake_case (on_click)', 'PascalCase (OnClick)'], answer: 1 },
    { q: 'What is wrong with this code: <button onClick={submitData()}>', options: ['Nothing', 'submitData must be lowercase', 'Because of the (), the function will execute immediately when the component renders, rather than waiting for the click', 'It misses the word "function"'], answer: 2 },
    { q: 'What is the correct way to pass an argument to an event handler on click?', options: ['onClick={deleteItem(5)}', 'onClick={deleteItem, 5}', 'onClick={() => deleteItem(5)}', 'onClick={"deleteItem(5)"}'], answer: 2 },
    { q: 'Do React Events provide an Event Object ("e" or "event") like vanilla JS?', options: ['Yes, a synthetic event wrapper that acts identically to native events', 'No', 'Only for forms', 'Only for inputs'], answer: 0 },
    { q: 'How do you stop a form from refreshing the page on submit in React?', options: ['return false;', 'e.preventDefault();', 'e.stopPropagation();', 'React does this automatically'], answer: 1 }
  ]
};

LESSONS['6-7'] = {
  title: 'Conditional Rendering',
  emoji: '🔀',
  tags: ['Logic', 'JSX', 'Conditionals'],
  intro: `You can't write standard <code>if/else</code> statements perfectly *inside* a JSX return block. Instead, React relies on Javascript expressions like **Ternary Operators** and **Logical AND (&&)**.`,
  sections: [
    {
      title: '⚖️ Logic in JSX',
      body: `Use Ternaries <code>? :</code> for If/Else.<br>Use Logical AND <code>&&</code> for If-Only (hide/show).`,
      code: { lang: 'jsx', src: `function Profile({ isLoggedIn, isLoading }) {
  
  // 1. Early Return (Standard JS)
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {/* 2. Ternary Operator (If / Else) */}
      {isLoggedIn 
        ? <h1>Welcome back!</h1> 
        : <button>Please Log In</button>
      }

      {/* 3. Logical AND (If 'true', render the right side) */}
      {isLoggedIn && <button>Log Out</button>}
    </div>
  );
}` }
    }
  ],
  realLife: `Ternary is a fork in the road: "If it's raining ? take the umbrella : wear sunglasses". Logical AND is a checkpoint: "If you have a VIP Pass && you get free drinks. (If no pass, nothing happens)."`,
  youtube: [
    { title: 'Conditional Rendering in React', channel: 'Programming with Mosh', url: 'https://youtu.be/7o5FpaaEgqk' }
  ],
  exam: [
    { q: 'Can you put a standard standard "if/else" statement directly inside a JSX block <div> {if...} </div>?', options: ['Yes', 'No, JSX only accepts expressions, not statements', 'Only in child components', 'Only in Vite'], answer: 1 },
    { q: 'What operator is best used for an inline If/Else condition?', options: ['&&', '||', '? :', '??'], answer: 2 },
    { q: 'What does {isTrue && <h1>Hi</h1>} do?', options: ['Renders Hi if isTrue is false', 'Renders Hi if isTrue is truthy, otherwise renders nothing', 'Throws an error', 'Returns a boolean'], answer: 1 },
    { q: 'What is an "Early Return"?', options: ['Returning a value before the function finishes loading variables', 'Placing an if-statement before the main "return" that returns an alternative JSX block entirely (like a loading spinner)', 'A network request', 'Returning early from a loop'], answer: 1 },
    { q: 'What does this return if user is null? {user ? "Yes" : "No"}', options: ['"Yes"', '"No"', 'null', 'Crash'], answer: 1 }
  ]
};

LESSONS['6-8'] = {
  title: 'Lists & Keys',
  emoji: '🥞',
  tags: ['Lists', 'Keys', 'Map'],
  intro: `When building UIs, you often have an array of data (like 10 products). You use the array <code>.map()</code> method to loop over that data and spit out React Components.`,
  sections: [
    {
      title: '🔑 The Key Requirement',
      body: `When mapping components, React demands a **unique "key" prop** on the parent element of the mapped item. This allows React's Virtual DOM to track exactly which items are added, changed, or removed efficiently.`,
      code: { lang: 'jsx', src: `function UserList({ users }) {
  // 'users' is an array of objects: [{id: 1, name: 'Alice'}, ...]

  return (
    <ul>
      {users.map((user) => (
        // The 'key' MUST be unique to this specific item
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

// ❌ Warning: Try not to use the map 'index' as a key!
// If the list order changes, it heavily bugs React's renderer.` }
    }
  ],
  realLife: `Imagine trying to track 5 identical white dogs playing in a park (Array without keys). If one runs away, you don't know which one it was! Giving them unique name-tags (Keys) allows you to instantly track exactly which specific dog moved.`,
  youtube: [
    { title: 'React Lists and Keys', channel: 'Web Dev Simplified', url: 'https://youtu.be/cuHDQhDhvPE' }
  ],
  exam: [
    { q: 'Which Array method is almost exclusively used in React to render lists of items?', options: ['.filter()', '.reduce()', '.map()', '.forEach()'], answer: 2 },
    { q: 'What prop does React REQUIRE when rendering a list of elements?', options: ['id=""', 'key=""', 'name=""', 'index=""'], answer: 1 },
    { q: 'Why does React require keys?', options: ['To apply CSS styles faster', 'To help the Virtual DOM uniquely identify which items have changed, been added, or removed', 'To encrypt data', 'To track mouse clicks'], answer: 1 },
    { q: 'Why is using the array index (e.g., map((item, index))) as the key generally a BAD idea for dynamic lists?', options: ['It is a syntax error', 'It slows down the network', 'If the order of items changes (like sorting or deleting), the indexes change, which breaks React\'s tracking and causes UI bugs', 'Indexes are strings'], answer: 2 },
    { q: 'What is the best source for a unique "key"?', options: ['A random math number', 'The date', 'A unique database ID attached to the data object (like user.id)', 'The array index'], answer: 2 }
  ]
};

LESSONS['6-9'] = {
  title: 'NPM & Package Management',
  emoji: '📦',
  tags: ['NPM', 'Node', 'Packages'],
  intro: `React's superpower is its massive ecosystem. Instead of building complex carousels or chart libraries from scratch, you install them instantly using **NPM (Node Package Manager)**.`,
  sections: [
    {
      title: '🔌 The Command Line',
      body: `Every project has a <code>package.json</code> file acting as a shopping receipt. When you install a package, it gets saved there and downloaded into a massive invisible folder called <code>node_modules</code>.`,
      code: { lang: 'bash', src: `# Install a package (saved to dependencies)
npm install axios

# Install a developer tool (saved to devDependencies)
npm install --save-dev eslint

# Start the local development server (defined in package.json)
npm run dev

# Remove a package
npm uninstall axios` }
    }
  ],
  realLife: `NPM is the App Store for developers. Your project is the iPhone. If you need a calculator feature, you don't build a calculator app from scratch; you just 'npm install' a calculator that someone else already built and tested!`,
  youtube: [
    { title: 'NPM Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/jHDhaSSKmB0' }
  ],
  exam: [
    { q: 'What does NPM stand for?', options: ['New Project Manager', 'Node Package Manager', 'Next Programming Module', 'Null Pointer Modifier'], answer: 1 },
    { q: 'What file acts as the "receipt" or instructions file, listing every package your project relies on?', options: ['package.json', 'readme.md', 'index.js', 'node_modules'], answer: 0 },
    { q: 'Where do the gigantic files for the downloaded packages actually physically live in your project?', options: ['In the cloud', 'Inside the package.json file', 'Inside the node_modules folder', 'Inside the src folder'], answer: 2 },
    { q: 'What is the command to completely remove an installed package?', options: ['npm delete pkg', 'npm destroy pkg', 'npm drop pkg', 'npm uninstall pkg'], answer: 3 },
    { q: 'If you download a React project from GitHub, it does not include the heavy node_modules folder. What command must you run to download them?', options: ['npm start', 'npm install', 'npm download', 'npm recover'], answer: 1 }
  ]
};

LESSONS['6-10'] = {
  title: 'Fetching Data in React',
  emoji: '📡',
  tags: ['Fetch', 'API', 'useEffect'],
  intro: `Apps need real data from the outside world. To fetch data in React, you combine the <code>useEffect</code> hook (to trigger the fetch on load) with the <code>useState</code> hook (to store the data).`,
  sections: [
    {
      title: '🔄 The Data Loading Pattern',
      body: `A professional application always keeps track of 3 distinct states: **Loading**, **Error**, and the **Data** itself.`,
      code: { lang: 'jsx', src: `function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function inside the effect
    const fetchData = async () => {
      try {
        const res = await fetch('api.com/stats');
        if (!res.ok) throw new Error('Failed to fetch');
        
        setData(await res.json()); // Success!
      } catch (err) {
        setError(err.message); // Error!
      } finally {
        setLoading(false); // Stop loading spinner!
      }
    };

    fetchData(); // Call it immediately
  }, []); // Empty array = run ONCE on component mount

  if (loading) return <div>Spinning wheels...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render Data!
  return <div>{data.length} items loaded!</div>;
}` }
    }
  ],
  realLife: `Fetching data is ordering a package. \nuseEffect is you clicking "Buy". \nLoading State is you tracking the truck on the map. \nError State is the truck crashing. \nData State is you finally opening the box.`,
  youtube: [
    { title: 'Data Fetching in React', channel: 'PedroTech', url: 'https://youtu.be/00vQHcNizOM' }
  ],
  exam: [
    { q: 'Which two Hooks are almost entirely responsible for fetching and holding API data?', options: ['useRef and useContext', 'useState and useEffect', 'useReducer and useMemo', 'useData and useFetch'], answer: 1 },
    { q: 'Why do we place the fetch logic inside a useEffect hook with an empty dependency array []?', options: ['It makes it faster', 'It prevents the fetch from triggering on every single component re-render (causing an infinite loop)', 'It hides it from the user', 'It allows CSS to load'], answer: 1 },
    { q: 'What are the 3 critical pieces of state you should track when building an API request component?', options: ['Data, Styles, Scripts', 'Width, Height, Color', 'Data, Loading, Error', 'User, Auth, Token'], answer: 2 },
    { q: 'Why do you define the inner async fetch function and then call it immediately inside the useEffect?', options: ['Because useEffect\'s main callback cannot be cleanly marked as "async" directly without causing issues with React cleanup functions', 'Because it looks cool', 'It is required by Vite', 'To hide variables'], answer: 0 },
    { q: 'What does the finally {} block do in a fetch pattern?', options: ['It crashes the app', 'It runs only if there is an error', 'It always runs at the very end, making it the perfect place to set loading = false', 'It parses JSON'], answer: 2 }
  ]
};

LESSONS['6-11'] = {
  title: 'Data Visualization with Recharts',
  emoji: '📊',
  tags: ['Recharts', 'Graphs', 'Libraries'],
  intro: `Instead of building complex SVGs from scratch, React heavily utilizes ecosystem libraries. **Recharts** is a wildly popular composable React charting library.`,
  sections: [
    {
      title: '📈 Composing a Chart',
      body: `Recharts provides components like <code>&lt;LineChart&gt;</code> and <code>&lt;XAxis&gt;</code> that you nest together to build your specific graph visually.`,
      code: { lang: 'jsx', src: `import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Data Array required
const data = [
  { day: 'Mon', sales: 400 },
  { day: 'Tue', sales: 300 }
];

export default function AppChart() {
  return (
    // ResponsiveContainer forces it to fill parent width
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <Tooltip /> {/* Shows popup info on hover! */}
        
        {/* The actual drawn line matching the "sales" data key */}
        <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}` }
    }
  ],
  realLife: `Recharts is like building a custom Dashboard out of Lego bricks. "I need a graph. Okay here's the baseplate (LineChart). Now snap on the X-Axis piece. Now snap on the popup-hover piece (Tooltip)." It handles all the complex math and drawing in the background.`,
  youtube: [
    { title: 'Recharts React Tutorial', channel: 'Lama Dev', url: 'https://youtu.be/tHqikEUi20k' }
  ],
  exam: [
    { q: 'What is Recharts natively built upon?', options: ['Vue.js', 'React Components and SVG', 'Canvas Elements', 'jQuery'], answer: 1 },
    { q: 'What prop must be passed entirely to the base <LineChart> component before anything draws?', options: ['style={}', 'className="chart"', 'data={yourDataArray}', 'onHover={}'], answer: 2 },
    { q: 'What component ensures the chart naturally resizes to fit whatever container it is placed in?', options: ['<ResizeChart>', '<ResponsiveContainer>', '<WindowSize>', '<Liquid>'], answer: 1 },
    { q: 'What does the <Tooltip /> component do in Recharts?', options: ['It adds hints to the code', 'It creates a popup box that displays the exact data values when the user hovers over a point on the graph', 'It shapes the line', 'It changes colors'], answer: 1 },
    { q: 'In the <Line dataKey="sales" /> component, what does dataKey represent?', options: ['A secret password', 'The CSS class name', 'The specific property name inside the data array objects that the line should graph', 'The X-axis label'], answer: 2 }
  ]
};

// ════════════ PHASE 7: Advanced React & Next.js Intro ════════════

LESSONS['7-0'] = {
  title: 'useRef Hook',
  emoji: '📍',
  tags: ['Hooks', 'References', 'DOM'],
  intro: `While <code>useState</code> causes a component to re-render every time its value changes, <code>useRef</code> is a hook that holds a mutable value that **does NOT cause a re-render** when updated.`,
  sections: [
    {
      title: '🏗️ Two Main Uses of useRef',
      body: `1. **Accessing DOM Elements directly:** Like grabbing an input field to focus it automatically.<br>2. **Keeping Mutable Variables:** Tracking a value across renders without triggering a visual update (like a stopwatch timer ID).`,
      code: { lang: 'jsx', src: `import { useRef, useEffect } from 'react';

function FocusInput() {
  // 1. Create the ref
  const inputRef = useRef(null);
  const renderCount = useRef(0); // Tracks renders silently

  useEffect(() => {
    // 2. Access the real DOM node via .current
    inputRef.current.focus(); 
    
    // Updates silently without re-triggering useEffect
    renderCount.current = renderCount.current + 1;
  }, []);

  return (
    <div>
      {/* 3. Attach the ref to the JSX element */}
      <input ref={inputRef} type="text" placeholder="I auto-focus!" />
      <p>Render Count (Invisible Update): {renderCount.current}</p>
    </div>
  );
}` }
    }
  ],
  realLife: `Think of "useState" like a loud megaphone; every time you change the score, it shouts "EVERYBODY RERENDER THE SCOREBOARD!". Think of "useRef" like a quiet notepad in your pocket. You can write down new numbers on it all day, but nobody in the stadium notices until the game ends.`,
  youtube: [
    { title: 'Learn useRef in 11 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/t2ypzz6gJm0' }
  ],
  exam: [
    { q: 'What is the primary difference between useRef and useState?', options: ['useRef is faster', 'Changing a useRef value does NOT trigger a component re-render, whereas changing useState does', 'useRef is for numbers only', 'useState accesses the DOM'], answer: 1 },
    { q: 'What property of the object returned by useRef holds the actual referenced value?', options: ['.value', '.data', '.ref', '.current'], answer: 3 },
    { q: 'What is a common use-case for attaching a ref to a JSX element like <input ref={myRef}>?', options: ['To change the CSS directly', 'To manually trigger focus() or select() on the raw DOM node completely bypassing React', 'To make it responsive', 'To store its value in a database'], answer: 1 },
    { q: 'Does updating myRef.current = 5 trigger a useEffect that has no dependency array?', options: ['Yes', 'No, because modifying a ref does not trigger a render cycle', 'Only in strict mode', 'Only if it was originally 0'], answer: 1 },
    { q: 'If you want to track how many times a component has re-rendered without causing infinite loops, should you use useState or useRef?', options: ['useState', 'useRef', 'useEffect', 'useMemo'], answer: 1 }
  ]
};

LESSONS['7-1'] = {
  title: 'useMemo & useCallback',
  emoji: '🧠',
  tags: ['Hooks', 'Performance', 'Memoization'],
  intro: `As your app grows, performance matters. <code>useMemo</code> and <code>useCallback</code> are advanced hooks used to **memoize** (remember and cache) data or functions so React doesn't waste time recalculating them on every single render.`,
  sections: [
    {
      title: '💾 Caching Expensive Math & Functions',
      body: `**useMemo** caches a calculated *Value*.<br>**useCallback** caches a *Function* definition.<br>Both take a dependency array (just like <code>useEffect</code>) and only re-calculate when those specific dependencies change.`,
      code: { lang: 'jsx', src: `import { useState, useMemo, useCallback } from 'react';

function ExpensiveApp({ items }) {
  const [count, setCount] = useState(0);

  // 1. useMemo: Only recalculates if 'items' array changes.
  // If 'count' state changes, this expensive math is SKIPPED!
  const totalValue = useMemo(() => {
    console.log("Doing heavy math...");
    return items.reduce((acc, item) => acc + item.price, 0);
  }, [items]);

  // 2. useCallback: Prevents this function from being recreated in memory
  // every time the component renders. Useful when passing to child components.
  const handleCheckout = useCallback(() => {
    console.log("Checking out...", totalValue);
  }, [totalValue]);

  return <button onClick={() => setCount(count + 1)}>Re-render {count}</button>;
}` }
    }
  ],
  realLife: `useMemo is like having a really hard math problem. Instead of doing the math from scratch every single time someone asks you, you do it once, write the answer on a sticky note (memoization), and just show them the sticky note until the numbers actually change.`,
  youtube: [
    { title: 'Learn useMemo In 10 Minutes', channel: 'Web Dev Simplified', url: 'https://youtu.be/THL1OPn72vo' }
  ],
  exam: [
    { q: 'What does "memoization" mean in React programming?', options: ['Writing comments in code', 'Caching the results of expensive function calls and returning the cached result when the inputs have not changed', 'A type of database', 'Remembering CSS variables'], answer: 1 },
    { q: 'What is the exact difference between useMemo and useCallback?', options: ['There is no difference', 'useMemo caches a returned VALUE from a function, useCallback caches the FUNCTION definition itself', 'useMemo is for strings, useCallback is for numbers', 'useCallback is deprecated'], answer: 1 },
    { q: 'If an expensive useMemo calculation has an empty dependency array [], how often will the calculation run?', options: ['Every render', 'Never', 'Exactly once when the component first mounts', 'When the user clicks'], answer: 2 },
    { q: 'Why shouldn\'t you wrap EVERY single variable in useMemo to "make it faster"?', options: ['It breaks CSS', 'Memoization itself takes a small amount of memory and performance to track; using it on cheap calculations actually makes the app SLOWER', 'React prevents it', 'It causes infinite loops'], answer: 1 },
    { q: 'If a component re-renders due to a "themeColor" state change, will a useMemo calculation that only depends on a "userData" variable re-run?', options: ['Yes', 'No, because its dependency (userData) did not change', 'Only in Chrome', 'Only if forced'], answer: 1 }
  ]
};

LESSONS['7-2'] = {
  title: 'Custom Hooks',
  emoji: '🪝',
  tags: ['Hooks', 'Reusability', 'Logic'],
  intro: `If you find yourself copying and pasting the exact same ` + '`' + `useEffect` + '`' + ` fetching logic across 10 different components, you are violating the DRY principle. You need a **Custom Hook**.`,
  sections: [
    {
      title: '🛠️ Building your own Hooks',
      body: `A custom hook is simply a normal JavaScript function that **starts with the word "use"** and calls other React hooks inside of it. It separates UI (Components) from Business Logic (Hooks).`,
      code: { lang: 'jsx', src: `// 1. Define the Custom Hook (useFetch.js)
import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(data => {
      setData(data);
      setLoading(false);
    });
  }, [url]);

  return { data, loading }; // Return the state!
}

// 2. Use it cleanly in ANY component!
import { useFetch } from './useFetch';

function UserList() {
  const { data, loading } = useFetch('api.com/users');
  if (loading) return <Spinner />;
  return <div>{data.name}</div>;
}` }
    }
  ],
  realLife: `A Custom Hook is like building a vending machine. Instead of every employee manually hand-mixing syrup, carbonated water, and ice in their own cups (repetitive useEffect logic), you build one solid machine (useFetch). Now, an employee just presses a button and the machine does the complex logic returning a finished soda.`,
  youtube: [
    { title: 'React Custom Hooks Tutorial', channel: 'PedroTech', url: 'https://youtu.be/6ThIvnJYOEs' }
  ],
  exam: [
    { q: 'What naming convention MUST a custom hook absolutely follow?', options: ['Must end with Hook', 'Must start with the word "use" (e.g. useFetch)', 'Must be entirely uppercase', 'Must start with "get"'], answer: 1 },
    { q: 'Why do we build custom hooks?', options: ['To write CSS easier', 'To extract complex, repetitive logic (state and effects) out of UI components to keep them clean and DRY', 'To make the app slower', 'To hack APIs'], answer: 1 },
    { q: 'Can a Custom Hook call built-in React hooks like useState inside of it?', options: ['No', 'Yes, that is the only way it works!', 'Only if it is a class component', 'Only in Next.js'], answer: 1 },
    { q: 'If Component A and Component B both call the same useFetch() hook, do they share the SAME data state?', options: ['Yes', 'No, every time you call a hook, it creates a completely independent isolated instance of that state for that specific component', 'Sometimes dependent on timing', 'Yes but only if they are siblings'], answer: 1 },
    { q: 'What does a custom hook typically return?', options: ['JSX Elements (<div>)', 'Usually an array or object containing state variables and functions (e.g., { data, loading } )', 'A Promise', 'An HTTP Response'], answer: 1 }
  ]
};

LESSONS['7-3'] = {
  title: 'Context API',
  emoji: '🌍',
  tags: ['State', 'Global', 'Context'],
  intro: `When your app grows, passing props down through 5 layers of components (Prop Drilling) becomes a nightmare. The **Context API** acts as a global intercom system for your state.`,
  sections: [
    {
      title: '🌐 Global Data Management',
      body: `You create a ` + '`' + `Context.Provider` + '`' + ` high up in your app tree. Any component inside that provider, regardless of how deep it is nested, can grab the data instantly using ` + '`' + `useContext` + '`' + `.`,
      code: { lang: 'jsx', src: `import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Wrap App with Provider (usually in main.jsx)
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Navbar /> {/* Deeply nested components inside here... */}
    </ThemeContext.Provider>
  );
}

// 3. Consume instantly anywhere!
function DeepChildComponent() {
  const { theme, setTheme } = useContext(ThemeContext);
  return <div className={theme}>Current Theme!</div>;
}` }
    }
  ],
  realLife: `Prop drilling is whispering a secret to a person, who whispers it to the next person, 10 times down a line just to tell the guy at the end. Context API is picking up a PA Intercom System and just broadcasting the secret to the entire building instantly.`,
  youtube: [
    { title: 'React Context API Explained', channel: 'Programming with Mosh', url: 'https://youtu.be/SqcY0GlETPk' }
  ],
  exam: [
    { q: 'What problem does the Context API attempt to solve?', options: ['CSS styling issues', 'Prop Drilling (passing data through many unnecessary intermediate component layers)', 'Database connection errors', 'Image loading speeds'], answer: 1 },
    { q: 'What component must wrap your application tree to broadcast the context data?', options: ['<Context.Broadcaster>', '<Context.Provider value={...}>', '<Context.Sender>', '<Context.Wrapper>'], answer: 1 },
    { q: 'How does a deeply nested child component actually grab the data from the Context?', options: ['By reading props', 'By using the useContext() hook', 'By making a database call', 'By reading localStorage'], answer: 1 },
    { q: 'When is it a BAD idea to use Context?', options: ['For user authentication data', 'For theme preferences', 'For highly rapidly changing state (like a real-time mouse coordinate tracker) because it forces the whole tree to re-render', 'For language settings'], answer: 2 },
    { q: 'Can you have multiple different Context Providers (e.g., AuthProvider and ThemeProvider) in one app?', options: ['No, only one is allowed', 'Yes, you can easily nest providers inside one another', 'Yes but it crashes React Router', 'Only in Next.js'], answer: 1 }
  ]
};

LESSONS['7-4'] = {
  title: 'React Router v6',
  emoji: '🚦',
  tags: ['Routing', 'SPA', 'Navigation'],
  intro: `React is a Single Page Application (SPA). It doesn't actually have "pages". To navigate between "Home" and "About" without reloading the browser window, we use **React Router**.`,
  sections: [
    {
      title: '🗺️ Map Your Routes',
      body: `You wrap your app in a ` + '`' + `BrowserRouter` + '`' + `. Then, you map specific URL paths to specific React Components.`,
      code: { lang: 'jsx', src: `import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation (Never use <a> tags! They cause page reloads) */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
      </nav>

      {/* The Map */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<404NotFound />} /> {/* Catch-all Error Route */}
      </Routes>
    </BrowserRouter>
  );
}` }
    }
  ],
  realLife: `React Router is a stage director in a play. Instead of burning down the theater and building a new one for Act 2 (Browser Page Reload), the director simply drops a curtain, swaps the props (Components), and raises the curtain immediately without you ever leaving your seat.`,
  youtube: [
    { title: 'React Router v6 Crash Course', channel: 'Web Dev Simplified', url: 'https://youtu.be/Ul3y1LXxzdU' }
  ],
  exam: [
    { q: 'Why is React referred to as a Single Page Application (SPA)?', options: ['It only allows one screen to exist', 'The browser only ever loads one physical index.html file, and JS dynamically rewrites the screen instantly', 'It has no routing possible', 'It only works on page 1 of google'], answer: 1 },
    { q: 'Why must you use <Link to="/path"> instead of standard <a href="/path"> tags in React Router?', options: ['Because <a> tags look ugly', 'Because <a> tags trigger a hard network browser reload, completely destroying the SPA illusion and clearing React State', 'Because Link is a native HTML5 tag', 'Because <a> tags don\'t support CSS'], answer: 1 },
    { q: 'What component acts as the "Switchboard", reading the URL and rendering the children?', options: ['<RouterManager>', '<Routes>', '<URL>', '<Links>'], answer: 1 },
    { q: 'In an internet URL, you type `/fake`. If you have a catch-all route `<Route path="*" />`, what happens?', options: ['The browser crashes', 'It renders the component provided to the catch-all (usually a 404 page)', 'It redirects to Home', 'It turns off the server'], answer: 1 },
    { q: 'What hook would you use to forcefully redirect a user to another page via code (like after a successful login)?', options: ['useRedirect()', 'useLocation()', 'useNavigate()', 'useRoute()'], answer: 2 }
  ]
};

LESSONS['7-5'] = {
  title: 'Nested Routes',
  emoji: '🪆',
  tags: ['Routing', 'Layouts', 'Outlet'],
  intro: `What if you want a Persistent Layout (like a Navbar and a Sidebar) that stays on the screen, while only the specific content window changes? You use **Nested Routes** and the **<code>&lt;Outlet /&gt;</code>**.`,
  sections: [
    {
      title: '🖼️ The Outlet Component',
      body: `You define a Parent Route (Layout). Inside that Layout component, you place an ` + '`' + `<Outlet />` + '`' + `. React Router uses that Outlet as a hole to inject the Child Route's content into!`,
      code: { lang: 'jsx', src: `import { Routes, Route, Outlet } from 'react-router-dom';

// 1. The Layout Component
function DashboardLayout() {
  return (
    <div className="flex">
      <SideNavbar />
      <main className="content-area">
        {/* Magic Hole: Child content renders here! */}
        <Outlet /> 
      </main>
    </div>
  );
}

// 2. The Route Structure
function App() {
  return (
    <Routes>
      {/* Parent Route manages the layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* Child Routes inject into the Outlet! */}
        <Route path="stats" element={<Stats />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}` }
    }
  ],
  realLife: `An Outlet is a picture frame. The DashboardLayout is the heavy wooden frame itself playing permanently on the wall. The Child routes are just photographs that you slip into the frame (the Outlet target) depending on who is visiting.`,
  youtube: [
    { title: 'React Router Nested Routes (Outlet)', channel: 'PedroTech', url: 'https://youtu.be/SMOOEWxaBQY' }
  ],
  exam: [
    { q: 'What specific React Router component is used to define where child route components should be rendered inside a parent layout?', options: ['<Children />', '<Outlet />', '<RenderHere />', '<ChildRoutes />'], answer: 1 },
    { q: 'In the code above, what is the exact URL a user must visit to see the <Settings /> component?', options: ['/settings', '/dashboard/settings', '/dashboard-settings', '/settings/dashboard'], answer: 1 },
    { q: 'Why are Nested Routes highly efficient for things like Dashboards?', options: ['They encrypt data securely', 'The heavy Sidebar and Navbar do not unmount or re-render when changing between child pages, saving performance and preserving state', 'They reduce file sizes radically', 'They are required for databases'], answer: 1 },
    { q: 'If you want a child route to load by default when the user hits just "/dashboard" (with no trailing child path), what prop do you use instead of path?', options: ['default', 'index', 'main', 'start'], answer: 1 },
    { q: 'Can you nest outlets multiple layers deep (A layout inside a layout inside a layout)?', options: ['No', 'Yes, React Router handles infinite nesting trees', 'Only in Next.js', 'Only twice'], answer: 1 }
  ]
};

LESSONS['7-6'] = {
  title: 'Protected Routes',
  emoji: '🛡️',
  tags: ['Security', 'Routing', 'Auth'],
  intro: `You don't want unauthorized users manually typing ` + '`' + `/admin-dashboard` + '`' + ` into the URL bar and getting access. A **Protected Route** is a component that checks for authentication before rendering.`,
  sections: [
    {
      title: '🛑 Gatekeeping the URL',
      body: `You create a custom Wrapper Component. If the user is logged in, it returns the ` + '`' + `<Outlet />` + '`' + ` (allowing them through). If they are null, it forcefully redirects them to the login screen using ` + '`' + `<Navigate />` + '`' + `.`,
      code: { lang: 'jsx', src: `import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assume we have context!

// 1. The Bouncer Component
function ProtectedRoute() {
  const { user, loading } = useAuth();
  
  if (loading) return <div>Checking auth...</div>;
  
  // If no user exists, instantly kick them to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user exists, let them pass!
  return <Outlet />;
}

// 2. Wrapping sensitive routes
<Routes>
  {/* Public */}
  <Route path="/login" element={<Login />} />
  
  {/* Private (Wrapped securely!) */}
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
</Routes>` }
    }
  ],
  realLife: `A Protected Route is the VIP Bouncer at a club. You (the User) try to walk into the VIP Room (Dashboard Route). The Bouncer (ProtectedRoute Component) checks his clipboard (AuthContext). If you are on the list, he opens the velvet rope (Outlet). If you aren't, he throws you out the front door (Navigate to Login).`,
  youtube: [
    { title: 'React Protected Routes', channel: 'Cosden Solutions', url: 'https://youtu.be/O6P86uwfdR0' }
  ],
  exam: [
    { q: 'What is the primary purpose of a Protected Route in React?', options: ['To prevent malware', 'To prevent unauthenticated or unauthorized users from viewing sensitive dashboard components by intercepting the render', 'To hide code from the browser', 'To make routing faster'], answer: 1 },
    { q: 'If a user fails the authentication check, what React Router component is used to forcefully redirect them immediately?', options: ['<Redirect />', '<GoBack />', '<Navigate to="/login" />', '<Kick />'], answer: 2 },
    { q: 'In a real application, where does the ProtectedRoute usually check to see if the user is valid?', options: ['A CSS variable', 'A Global State/Context (like AuthContext) or checking an encrypted token in localStorage', 'The URL query params', 'The HTML title'], answer: 1 },
    { q: 'Why is it important to have a "loading" state check inside the ProtectedRoute before kicking the user out?', options: ['For aesthetic spinners', 'Because checking Firebase/Backend Auth takes half a second; if you don\'t pause for the loading state, the app will instantly kick valid users before the server can confirm they are logged in', 'To slow down hackers', 'To save battery'], answer: 1 },
    { q: 'What does the "replace" prop do in <Navigate to="/login" replace />?', options: ['Replaces their password', 'Replaces the current entry in the browser\'s history stack, meaning if they click the "Back" arrow, they won\'t get stuck in an infinite redirect loop back to the protected route', 'Replaces the CSS layout', 'Replaces React Router'], answer: 1 }
  ]
};

LESSONS['7-7'] = {
  title: 'Axios for HTTP requests',
  emoji: '🚚',
  tags: ['Network', 'API', 'Axios'],
  intro: `While the native ` + '`' + `fetch()` + '`' + ` API works, the industry standard library for HTTP requests in React is **Axios**. It automatically parses JSON, catches HTTP errors cleanly, and handles timeouts natively.`,
  sections: [
    {
      title: '📦 Why Axios Beats Fetch',
      body: `With ` + '`' + `fetch` + '`' + `, a 404 Error does NOT trigger the ` + '`' + `.catch()` + '`' + ` block; you have to manually check ` + '`' + `if (!res.ok)` + '`' + `. Axios fixes this intuitively and skips the ` + '`' + `.json()` + '`' + ` parsing step completely.`,
      code: { lang: 'bash', src: `npm install axios` },
      code2: { lang: 'jsx', src: `import axios from 'axios';

async function submitData() {
  try {
    // Axios automatically stringifies the body, sets headers, 
    // AND parses the JSON response into 'res.data'
    const res = await axios.post('https://api.com/users', { name: "Alice" });
    
    console.log("Success!", res.data); // Pure data instantly
  } catch (err) {
    // If it's a 404, 401, or 500, it safely lands right here natively!
    console.error("Axios specifically caught an error:", err.response.data.message);
  }
}

// Bonus: Creating a global instance!
export const api = axios.create({
  baseURL: 'https://api.com/',
  headers: { Authorization: 'Bearer MyToken123' }
});` }
    }
  ],
  realLife: `Fetch is a generic delivery truck. You have to open the back, carry the boxes out yourself (res.json()), and you don't even know if the boxes are broken until you open them (manually checking res.ok). Axios is a white-glove courier. They guarantee the package is intact, they unpack it for you, and place it directly on your table (res.data).`,
  youtube: [
    { title: 'Axios Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/6LyagUHKzKI' }
  ],
  exam: [
    { q: 'What is a major advantage of Axios over the native Fetch API?', options: ['It uses less RAM', 'It automatically parses JSON and natively rejects promises on 400/500 HTTP Error status codes', 'It does not require Async/Await', 'It connects directly to SQL'], answer: 1 },
    { q: 'In Axios, where is the actual JSON payload of the response stored?', options: ['res.body', 'res.json', 'res.data', 'res.payload'], answer: 2 },
    { q: 'If an API returns a 404 Not Found error, what does Axios do natively?', options: ['Fails silently', 'Logs to console but continues the Try block', 'Instantly throws the error, causing execution to jump into the Catch block', 'Returns null'], answer: 2 },
    { q: 'What feature allows you to set a default "baseURL" and default Headers (like an Auth token) so you don\'t have to type them on every single request?', options: ['Axios Templates', 'Axios Instances (axios.create)', 'Axios Reducers', 'Axios Context'], answer: 1 },
    { q: 'Do you need to use `JSON.stringify(object)` when sending a POST request body with Axios?', options: ['Yes, always', 'No, Axios automatically stringifies objects seamlessly under the hood', 'Only for arrays', 'Only in Next.js'], answer: 1 }
  ]
};

LESSONS['7-8'] = {
  title: 'Error Boundaries',
  emoji: '🔥',
  tags: ['Errors', 'Resilience', 'UX'],
  intro: `If a Component throws a Javascript error during rendering, React will completely unmount the whole application, leaving the user staring at a **Blank White Screen of Death**. **Error Boundaries** stop the bleeding.`,
  sections: [
    {
      title: '🛑 Containing the Blast',
      body: `An Error Boundary serves as a firewall. If a child component explodes, the boundary catches the error, contains it, and displays a fallback UI (like "Oops, a widget broke!") while the rest of the application (like the Navbar) stays perfectly alive.`,
      code: { lang: 'jsx', src: `// ⚠️ Note: As of React 18, Error Boundaries MUST be written 
// as Class Components, or by using a package like 'react-error-boundary'.

import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="alert-red">
      <h3>Something went wrong in this specific widget:</h3>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// 2. Wrap risky components!
function Dashboard() {
  return (
    <div>
      <Navbar /> {/* Safe! */}
      
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RiskyChartComponent /> {/* If this blows up, it is contained here! */}
      </ErrorBoundary>
      
      <Footer /> {/* Safe! */}
    </div>
  );
}` }
    }
  ],
  realLife: `A React app without Error Boundaries is like a ship with no bulkheads. If a tiny leak (error) happens in one room, the entire ship sinks (White Screen of Death). An Error Boundary is a bulkhead door that seals off the flooded room, keeping the rest of the ship floating perfectly.`,
  youtube: [
    { title: 'React Error Boundaries', channel: 'Web Dev Simplified', url: 'https://youtu.be/DnyjX3hM98c' }
  ],
  exam: [
    { q: 'What happens by default in React if a component throws an unhandled error during rendering?', options: ['It skips the component', 'It shows a warning in the console but continues loosely', 'React completely unmounts the entire component tree resulting in a blank white screen', 'It sends an email to the dev'], answer: 2 },
    { q: 'What is the literal purpose of an Error Boundary?', options: ['To fix backend database crashes', 'To catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole app', 'To prevent 404 Network requests', 'To stop infinite loops'], answer: 1 },
    { q: 'Currently, what is the limitation of creating custom Error Boundaries organically in React?', options: ['They cannot use CSS', 'They MUST be written using older Class Component syntax (componentDidCatch), meaning functional developers usually rely on the npm package `react-error-boundary`', 'They only work on Macs', 'They slow down rendering by 50%'], answer: 1 },
    { q: 'Do Error Boundaries catch Event Handler errors (like an error inside an onClick function)?', options: ['Yes', 'No, Error Boundaries only catch errors that occur during the Render phase. For event handlers, standard try/catch is used.', 'Only in Strict Mode', 'Sometimes'], answer: 1 },
    { q: 'In a professional layout, where should you place Error Boundaries?', options: ['Wrapping the entire <App /> exclusively', 'Wrapping every single HTML <div> element', 'Strategically around major feature blocks (like a Sidebar, or the main Outlet) so one broken widget doesn\'t kill the whole screen', 'In the backend'], answer: 2 }
  ]
};

LESSONS['7-9'] = {
  title: 'React Query Basics',
  emoji: '⚡',
  tags: ['Data', 'Caching', 'Query'],
  intro: `Combining ` + '`' + `useEffect` + '`' + ` and ` + '`' + `useState` + '`' + ` to fetch data works, but it's tedious, lacks caching, and doesn't handle background refetching. enter **TanStack React Query**, the industry standard for fetching data.`,
  sections: [
    {
      title: '🔮 Data Synchronization',
      body: `React Query automatically caches your data, handles loading/error states in one line, and automatically refetches data in the background if the user leaves the tab and comes back!`,
      code: { lang: 'bash', src: `npm i @tanstack/react-query` },
      code2: { lang: 'jsx', src: `import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function UsersList() {
  // 1 Line of Code handles State, Loading, Errors, AND Caching!
  const { data, isLoading, isError } = useQuery({
    queryKey: ['usersList'], // The unique Cache Key
    queryFn: async () => {
      const res = await axios.get('https://api.com/users');
      return res.data;
    }
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p>Whoops!</p>;

  // Data is mapped cleanly!
  return data.map(u => <div key={u.id}>{u.name}</div>);
}` }
    }
  ],
  realLife: `Standard fetch is like a man running to the library (server) every time you ask a question. React Query is like the librarian sitting next to you. They run to the server once, write down the answer (Cache), and if you ask again 5 seconds later, they just give you the paper instantly without running anywhere.`,
  youtube: [
    { title: 'React Query Tutorial for Beginners', channel: 'PedroTech', url: 'https://youtu.be/novnyCaa7To' }
  ],
  exam: [
    { q: 'What primary problem does TanStack React Query solve?', options: ['CSS styling', 'It replaces the tedious boilerplate of useEffect/useState by automatically handling fetching, caching, loading states, and background synchronization', 'It manages React Router', 'It replaces Redux for local UI state'], answer: 1 },
    { q: 'What is the "queryKey" used for in useQuery?', options: ['A password to the API', 'A completely unique identifier array that React Query uses to Cache the data in memory and retrieve it instantly later', 'A CSS ID', 'The endpoint URL exclusively'], answer: 1 },
    { q: 'What does React Query do automatically if a user switches browser tabs away from your app, and then clicks back to your app 5 minutes later?', options: ['It crashes the app', 'It silently refetches the query in the background to ensure they are looking at the most up-to-date data possible (stale-while-revalidate)', 'It logs them out', 'Nothing'], answer: 1 },
    { q: 'Does React Query replace Axios/Fetch?', options: ['Yes', 'No, React Query is agnostic. You still use Axios or Fetch inside the queryFn to actually get the data; Query just Manages it.', 'Only on Node servers', 'Only for GraphQL'], answer: 1 },
    { q: 'What does the hook return to let you instantly build UX patterns?', options: ['A promise array', '{ data, isLoading, isError } properties natively built in', 'A boolean', 'A Redux store'], answer: 1 }
  ]
};

LESSONS['7-10'] = {
  title: 'Introduction to Next.js',
  emoji: '▲',
  tags: ['Nextjs', 'Framework', 'SSR'],
  intro: `React is a *Library* for UIs. **Next.js is a Full-Stack Framework** built ON TOP of React. It solves the massive SEO and Performance problems inherent to client-side single page applications.`,
  sections: [
    {
      title: '📁 File-Based Routing',
      body: `No more messy React Router setup. In Next.js (App Router), you literally just create folders. If you make a file at <code>app/about/page.jsx</code>, you instantly have a <code>/about</code> route magically working!`,
      code: { lang: 'bash', src: `npx create-next-app@latest my-app` },
      code2: { lang: 'jsx', src: `// 📁 app/page.jsx (Becomes localhost:3000/)
export default function Home() {
  return <h1>I am the Homepage!</h1>;
}

// 📁 app/contact/page.jsx (Becomes localhost:3000/contact)
export default function Contact() {
  return <h1>Email me!</h1>;
}` }
    }
  ],
  realLife: `React is like receiving a giant box of car parts from the mechanic; you have to assemble the engine, the routing, and the data fetching yourself. Next.js is walking onto the lot and driving away in a fully polished, high-performance sports car with built-in GPS (routing) and turbochargers (Server Rendering).`,
  youtube: [
    { title: 'Next.js App Router Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/Y6KDk5iyrYE' }
  ],
  exam: [
    { q: 'What is Next.js?', options: ['An alternative to JavaScript', 'A full-stack React framework optimized for production with routing and server rendering built right in', 'A database', 'A CSS library'], answer: 1 },
    { q: 'How does Routing work by default in the new Next.js App Router?', options: ['You must install React-Router-v6', 'You configure a massive JSON map file', 'File-based routing: creating a page.jsx file inside a folder automatically turns that folder structure into a URL route', 'You must use Redux'], answer: 2 },
    { q: 'What happens if you run "npx create-next-app@latest"?', options: ['It deletes your project', 'It scaffolds a fully configured Next.js project automatically with Tailwind css usually included', 'It installs node_modules only', 'It starts a database'], answer: 1 },
    { q: 'In the App Router structure, what specific filename serves as the actual UI component for a route?', options: ['index.js', 'main.jsx', 'page.jsx', 'route.js'], answer: 2 },
    { q: 'Can Next.js connect directly to a database without needing a separate Express/Node backend?', options: ['No', 'Yes, Using Server Components and API Routes, Next.js is genuinely Full-Stack capable', 'Only via third party plugins', 'Only if the DB is local'], answer: 1 }
  ]
};

LESSONS['7-11'] = {
  title: 'Why Next.js over React',
  emoji: '🏎️',
  tags: ['SEO', 'Performance', 'SSR'],
  intro: `Why does the industry demand Next.js? Because standard React struggles with **Search Engine Optimization (SEO)** and slow initial page loads. Next.js fixes this by pre-rendering HTML on the Server.`,
  sections: [
    {
      title: '🌐 Server-Side Rendering (SSR)',
      body: `In standard React (Client-Side Rendering), the server sends a blank HTML file and forces the user's phone to do the heavy lifting of downloading JS and drawing the page. <br><br>In **Next.js**, the Vercel server draws the fully-finished HTML with data already injected and sends THAT to the browser. It loads instantly, and Google Search Bots can read it perfectly.`,
      code: { lang: 'jsx', src: `// Next.js Server Component (Default in App Router)
// This code actually runs on the BACKEND before being sent to the browser!

export default async function BlogFeed() {
  // Await data directly in the component without useEffect!
  const res = await fetch('https://api.com/posts');
  const posts = await res.json();

  // The final HTML is sent perfectly mapped.
  return (
    <ul>
      {posts.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  );
}` }
    }
  ],
  realLife: `Client Side React is like going to a restaurant, and the waiter drops raw ingredients (JS code) on your table and says "cook it yourself". It takes a while. Server Side Next.js is the chef cooking the meal perfectly in the kitchen, and handing you a beautiful, finished plate (HTML) that you can eat instantly.`,
  youtube: [
    { title: 'Client Side vs Server Side Rendering', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is standard Client-Side React terrible for Search Engine Optimization (SEO)?', options: ['React bans Google', 'It initially sends a blank HTML file with no content. Search bots often index the blank page before the JavaScript has time to fetch the data and draw the UI.', 'It uses too many colors', 'Google hates Facebook'], answer: 1 },
    { q: 'What is Server-Side Rendering (SSR) in Next.js?', options: ['A way to hack servers', 'The process of the Server executing the React code and delivering a fully populated, ready-to-display HTML file to the browser', 'Rendering the page twice', 'Running a PHP server'], answer: 1 },
    { q: 'What is a massive benefit to Server Components in the Next.js App Router?', options: ['You can use onClick handlers easily', 'You can make async components and await database/API calls directly inside the component body without needing useEffect or useState', 'They work offline natively', 'They replace CSS'], answer: 1 },
    { q: 'When would you absolutely CHOOSE to stick with Vite/React over Next.js?', options: ['For an e-commerce store', 'For a blog', 'For a heavily interactive authenticated internal tool/dashboard where SEO does not matter at all', 'For a marketing landing page'], answer: 2 },
    { q: 'Why is the initial page load speed generally faster with Next.js SSR?', options: ['It compresses images more', 'The user\'s browser doesn\'t have to wait to download huge JS bundles to draw the first frame; the HTML arrives pre-drawn by the server', 'It uses WebAssembly', 'It skips CSS loading'], answer: 1 }
  ]
};

// ════════════ PHASE 8: Next.js & Authentication ════════════

LESSONS['8-0'] = {
  title: 'File-based Routing in Next.js',
  emoji: '📁',
  tags: ['Nextjs', 'Routing', 'AppRouter'],
  intro: `In standard React, you meticulously configure Routes using components. In **Next.js**, the file system *is* the router. Next.js 13+ introduced the powerful **App Router** to modernize this.`,
  sections: [
    {
      title: '📂 Folders are Routes',
      body: `If you create a folder named ` + '`' + `app/about` + '`' + ` and inside it create a file named ` + '`' + `page.jsx` + '`' + `, Next.js automatically creates the ` + '`' + `hostname/about` + '`' + ` route for you without a single line of config!`,
      code: { lang: 'bash', src: `// The File Structure determines the URL!
app/
 ├── page.jsx        <-- localhost:3000/
 ├── about/
 │    └── page.jsx   <-- localhost:3000/about
 └── dashboard/
      └── page.jsx   <-- localhost:3000/dashboard` }
    }
  ],
  realLife: `React Router is like giving a taxi driver step-by-step turn directions to a house. Next.js File Routing is like just typing the address into the GPS. The house (page.jsx) already exists physically on the street (the folder), so the system naturally knows exactly how to get there.`,
  youtube: [
    { title: 'Next.js App Router Routing Explained', channel: 'ByteGrad', url: 'https://youtu.be/KjY94sZ4xIQ' }
  ],
  exam: [
    { q: 'How does Next.js determine the URL structure of your application by default?', options: ['It uses an app-routing.json file', 'It reads your Next Router component', 'It uses the physical physical folders and files inside the "app" or "pages" directory (File-based routing)', 'You configure it in the database'], answer: 2 },
    { q: 'Inside the App Router, what specific filename must be used to actually display UI for a given route?', options: ['index.js', 'page.jsx or page.tsx', 'route.js', 'view.jsx'], answer: 1 },
    { q: 'Is React-Router-DOM required to build a standard Next.js application?', options: ['Yes', 'No, Next.js has its own robust routing system built entirely in', 'Only for dynamic routes', 'Only on Vercel'], answer: 1 },
    { q: 'What happens if you create a folder `app/contact` but forget to put a `page.jsx` file inside it?', options: ['It renders a blank page', 'The route `/contact` will throw a 404 error because there is no page file to serve as the UI', 'It redirects to home', 'It crashes the server'], answer: 1 },
    { q: 'What is the modern directory introduced in Next.js 13 that replaces the old "pages" directory?', options: ['src/', 'app/', 'routes/', 'public/'], answer: 1 }
  ]
};

LESSONS['8-1'] = {
  title: 'Dynamic Routes ([id].js)',
  emoji: '🧩',
  tags: ['Routing', 'Dynamic', 'Nextjs'],
  intro: `You can't create 1,000 physical folders for 1,000 different blog posts. **Dynamic Routes** allow you to create one template that automatically handles variable URL segments.`,
  sections: [
    {
      title: '📦 Square Bracket Syntax',
      body: `By wrapping a folder name in square brackets, like ` + '`' + `app/users/[id]/page.jsx` + '`' + `, Next.js treats ` + '`' + `[id]` + '`' + ` as a variable. It will catch ` + '`' + `/users/1` + '`' + `, ` + '`' + `/users/99` + '`' + `, and pass that number as a prop to your page!`,
      code: { lang: 'jsx', src: `// File Path: app/users/[id]/page.jsx

// The URL parameters are automatically passed as the 'params' prop!
export default function UserProfile({ params }) {
  
  // If the user visits localhost:3000/users/42
  // params.id will be "42"

  return (
    <div>
      <h1>Viewing Profile for User ID: {params.id}</h1>
      {/* Then you can fetch data for user 42 from your database! */}
    </div>
  );
}` }
    }
  ],
  realLife: `A Dynamic Route is a blank Nametag ("Hello, my name is [name]"). Instead of printing 1,000 uniquely customized nametags physically, you print one blank template design. When the visitor (the URL request) arrives, you just write their specific name into the empty slot.`,
  youtube: [
    { title: 'Next.js Dynamic Routing', channel: 'PedroTech', url: 'https://youtu.be/zpqJ2wNUXrI' }
  ],
  exam: [
    { q: 'How do you create a dynamic route segment in Next.js?', options: ['Using asterisks (*id)', 'Wrapping the folder name in square brackets (e.g., [id] )', 'Using a dollar sign ($id)', 'Writing Javascript in the folder name'], answer: 1 },
    { q: 'In the component `app/blog/[slug]/page.jsx`, if the user visits `/blog/my-first-post`, what object contains the value "my-first-post"?', options: ['The URL object', 'The NextRequest object', 'The `params` prop passed automatically to the component (params.slug)', 'The global window object'], answer: 2 },
    { q: 'Can you have multiple dynamic segments in a row (e.g., `app/store/[category]/[productId]`)?', options: ['Yes', 'No, only one dynamic variable is allowed per route', 'Only in the pages directory', 'Only if they are numbers'], answer: 0 },
    { q: 'What syntax creates a "Catch-All" route that matches `/docs/a`, `/docs/a/b`, and EVERYTHING deeper?', options: ['[[docs]]', '[...slug]', '[:path]', '[*]'], answer: 1 },
    { q: 'Why are dynamic routes critical for e-commerce apps?', options: ['They make CSS load faster', 'Because millions of products share the exact same UI layout, they just need to fetch different data based on the ID variable in the URL', 'They allow credit card processing', 'They hide the URL'], answer: 1 }
  ]
};

LESSONS['8-2'] = {
  title: 'Nested Routes & Layouts',
  emoji: '🪆',
  tags: ['Layouts', 'UI', 'AppRouter'],
  intro: `In the App Router, a ` + '`' + `layout.jsx` + '`' + ` file allows you to wrap all child routes in a persistent UI shell (like a Dashboard Sidebar) that never unmounts or re-renders across page navigations.`,
  sections: [
    {
      title: '🖼️ The Persistent Shell',
      body: `A layout file receives a ` + '`' + `children` + '`' + ` prop. Next.js automatically injects the active child ` + '`' + `page.jsx` + '`' + ` perfectly into that hole!`,
      code: { lang: 'jsx', src: `// File Path: app/dashboard/layout.jsx
// This layout wraps EVERY page inside the /dashboard folder!

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* This sidebar stays persistent; it NEVER re-renders! */}
      <Sidebar /> 
      
      {/* The specific page content (like /dashboard/settings) renders here! */}
      <main className="flex-1 p-4">
        {children}
      </main>
    </div>
  );
}` }
    }
  ],
  realLife: `A layout file is like the theater stage setup (the backdrop, the lighting). The "children" prop is the specific actors (the Page content) coming out to perform. When scene 2 starts, the actors change, but the beautiful stage backdrop stays firmly in place without needing to be rebuilt.`,
  youtube: [
    { title: 'Next.js 13 Layouts Explained', channel: 'Codevolution', url: 'https://youtu.be/kXQOAi0YMYE' }
  ],
  exam: [
    { q: 'What is the primary purpose of a `layout.jsx` file in Next.js?', options: ['To define CSS grid systems', 'To wrap child pages in a persistent UI (like a navbar) that does not unnecessarily re-render on navigation', 'To fetch database secrets', 'To handle errors'], answer: 1 },
    { q: 'What specific React prop does every Layout component natively receive and must render?', options: ['{ components }', '{ props }', '{ children }', '{ outlet }'], answer: 2 },
    { q: 'What is the absolute root layout (`app/layout.jsx`) responsible for rendering?', options: ['Just the Navbar', 'The global <html> and <body> tags that wrap the entire application', 'The database connection', 'The 404 page'], answer: 1 },
    { q: 'What is the difference between `layout.jsx` and `template.jsx` in Next.js?', options: ['There is no difference', 'Layouts preserve their state and do NOT re-render on load; Templates create a brand new instance (resetting state and triggering enter animations) on every navigation', 'Templates are for emails', 'Layouts are deprecated'], answer: 1 },
    { q: 'Can you nest a Layout inside another Layout? (e.g. Root > Dashboard > Settings)', options: ['Yes, Next.js handles infinite nesting trees gracefully', 'No', 'Only twice', 'Only in CSR'], answer: 0 }
  ]
};

LESSONS['8-3'] = {
  title: 'SEO with next/head & Metadata',
  emoji: '🔍',
  tags: ['SEO', 'Metadata', 'Tags'],
  intro: `Search Engine Optimization (SEO) dictates if Google can find your site. Next.js provides a built-in **Metadata API** (which replaced the old ` + '`' + `next/head` + '`' + ` component) to dynamically inject title and description tags into the HTML ` + '`' + `<head>` + '`' + `.`,
  sections: [
    {
      title: '🏷️ The Metadata Object',
      body: `You simply export a constant named ` + '`' + `metadata` + '`' + ` from any ` + '`' + `page.jsx` + '`' + ` or ` + '`' + `layout.jsx` + '`' + `. Next.js automatically writes it to the server-rendered HTML.`,
      code: { lang: 'jsx', src: `// app/about/page.jsx

// 1. Static Metadata
export const metadata = {
  title: 'About Our Company',
  description: 'We build amazing React robots.',
  openGraph: {
    images: ['/company-robot.jpg'], // The image that shows on Twitter/Discord links!
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}

// 2. Dynamic Metadata (for dynamic routes like blogs!)
export async function generateMetadata({ params }) {
  const post = await fetchPost(params.id);
  return {
    title: post.title, // "How to code Next.js!"
  };
}` }
    }
  ],
  realLife: `Metadata is the title printed on the SPINE of a book. Search engine bots (like librarians) don't have time to read every single page of your book. They just scan the spine (the metadata title and description) to know exactly what shelf to place your website on.`,
  youtube: [
    { title: 'Next.js SEO and Metadata Tutorial', channel: 'Hitesh Choudhary', url: 'https://youtu.be/7UFE32O1bH8' }
  ],
  exam: [
    { q: 'In the modern Next.js App Router, how do you add SEO title and description tags to a page?', options: ['By using standard document.title', 'By importing the old <Head> component', 'By simply exporting a `metadata` object or `generateMetadata` function from the page file', 'By editing index.html manually'], answer: 2 },
    { q: 'Why is Next.js Metadata wildly better for SEO compared to standard React (Client-Side Rendering)?', options: ['It uses better fonts', 'Because Next.js renders the HTML on the server. When the Google Bot arrives, the HTML <body> and <head> tags are already fully populated and instantly readable.', 'It pays Google money', 'It uses WebAssembly'], answer: 1 },
    { q: 'What does the "openGraph" property inside the metadata object handle?', options: ['Drawing pie charts', 'Configuring how the link looks (title, description, image) when shared on social media platforms like Discord, Twitter, or iMessage', 'Opening a Graph database', 'Analytics tracking'], answer: 1 },
    { q: 'If you want the SEO Title to dynamically change based on a fetched Blog Post (e.g. /blog/[id]), what function must you export?', options: ['getDynamicSEO()', 'generateMetadata({ params })', 'fetchTags()', 'export const dynamic = true'], answer: 1 },
    { q: 'Can metadata be exported from client components (files marked with "use client")?', options: ['Yes', 'No, Metadata can only be exported from Server Components', 'Only if using Redux', 'Sometimes'], answer: 1 }
  ]
};

LESSONS['8-4'] = {
  title: 'Server-Side Rendering (SSR)',
  emoji: '🖥️',
  tags: ['SSR', 'Server', 'Dynamic'],
  intro: `Server-Side Rendering (**SSR**) means the server runs your React code, fetches the database data, builds the final HTML string, and sends it to the browser *exactly at the moment the user requests it*.`,
  sections: [
    {
      title: '🔄 Real-Time Server Data',
      body: `In the Next.js App Router, all components are **Server Components by default**. This means you can literally use ` + '`' + `async/await` + '`' + ` directly inside your component body without writing useEffects!`,
      code: { lang: 'jsx', src: `// app/dashboard/page.jsx
// This component runs entirely on the Vercel Node backend!

export default async function Dashboard() {
  
  // Notice: No useEffect or useState needed! 
  // We await a database/API call directly on the backend!
  // { cache: 'no-store' } forces SSR (refetches fresh on EVERY single user visit)
  const res = await fetch('https://api.com/finances', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div>
      <h1>Live Stock Prices</h1>
      <p>Apple: \${data.aapl}</p> {/* Sent to browser as pure HTML */}
    </div>
  );
}` }
    }
  ],
  realLife: `SSR is like ordering a sandwich at a Deli. You (the Browser) ask for a Turkey sandwich. The chef (the Server) builds it fresh exactly when you ask, specifically for you, right on the spot, and hands you the finished sandwich (HTML). It guarantees you always have the freshest ingredients.`,
  youtube: [
    { title: 'Server Components Explained', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What does Server-Side Rendering (SSR) fundamentally mean?', options: ['The user\'s browser executes all the JS and draws the screen', 'The server prepares the fully rendered HTML webpage on every single request and sends it to the browser', 'The UI is cached globally', 'The database is hosted on the browser'], answer: 1 },
    { q: 'By default, what type of components are Native in the Next.js 13+ App Router?', options: ['Client Components', 'Class Components', 'React Server Components (RSC)', 'Redux Components'], answer: 2 },
    { q: 'What massive advantage do beautiful Server Components give you regarding data fetching?', options: ['They make CSS load faster', 'You can make the component physically `async` and `await` database calls directly inside the body without using useEffect/useState', 'They bypass CORS natively', 'Both B and C are correct'], answer: 3 },
    { q: 'What fetch caching option strictly forces Next.js to use SSR (Re-running the fetch on every exact request rather than caching it)?', options: ['cache: "force-cache"', 'cache: "no-store"', 'cache: "reload"', 'next: { revalidate: 60 }'], answer: 1 },
    { q: 'Why might SSR be slower than SSG (Static Site Generation)?', options: ['It has to compile CSS', 'Because the user has to wait for the server to run the JS, fetch the database, and build the HTML exactly at the moment they click the link, introducing latency', 'It uses older JavaScript', 'It breaks images'], answer: 1 }
  ]
};

LESSONS['8-5'] = {
  title: 'Static Site Generation (SSG)',
  emoji: '🪨',
  tags: ['SSG', 'Static', 'Speed'],
  intro: `Static Site Generation (**SSG**) means the server runs your React code and builds the final HTML files **ONCE** during the build stage (when you run ` + '`' + `npm run build` + '`' + `). Those rigid HTML files are then sent to users infinitely.`,
  sections: [
    {
      title: '⚡ Lightning Fast Caching',
      body: `Because the HTML is already fully generated and sitting on a CDN Edge server, when a user requests the page, it is delivered instantly. The downside? If the database data changes, the website won't update until you rebuild the whole app.`,
      code: { lang: 'jsx', src: `// app/blog/page.jsx (Will automatically SSG by default!)

export default async function Blog() {
  
  // By default, or explicitly using { cache: 'force-cache' }
  // Next.js will run this fetch ONCE during npm run build.
  // It hard-codes the resulting text directly into the final HTML!
  const res = await fetch('https://api.com/posts', { cache: 'force-cache' });
  const posts = await res.json();

  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}` }
    }
  ],
  realLife: `SSG is drawing a painting of a fruit bowl. You paint the fruit once (Build Time). You can scan that painting and hand out 1,000,000 copies to users instantly. It's incredibly fast! But, if someone adds a banana to the physical fruit bowl later, the copies don't magically update; you have to paint a whole new painting (rebuild the app).`,
  youtube: [
    { title: 'SSG vs SSR in Next.js', channel: 'Academind', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'When exactly does Static Site Generation (SSG) render the HTML pages?', options: ['When the user clicks the link', 'When the server crashes', 'ONCE during the Build phase (when running npm run build) before deployment', 'Every 5 seconds'], answer: 2 },
    { q: 'What is the primary immense benefit of SSG?', options: ['It uses no CSS', 'Because the HTML is completely pre-built and cached on global CDNs, page load speeds are almost instant, and hosting costs are incredibly cheap', 'It automatically updates database data', 'It replaces React Router'], answer: 1 },
    { q: 'For which type of application is SSG the absolute perfect choice?', options: ['A highly dynamic User Dashboard', 'A Live Real-time Chat App', 'A Marketing Landing Page, Documentation, or a Blog where data rarely changes', 'A Stock Market Ticker'], answer: 2 },
    { q: 'In Next.js App Router, how do you force a fetch call to aggressively cache the result forever at build time?', options: ['{ cache: "no-store" }', '{ cache: "force-cache" }', '{ next: revalidate }', '{ mode: "static" }'], answer: 1 },
    { q: 'What is the primary flaw of pure SSG?', options: ['It is too slow', 'If underlying data changes in the database, the site will show stale, outdated HTML until the developer manually triggers a completely new build of the codebase', 'It is bad for SEO', 'It does not support images'], answer: 1 }
  ]
};

LESSONS['8-6'] = {
  title: 'Incremental Static Regeneration (ISR)',
  emoji: '⏳',
  tags: ['ISR', 'Revalidate', 'Hybrid'],
  intro: `What if you want the blistering speed of SSG, but you also want your blog data to update when you add a new post *without* manually rebuilding the entire website? Next.js invented **Incremental Static Regeneration (ISR)**.`,
  sections: [
    {
      title: '⏲️ The Revalidation Timer',
      body: `ISR allows you to update static pages silently in the background. You set a timer (e.g., 60 seconds). For 60 seconds, everyone gets the cached blazing-fast SSG HTML. When the timer expires, the *very next* visitor triggers the server to rebuild the HTML in the background!`,
      code: { lang: 'jsx', src: `// app/products/page.jsx (E-commerce Store)

export default async function Store() {
  
  // The magic of ISR: { next: { revalidate: 3600 } }
  // This caches the page as Static HTML, but tells Next.js:
  // "Every 3600 seconds (1 hour), if a user visits, fetch fresh database data 
  // and rebuild the HTML silently in the background!"
  const res = await fetch('https://api.com/products', { 
    next: { revalidate: 3600 } 
  });
  
  const products = await res.json();

  return (
    <div>
      {/* Prices stay perfectly fast, but update hourly! */}
      {products.map(p => <p>{p.name}: \${p.price}</p>)}
    </div>
  );
}` }
    }
  ],
  realLife: `ISR is a bakery display window. You bake a cake and put it in the window (SSG). It's instantly ready for users. But you set a timer for 1 Hour. When the hour is up, you don't instantly throw the cake away; the next customer gets the old cake, but that triggers you to bake a FRESH cake in the back room and swap it into the window. Now everyone gets the fresh cake!`,
  youtube: [
    { title: 'Next.js ISR Explained', channel: 'Lee Robinson', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What primary problem of Static Site Generation (SSG) does ISR solve?', options: ['Slow load times', 'The fact that SSG forces you to completely rebuild the whole website to show new database data. ISR updates static pages dynamically in the background.', 'CSS styling', 'Image sizes'], answer: 1 },
    { q: 'How do you configure typical time-based ISR on a fetch request in the App Router?', options: ['timeout: 60', 'cache: "isr"', '{ next: { revalidate: 60 } }', 'setInterval(60)'], answer: 2 },
    { q: 'If the revalidate timer is set to 60 seconds, what exactly happens at second 61?', options: ['The page crashes', 'The server deletes the page', 'Nothing immediately. But the FIRST user who requests the page at second 61 receives the stale static page, which simultaneously triggers the Server to rebuild the page in the background for all FUTURE visitors', 'The page live-reloads via websockets'], answer: 2 },
    { q: 'What is On-Demand Revalidation (Webhook ISR)?', options: ['A premium Next.js feature', 'Instead of a timer, you hit a specific Next.js API route (usually triggered by a CMS publish button) which tells Next.js to instantly clear the cache and rebuild that specific page immediately', 'Revalidating CSS', 'Using React Query instead'], answer: 1 },
    { q: 'Is ISR a great fit for a highly real-time stock trading graph?', options: ['Yes', 'No, because the data must be accurate every millisecond, meaning pure Client Side Rendering (CSR) or pure SSR with Websockets is required', 'Only on Vercel', 'Only for Bitcoin'], answer: 1 }
  ]
};

LESSONS['8-7'] = {
  title: 'Image Optimization with next/image',
  emoji: '🖼️',
  tags: ['Images', 'Optimization', 'Performance'],
  intro: `Images make up 70% of the weight of a modern webpage. Using a standard HTML <code>&lt;img&gt;</code> tag is notoriously bad for performance. Next.js natively provides the **<code>&lt;Image /&gt;</code>** component.`,
  sections: [
    {
      title: '🪄 Automatic Upgrades',
      body: `The ` + '`' + `<Image />` + '`' + ` component automatically converts images to modern WebP formats, resizes them correctly for mobile devices so you don't send a 4K desktop image to a tiny iPhone, and perfectly lazy-loads them!`,
      code: { lang: 'jsx', src: `import Image from 'next/image';
import profilePic from '@/public/me.jpg'; // Local Import

function Avatar() {
  return (
    <div>
      {/* 1. Local Image (Automatically detects width/height) */}
      <Image 
        src={profilePic}
        alt="Author Profile"
        placeholder="blur" // Cool blur-up loading effect!
      />

      {/* 2. External Server Image (Must provide width/height to stop Cumulative Layout Shift) */}
      <Image 
        src="https://external-cdn.com/product.jpg"
        alt="Sneakers"
        width={500}
        height={500}
      />
    </div>
  );
}` }
    }
  ],
  realLife: `Standard <img> is like mailing a 10-foot solid granite statue via overnight shipping to someone who just wanted a photograph of it; it's slow, heavy, and ruins the layout. <Image /> is a smart fulfillment center. It looks at the user's phone, prints a perfectly sized 5x7 photograph (WebP), and mails it instantly without disrupting anything.`,
  youtube: [
    { title: 'Next.js Image Component Tutorial', channel: 'Covalence', url: 'https://youtu.be/_wEreA3ktyQ' }
  ],
  exam: [
    { q: 'What is the absolute main benefit of using the Next.js <Image /> component over a raw HTML <img> tag?', options: ['It adds CSS borders', 'It automatically prevents Cumulative Layout Shift, lazy loads the image, and optimizes the size/format (like converting to WebP) based on the user\'s screen', 'It bypasses copyright', 'It is required by React'], answer: 1 },
    { q: 'What is "Lazy Loading" regarding images?', options: ['Images that render blurry', 'The browser intentionally delays downloading images that are far down the screen off-camera until the user actually scrolls near them, saving massive amounts of bandwidth', 'Loading images from the cloud', 'CSS background images'], answer: 1 },
    { q: 'To stop the webpage text from violently jumping around as an image finally pops in (Cumulative Layout Shift), what MUST you provide to the <Image /> component for external URLs?', options: ['A border', 'A classname', 'Explicit width and height props', 'A blur radius'], answer: 2 },
    { q: 'If you try to load an external image (e.g. from an S3 bucket) into a Next.js Image component, what error will you hit if you don\'t configure it?', options: ['A 404', 'A Next.js error demanding you add that specific hostname to your `next.config.js` `images.remotePatterns` security array whitelist', 'A CORS warning', 'A TypeScript error'], answer: 1 },
    { q: 'What does the `fill` prop do on the <Image /> component?', options: ['Fills the image with a solid color', 'Forces the image to expand and exactly match the size of its parent HTML DOM element wrapper (great for responsive heroes)', 'Makes the image 4K', 'Paints the margins'], answer: 1 }
  ]
};

LESSONS['8-8'] = {
  title: 'API Routes in Next.js',
  emoji: '🔌',
  tags: ['API', 'Backend', 'Endpoints'],
  intro: `Next.js is "Full Stack". You do not strictly need a separate Express or Python backend to build a React application anymore. Next.js lets you build highly secure, server-side **API Routes** directly in the ` + '`' + `app/api` + '`' + ` folder!`,
  sections: [
    {
      title: '📡 Building Backend Endpoints',
      body: `By creating a file named ` + '`' + `route.js` + '`' + ` inside the ` + '`' + `app/api` + '`' + ` folder, you write Node.js code that runs safely on the Server. You can connect to MongoDB, use secret API keys, and return JSON directly to your frontend!`,
      code: { lang: 'jsx', src: `// 📁 File path: app/api/users/route.js
// This creates a secure backend endpoint at localhost:3000/api/users!

import { NextResponse } from 'next/server';

// Handle HTTP GET Requests
export async function GET(request) {
  // Connect to Database...
  const users = [{ name: "Alice" }, { name: "Bob" }];
  
  return NextResponse.json(users);
}

// Handle HTTP POST Requests
export async function POST(request) {
  const body = await request.json(); // Read incoming data
  
  // Save body.name to Database securely using SECRET_KEYS...
  
  return NextResponse.json({ message: "Created!" }, { status: 201 });
}` }
    }
  ],
  realLife: `Building a separate frontend (React) and backend (Express) is like owning two completely separate houses that have to mail letters to communicate. Next.js API Routes is a gorgeous two-story mansion. The Frontend lives upstairs, the Secure Backend Database Logic lives downstairs, and they easily talk to each other without leaving the house.`,
  youtube: [
    { title: 'Next.js 13 API Routes', channel: 'ByteGrad', url: 'https://youtu.be/O6P86uwfdR0' }
  ],
  exam: [
    { q: 'What does creating a `route.js` file inside the `app/api` folder accomplish in Next.js?', options: ['It breaks the frontend', 'It creates a secure, backend Node.js API endpoint capable of interfacing with databases or hitting third-party APIs using secret keys safely', 'It builds a UI dashboard', 'It fetches CSS'], answer: 1 },
    { q: 'In the App Router API system, how do you specify which HTTP methods the endpoint should respond to?', options: ['By creating folders named /GET or /POST', 'By explicitly naming the exported functions: `export async function GET()`, `export async function POST()`', 'Using a giant switch statement', 'By matching strings'], answer: 1 },
    { q: 'Why is it highly secure to hit a third-party paid API (like OpenAI) from a Next.js API Route instead of directly from your frontend React component?', options: ['It uses less internet', 'Code in `route.js` runs entirely on the Backend. This means your private API keys are completely hidden from the user\'s browser inspection tools', 'React bans API calls', 'It encrypts the HTML'], answer: 1 },
    { q: 'What helper object is used to return a formatted JSON response with a status code in Next.js App Router API routes?', options: ['res.send()', 'return JSON()', 'NextResponse.json()', 'res.end()'], answer: 2 },
    { q: 'How would you read the JSON body sent from the frontend inside a POST API route?', options: ['request.body.data', 'await request.json()', 'request.html()', 'request.params'], answer: 1 }
  ]
};

LESSONS['8-9'] = {
  title: 'Middleware',
  emoji: '🛡️',
  tags: ['Middleware', 'Edge', 'Security'],
  intro: `What if you want to aggressively check if a user is logged in *before* the server even begins trying to build the dashboard page? You intercept the request using **Next.js Middleware**.`,
  sections: [
    {
      title: '🔪 Intercepting the Request at the Edge',
      body: `Middleware runs on incredibly fast "Edge" servers worldwide before a request is fully completed. It's the perfect place to redirect unauthorized users, rewrite URLs, or set cookies seamlessly.`,
      code: { lang: 'typescript', src: `// 📁 Location: MUST be strictly named middleware.ts in the root of your project!

import { NextResponse } from 'next/server';

export function middleware(request) {
  // 1. Check if they have an Auth Token cookie
  const token = request.cookies.get('auth_token');

  // 2. If they are trying to access the VIP /dashboard WITHOUT a token...
  if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
    // 3. Immediately kick them back to login page safely!
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Optimization: Only run this middleware on specific routes (Don't run on image loads!)
export const config = {
  matcher: ['/dashboard/:path*'],
};` }
    }
  ],
  realLife: `Middleware is the TSA Security checkpoint at the Airport. Before you are even allowed to walk completely into the main terminal (the Next.js App components), the TSA (Middleware) intercepts you, checks your ID (Cookie), and if you don't have a ticket, they turn you around instantly (NextResponse.redirect).`,
  youtube: [
    { title: 'Next.js Middleware Explained', channel: 'Hitesh Choudhary', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Where does Next.js Middleware execute?', options: ['In the user\'s browser', 'In the React Component', 'On the "Edge" (fast, globally distributed servers) before the request even reaches your main Next.js backend logic', 'In the local database'], answer: 2 },
    { q: 'What is the absolute most common real-world use case for Next.js Middleware?', options: ['Compressing images', 'Checking session cookies to see if a user is authenticated, and instantly redirecting them to a /login page if they attempt to access protected routes', 'Styling CSS', 'Generating PDFs'], answer: 1 },
    { q: 'Where must the `middleware.js` or `middleware.ts` file physically be located in your project directory?', options: ['Inside /app/api/', 'Inside /components/', 'At the absolute root of the project (or inside the /src dir if used), sitting right alongside next.config.js', 'Inside node_modules'], answer: 2 },
    { q: 'What does the `matcher` config array do at the bottom of the middleware file?', options: ['It connects to Tinder API', 'It specifies exactly which URL paths the middleware should trigger on (e.g., only run on `/dashboard`), saving vast performance by ignoring `/public` image loads', 'It matches regex patterns on strings', 'It deletes cookies'], answer: 1 },
    { q: 'What function forcefully reroutes the user to another page from inside the middleware?', options: ['NextResponse.json()', 'NextResponse.rewrite()', 'NextResponse.redirect(new URL(...))', 'router.push()'], answer: 2 }
  ]
};

LESSONS['8-10'] = {
  title: 'NextAuth.js Setup',
  emoji: '🔐',
  tags: ['Auth', 'Security', 'Library'],
  intro: `Building your own secure Session management, Cookies, OAuth, and CSRF protection from scratch is a massive security risk. **Auth.js (formerly NextAuth.js)** is the gold-standard, bulletproof authentication library for Next.js.`,
  sections: [
    {
      title: '⚙️ The Configuration Core',
      body: `Auth.js acts as an all-in-one API route handler. You just supply it with your "Providers" (how you want people to log in) and it automatically builds the Login APIs, Session Management, and Callback routes instantly.`,
      code: { lang: 'bash', src: `npm install next-auth` },
      code2: { lang: 'jsx', src: `// 📁 app/api/auth/[...nextauth]/route.js 
// (Notice the Catch-All route setup! NextAuth owns this entire API sub-folder automatically)

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  // Define how users can log in!
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // You can add Google, Email, Discord, or custom Username/Password here!
  ],
  // Secret used to forcefully encrypt the JWT Cookies!
  secret: process.env.NEXTAUTH_SECRET,
};

// Export the massive handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };` }
    }
  ],
  realLife: `NextAuth is like hiring a highly trained security firm (like ADT) instead of trying to build your own locks, alarms, and safes out of scrap metal in your garage. You just pay the firm (install the package), point at the doors (configure providers), and they handle 100% of the intense vault mathematics correctly.`,
  youtube: [
    { title: 'NextAuth V5 Crash Course', channel: 'CodeWithAntonio', url: 'https://youtu.be/1YJVqxO3yE8' }
  ],
  exam: [
    { q: 'Why is it highly recommended to use Auth.js (NextAuth) rather than building Next.js authentication manually?', options: ['It uses less code lines', 'It radically secures your application against catastrophic vulnerabilities by handling JWT encryption, CSRF tokens, secure httpOnly cookies, and OAuth handshakes flawlessly out of the box', 'It is enforced by law', 'It styles the login forms'], answer: 1 },
    { q: 'What incredibly unique folder/file structure MUST you create to initialize the NextAuth API logic?', options: ['app/auth.js', 'app/api/auth/[...nextauth]/route.js (A catch-all dynamic backend route)', 'app/login/page.js', 'api/session/config.ts'], answer: 1 },
    { q: 'In NextAuth terminology, what is a "Provider"?', options: ['A React Context', 'A specific mechanism by which a user can authenticate, such as Google, GitHub, Credentials (Username/Password), or Email Magic Links', 'An internet service provider', 'A database host'], answer: 1 },
    { q: 'What is the absolute critical purpose of the `process.env.NEXTAUTH_SECRET` environment variable?', options: ['It hides your CSS', 'It is a massive cryptographically secure random string used to powerfully encrypt and sign the JSON Web Tokens (JWT) so hackers cannot forge fake session cookies', 'It logs you into Vercel', 'It prevents CSS injection'], answer: 1 },
    { q: 'What happens if you hit the API route `/api/auth/signin` in a NextAuth project without doing anything else?', options: ['A 404 error', 'NextAuth automatically generates and serves a default styled Login Page UI containing buttons for all your configured providers!', 'It crashes', 'It deletes the database'], answer: 1 }
  ]
};

LESSONS['8-11'] = {
  title: 'OAuth (Google, GitHub Login)',
  emoji: '🤝',
  tags: ['OAuth', 'Social', 'Login'],
  intro: `Nobody likes typing strong passwords. **OAuth 2.0** is an industry-standard protocol that allows a user to grant your website limited access to their information (like Email and Profile Pic) stored on Google or GitHub, allowing 1-Click Logins.`,
  sections: [
    {
      title: '🔑 The Secret Handshake',
      body: `You register your application as an "OAuth App" on Google Cloud. Google gives you a **Client ID** and a **Client Secret**. You plug those into NextAuth, and the magical complex redirect handshake is handled for you organically.`,
      code: { lang: 'jsx', src: `// NextAuth Configuration Addition
import GoogleProvider from "next-auth/providers/google";

providers: [
  GoogleProvider({
    // NEVER hardcode these! Put them securely in .env.local
    clientId: process.env.GOOGLE_CLIENT_ID, 
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  })
]

// Inside any Frontend React Component:
import { signIn } from "next-auth/react";

function LoginButton() {
  // Triggers the Google popup box instantly!
  return <button onClick={() => signIn('google')}>Sign in with Google</button>;
}` }
    }
  ],
  realLife: `OAuth is like using your Driver's License to enter a bar. The bouncer (Your App) doesn't know who you are, but he trusts the Government (Google) who issued the ID. The bouncer just looks at the ID, confirms Google verified you, and lets you inside without asking you to fill out a 10-page background check.`,
  youtube: [
    { title: 'Google Login with Next.js', channel: 'Dave Gray', url: 'https://youtu.be/w2h54xz6Ndw' }
  ],
  exam: [
    { q: 'What does OAuth stand for generally in the industry?', options: ['Open Authentication/Authorization', 'Object Auth', 'Only Authorization', 'Over Authorize'], answer: 0 },
    { q: 'Why is OAuth (like Google Sign In) wildly preferred by modern users over standard Username/Password systems?', options: ['It looks futuristic', 'It reduces immense friction; users don\'t have to remember a new password, confirm an email address, or type their name manually, massively increasing conversion rates', 'It bypasses the database', 'It uses Web 3.0'], answer: 1 },
    { q: 'What two heavily protected "keys" must you obtain from the Provider (like Google Cloud Console) to establish a trusted OAuth connection?', options: ['Username and Password', 'Client ID and Client Secret', 'URL and JWT', 'Database and Key'], answer: 1 },
    { q: 'Where is the absolutely safest place in your codebase to store your Google "Client Secret"?', options: ['Hardcoded purely in a React component', 'Inside the package.json', 'Strictly inside an environment variable file (like `.env.local`) that is entirely ignored by GitHub source control', 'In the Redux store'], answer: 2 },
    { q: 'When using NextAuth, what function do you call in the frontend UI to initiate the Google OAuth flow?', options: ['startGoogle()', 'auth()', 'signIn("google")', 'window.login()'], answer: 2 }
  ]
};

LESSONS['8-12'] = {
  title: 'JWT Sessions',
  emoji: '🎫',
  tags: ['JWT', 'Cookies', 'Sessions'],
  intro: `Once a user proves they are who they say they are, how does the website remember them 5 minutes later without asking for a password on every click? Enter the **JSON Web Token (JWT)**.`,
  sections: [
    {
      title: '🍪 The Immutable Cookie',
      body: `A JWT is a highly encrypted string containing the user's data (like UserID: 42). NextAuth stuffs this cryptographically-sealed JWT inside a secure browser ` + '`' + `Cookie` + '`' + `. Every time the user asks the server for a private page, their browser automatically hands the Cookie to the server!`,
      code: { lang: 'jsx', src: `// 1. Reading the active Session softly on the CLIENT side
'use client';
import { useSession } from "next-auth/react";

export function Navbar() {
  // Automatically parses the JWT Cookie for you!
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <p>Please Log In!</p>;

  // JWT Payload decrypted successfully
  return <p>Welcome, {session.user.name}</p>;
}

// 2. Reading securely on the BACKEND (Server Components)
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function VIPDashboard() {
  // Highly secure Server-side verification of the token
  const session = await getServerSession(authOptions);
  if (!session) return <h1>Access Denied. Kick out!</h1>;
  return <h1>Secure Bank Vault Data</h1>;
}` }
    }
  ],
  realLife: `A JWT session is an Amusement Park Wristband. You wait in line and show your ID once (Login). They slap a heavily secured, unforgeable wristband on your arm (JWT Cookie). For the rest of the day, you can skip the ID line and just flash the wristband to get on the Rollercoaster (VIP Route).`,
  youtube: [
    { title: 'JWT Explained in 5 Minutes', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What does JWT stand for?', options: ['Java Web Technology', 'JSON Web Token', 'JavaScript Window Tracker', 'Just Write Text'], answer: 1 },
    { q: 'How does the Client (Browser) normally deliver the JWT safely to the Next.js API Server on subsequent requests?', options: ['Through the URL parameters', 'Inside a secure HTTP-Only Cookie that the browser attaches automatically to all outgoing requests', 'By typing it in a prompt', 'By saving it strictly in Redux'], answer: 1 },
    { q: 'If a hacker tries to modify the data payload inside their stored JWT Cookie (e.g., changing role:"user" to role:"admin"), what happens?', options: ['They become Admin', 'Nothing', 'The Server detects the tampering immediately because the Cryptographic Signature string attached to the JWT will completely fail validation against the secret key', 'The backend formats the hard drive'], answer: 2 },
    { q: 'What NextAuth frontend React hook is used inside a `use client` component to instantly grab the current user status?', options: ['useAuth()', 'useJWT()', 'useSession()', 'useCookie()'], answer: 2 },
    { q: 'To secure a Server Component (like a `/dashboard/page.jsx` file) so it natively blocks unauthenticated access without exposing endpoints, what async function do you call?', options: ['await login()', 'await getServerSession(authOptions)', 'await fetch("/login")', 'checkAuth()'], answer: 1 }
  ]
};

LESSONS['8-13'] = {
  title: 'Role-based Access',
  emoji: '👑',
  tags: ['RBAC', 'Roles', 'Admin'],
  intro: `Authentication confirms **WHO** a user is. Authorization confirms **WHAT** they are allowed to do. Role-Based Access Control (RBAC) ensures standard users cannot access the Admin Panel.`,
  sections: [
    {
      title: '🚷 Bouncing Unauthorized Traffic',
      body: `You modify the NextAuth configuration's **Callbacks** to inject the user's ` + '`' + `role` + '`' + ` (fetched from your Database) directly into the JWT token. Then, you simply verify that role on protected components!`,
      code: { lang: 'jsx', src: `// NextAuth Configuration - The Callbacks
callbacks: {
  // 1. When creating the Token, inject the role!
  async jwt({ token, user }) {
    if (user) {
      token.role = user.role; // e.g., "admin" or "user"
    }
    return token;
  },
  // 2. Pass it to the active Session object!
  async session({ session, token }) {
    if (session?.user) {
      session.user.role = token.role;
    }
    return session;
  }
}

// Any Server Component UI...
export default async function AdminPanel() {
  const session = await getServerSession(authOptions);

  // Aggressive Authorization Check
  if (session?.user?.role !== "ADMIN") {
    return <h1>403 FORBIDDEN - Only Admins can view this!</h1>;
  }

  return <div>Welcome to the Mainframe, Commander.</div>;
}` }
    }
  ],
  realLife: `Authentication is proving you are an employee holding a badge. Authorization (RBAC) is swiping that badge on a specific door. Your badge (JWT) says "Janitor Level". It opens the supply closet (User Routes) perfectly. But if you swipe it on the "CEO Office" door (Admin Routes), it aggressively flashes red and drops an error (403 Forbidden).`,
  youtube: [
    { title: 'NextAuth Roles & Authorization', channel: 'PedroTech', url: 'https://youtu.be/O6P86uwfdR0' }
  ],
  exam: [
    { q: 'What is the absolute difference between Authentication and Authorization?', options: ['They are exactly the same concept', 'Authentication verifies WHO you are (Identity). Authorization verifies WHAT you are allowed to specifically access or do (Permissions).', 'Authentication uses CSS, Authorization uses JS', 'Authentication is for hackers'], answer: 1 },
    { q: 'What does RBAC stand for in security architecture?', options: ['React Base App Code', 'Redux Backend API Config', 'Role-Based Access Control', 'Random Byte Auth Cypher'], answer: 2 },
    { q: 'How do you successfully expose a user\'s custom database property (like their Role) heavily into the NextAuth `useSession()` frontend object?', options: ['By editing the CSS', 'By intercepting and mutating the `jwt` and `session` specific Callbacks inside the NextAuth configuration object to securely append the custom fields', 'By running a giant map function', 'By using standard localStorage'], answer: 1 },
    { q: 'What HTTP Status Code is strictly the industry standard used to indicate "403 Forbidden" (You are logged in, but you lack the Admin privileges to view this)?', options: ['404', '500', '200', '403'], answer: 3 },
    { q: 'If your application must be heavily secured, where is the most critical area to enforce a Role check?', options: ['In the CSS displaying `display: none` on the button', 'In the React Component hiding the HTML', 'Deep inside the Backend API Route directly right before it queries the database, because hackers can easily bypass frontend Component hiding', 'In the browser console'], answer: 2 }
  ]
};

// ════════════ PHASE 9: Backend Development (Express & MongoDB) ════════════

LESSONS['9-0'] = {
  title: 'What is a Backend Server',
  emoji: '🏭',
  tags: ['Backend', 'Server', 'Architecture'],
  intro: `Up until now, your React frontend has lived in the browser (the "Client"). But where does data go when you close Chrome? It goes to a **Backend Server**.`,
  sections: [
    {
      title: '🏢 The Head Office',
      body: `A Backend Server is simply a computer running 24/7 somewhere in the world (like AWS or Vercel). It listens for HTTP requests from your React Frontend, processes complex business logic safely away from hackers, talks to a Database, and sends a response (usually JSON) back to the Frontend.`,
      code: { lang: 'bash', src: `// True Full-Stack Architecture
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│   React UI      │      │  Backend Server │      │   Database      │
│   (Frontend)    │ ───▶ │  (Express.js)   │ ───▶ │   (MongoDB)     │
│  User's Browser │ ◀─── │  Secure Logic   │ ◀─── │  Storage Drive  │
└─────────────────┘      └─────────────────┘      └─────────────────┘
       HTTPS                      JSON                     Data` }
    }
  ],
  realLife: `The Frontend (React) is the beautiful Dining Room of a restaurant where customers look at the menus. But the customers are not allowed to cook their own food. The Backend Server is the highly secure Kitchen. The waiters (HTTP Requests) take orders to the kitchen, the Chef (Server) gathers ingredients from the pantry (Database), and the waiter brings the cooked meal (JSON) back to the table.`,
  youtube: [
    { title: 'Frontend vs Backend Explained', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the primary role of a Backend Server?', options: ['To format CSS animations', 'To securely process business logic, perform database operations, and serve data to the frontend UI', 'To render HTML directly into the user’s screen', 'To compress images locally'], answer: 1 },
    { q: 'Why shouldn’t the Frontend (React) talk to the Database directly?', options: ['React is too slow', 'To connect to a DB, you need a secret password. If React connects directly, that password must be downloaded to the user’s browser, meaning hackers can steal it instantly by hitting F12', 'The Database does not speak English', 'Databases hate React'], answer: 1 },
    { q: 'What format of data does a modern REST backend server typically send back to a React frontend?', options: ['XML', 'PDFs', 'JSON (JavaScript Object Notation)', 'Plain Text'], answer: 2 },
    { q: 'Which of these is a popular Backend language/runtime?', options: ['HTML', 'Node.js', 'CSS', 'Sass'], answer: 1 },
    { q: 'If your React App is the "Client", what is your Backend?', options: ['The Customer', 'The Server', 'The Node', 'The Peer'], answer: 1 }
  ]
};

LESSONS['9-1'] = {
  title: 'Node.js Basics',
  emoji: '🟢',
  tags: ['Node', 'JavaScript', 'Runtime'],
  intro: `Historically, JavaScript was physically trapped inside web browsers (like Chrome or Firefox). You couldn't run it on your Windows desktop. **Node.js** changed everything.`,
  sections: [
    {
      title: '🏃‍♂️ The V8 Engine Unleashed',
      body: `Node.js took the Chrome V8 JavaScript Engine and extracted it. It allows you to run pure JavaScript directly on your computer's operating system, giving JS the power to read local computer files, open network ports, and act as a web server!`,
      code: { lang: 'javascript', src: `// Read a file from your actual Windows/Mac hard drive using Node.js!
const fs = require('fs');

fs.readFile('passwords.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Prints to the terminal window, NOT the browser!
});` }
    }
  ],
  realLife: `Imagine JavaScript as a brilliant Goldfish (Code) that could only survive inside a specific fishbowl (The Browser Browser). Node.js is a robotic scuba suit. It took the goldfish out of the bowl and allowed it to walk around on land to interact with the real world (the Operating System).`,
  youtube: [
    { title: 'Node.js in 100 Seconds', channel: 'Fireship', url: 'https://youtu.be/ENrzD9HAZK4' }
  ],
  exam: [
    { q: 'What exactly is Node.js?', options: ['A frontend framework like React', 'A JavaScript runtime built on Chrome\'s V8 engine that executes JS code outside of a web browser', 'A relational database', 'A styling library'], answer: 1 },
    { q: 'Because Node.js runs natively on the computer OS, what unique capability does it have that browser JS lacks for security reasons?', options: ['It can change button colors', 'It can directly read, write, and delete files on the computer\'s hard drive natively', 'It can run `alert()` prompts', 'It can use the DOM `document.getElementById`'], answer: 1 },
    { q: 'What command do you type in the terminal/command prompt to execute a file named `server.js` using Node?', options: ['npm run server.js', 'execute server.js', 'node server.js', 'react start server'], answer: 2 },
    { q: 'Can you use standard `window` or `document` objects inside a Node.js script?', options: ['Yes', 'No, because those are Browser APIs. Node.js has no GUI or HTML browser attached to it.', 'Only on Macs', 'Only if you require them'], answer: 1 },
    { q: 'What manages third-party community packages (like Express or React) for Node.js?', options: ['NPM (Node Package Manager)', 'GitHub', 'Vercel', 'Webpack'], answer: 0 }
  ]
};

LESSONS['9-2'] = {
  title: 'Express.js Setup',
  emoji: '🚂',
  tags: ['Express', 'Setup', 'Routing'],
  intro: `Writing a raw Node.js web server from scratch is highly complicated. **Express.js** is a fast, unopinionated web framework for Node.js that makes spinning up a backend API incredibly simple.`,
  sections: [
    {
      title: '🎧 Listening for Requests',
      body: `Express simply listens on a specific Network Port (like 5000). When a frontend application sends a request to that port, Express runs a function to reply!`,
      code: { lang: 'bash', src: `npm init -y
npm install express` },
      code2: { lang: 'javascript', src: `// server.js
const express = require('express');
const app = express();

// A generic "Route"
app.get('/', (req, res) => {
  res.send('Hello from the Backend Server!');
});

// Start the server on Port 5000
app.listen(5000, () => {
  console.log('Server is alive and listening on http://localhost:5000');
});` }
    }
  ],
  realLife: `Node.js provides the raw electrical wires and metal to build a radio antenna. Express.js is a pre-built walkie-talkie. You just turn the dial to channel "5000", put it on your kitchen counter, and whenever anyone asks you a question on channel 5000, you just speak back into the walkie-talkie to answer them.`,
  youtube: [
    { title: 'Express.js Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/L72fhGm1tfE' }
  ],
  exam: [
    { q: 'What specifically is Express.js?', options: ['A highly popular JavaScript Frontend Library', 'A minimal and flexible Node.js web application framework used heavily to build backend API servers', 'A SQL Database', 'A CSS preprocessor'], answer: 1 },
    { q: 'In Express, what does `app.listen(5000)` accomplish?', options: ['It plays music on the speakers', 'It tells the Node server to physically start up and begin constantly listening for incoming network traffic on computer port 5000', 'It limits the database to 5000 users', 'It delays the server for 5 seconds'], answer: 1 },
    { q: 'Inside an Express route like `app.get("/", (req, res) => {})`, what do `req` and `res` stand for?', options: ['Require and Respond', 'Request (incoming data from the user) and Response (tools to send data back)', 'Registry and Reset', 'React and Redux'], answer: 1 },
    { q: 'If your React App is running on `http://localhost:3000` and your Express server is on `http://localhost:5000`, what happens if you type `localhost:5000` into your Chrome address bar?', options: ['React crashes', 'Your browser directly hits the Express backend, and it will trigger the app.get("/") route function!', 'You get a virus', 'The ports merge'], answer: 1 },
    { q: 'What CLI tool constantly restarts your Express server automatically every time you save a file so you don\'t have to kill and restart Node manually?', options: ['create-react-app', 'nodemon', 'webpack', 'babel'], answer: 1 }
  ]
};

LESSONS['9-3'] = {
  title: 'REST API Design',
  emoji: '📐',
  tags: ['REST', 'API', 'Design'],
  intro: `An API (Application Programming Interface) is how systems talk to each other. **REST** (Representational State Transfer) is the industry standard architectural style for designing clean, predictable web APIs.`,
  sections: [
    {
      title: '🛣️ The Naming Convention',
      body: `A REST HTTP API relies purely on "Nouns" in the URL, not "Verbs". You do not name a route ` + '`' + `/getUsers` + '`' + ` or ` + '`' + `/deleteUser` + '`' + `. You just hit ` + '`' + `/users` + '`' + ` and let the HTTP Method dictact the action!`,
      code: { lang: 'markdown', src: `BAD (Not RESTful):
GET  /getAllUsers
POST /createNewUser
POST /deleteSpecificUser

GOOD (REST API Standard):
GET    /api/users       (Fetch all users)
POST   /api/users       (Create a new user)
GET    /api/users/123   (Fetch specifically user 123)
PUT    /api/users/123   (Update specifically user 123)
DELETE /api/users/123   (Delete specifically user 123)` }
    }
  ],
  realLife: `A messy API is yelling random commands at a librarian: "Give_Me_Book!", "Take_Away_Book_2!", "Update_Book_Title_3!". A REST API is highly standardized. You walk up to the "Books Table" (The URL /api/books). Then you simply hold up a universal sign that says "GET", "POST", "PUT", or "DELETE". It keeps everything organized purely by category.`,
  youtube: [
    { title: 'What is a REST API?', channel: 'Fireship', url: 'https://youtu.be/-MTSQjw5DrM' }
  ],
  exam: [
    { q: 'What does REST fundamentally establish in Web Development?', options: ['How to style CSS files', 'An organized, industry-standard architectural pattern for designing completely uniform, predictable URL structures for Backend APIs', 'A new programming language', 'How to rest your computer'], answer: 1 },
    { q: 'In REST API design, URLs should primarily consist of:', options: ['Verbs (e.g., /getUser)', 'Nouns representing Resources (e.g., /users)', 'Capital Letters Only', 'File extensions (e.g., /user.html)'], answer: 1 },
    { q: 'According to strictly standard REST principles, what endpoint URL should completely handle creating a new article?', options: ['POST /articles/makeNew', 'PUT /addArticle', 'POST /articles', 'GET /articles/create'], answer: 2 },
    { q: 'When designing a REST API, what data format should you overwhelmingly return to the frontend?', options: ['HTML strings', 'Raw SQL text', 'JSON Objects/Arrays', 'CSV files'], answer: 2 },
    { q: 'If your frontend wants to fetch a specific individual user (ID: 42), what should the REST URL look like?', options: ['GET /user?id=42', 'POST /users/42', 'GET /users/42', 'GET /42/users'], answer: 2 }
  ]
};

LESSONS['9-4'] = {
  title: 'HTTP Methods (GET, POST, PUT, DELETE)',
  emoji: '🔀',
  tags: ['HTTP', 'Methods', 'CRUD'],
  intro: `When a frontend application contacts a backend server, it must attach an **HTTP Method** to clearly declare what action it wants the server to perform on the database.`,
  sections: [
    {
      title: '🛠️ The CRUD Equivalents',
      body: `HTTP methods directly map to standard Database operations (CRUD: Create, Read, Update, Delete).`,
      code: { lang: 'javascript', src: `const express = require('express');
const app = express();
app.use(express.json()); // CRITICAL: Allows Express to read POST bodies!

// READ data (Browser default)
app.get('/api/users', (req, res) => res.json({ msg: "Read all users!" }));

// CREATE new data (Triggered by a React Form Submit)
app.post('/api/users', (req, res) => {
  const newUser = req.body; // The data React sent us!
  res.json({ msg: "User created in DB!" });
});

// UPDATE specific data
app.put('/api/users/:id', (req, res) => res.json({ msg: "User updated!" }));

// DELETE specific data
app.delete('/api/users/:id', (req, res) => res.json({ msg: "User deleted!" }));` }
    }
  ],
  realLife: `A URL is a filing cabinet drawer labeled "Employees" (/api/users). The HTTP method is what your hands do. GET is opening the drawer to read files. POST is dropping a brand new file into the drawer. PUT is erasing a file to rewrite it. DELETE is running the file through a shredder.`,
  youtube: [
    { title: 'HTTP Methods Tutorial', channel: 'Web Dev Simplified', url: 'https://youtu.be/iYM2zFP3Zn0' }
  ],
  exam: [
    { q: 'If a React frontend submits a standard Registration form, what HTTP method should it use?', options: ['GET', 'POST', 'PUT', 'DELETE'], answer: 1 },
    { q: 'What HTTP method is automatically sent by the Chrome Browser when a user strictly types a URL into their address bar and hits Enter?', options: ['GET', 'POST', 'PATCH', 'A randomly chosen method'], answer: 0 },
    { q: 'If a user clicks an "Edit Profile" button to change their username in the database, what is the most appropriate HTTP method?', options: ['GET', 'POST', 'PUT/PATCH', 'DELETE'], answer: 2 },
    { q: 'Inside a Node/Express backend, in order to successfully access the JSON data that a frontend POST request sent to you, what object do you inspect?', options: ['req.url', 'res.json', 'req.body', 'req.headers'], answer: 2 },
    { q: 'What line of critical Middleware MUST you add to Express to enable `req.body` to actually parse incoming JSON (otherwise it will be undefined)?', options: ['app.use(express.json())', 'app.readJSON()', 'app.set("JSON", true)', 'app.body()'], answer: 0 }
  ]
};

LESSONS['9-5'] = {
  title: 'Route Parameters & Query Strings',
  emoji: '🔍',
  tags: ['Params', 'Query', 'Variables'],
  intro: `How do you tell the backend exactly *which* user you want to find, or exactly *what* text you want to search for? You inject variables into the URL using **Route Parameters** or **Query Strings**.`,
  sections: [
    {
      title: '🎯 Two Ways to Target Data',
      body: `Parameters (` + '`' + `req.params` + '`' + `) are built structurally into the URL path. Queries (` + '`' + `req.query` + '`' + `) are arbitrarily attached to the end of the URL using a Question Mark.`,
      code: { lang: 'javascript', src: `// 1. ROUTE PARAMETERS (Great for ID targeting)
// URL: localhost:5000/api/users/837
app.get('/api/users/:targetId', (req, res) => {
  const idValue = req.params.targetId; // "837"
  res.json({ target: idValue });
});

// 2. QUERY STRINGS (Great for searching / filtering / sorting)
// URL: localhost:5000/api/movies?genre=action&sort=desc
app.get('/api/movies', (req, res) => {
  const genre = req.query.genre; // "action"
  const sort = req.query.sort;   // "desc"
  res.json({ searchCategory: genre });
});` }
    }
  ],
  realLife: `A Route Parameter (/book/7) is like looking for a house on a street: "I am going exactly to House #7". A Query String (/houses?color=blue&hasPool=true) is like an arbitrary filter placed over an entire neighborhood: "Show me any houses that happen to be blue and have a pool."`,
  youtube: [
    { title: 'Req Params vs Req Query', channel: 'Codedamn', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'In Express, how do you define a Dynamic Route Parameter in the URL path?', options: ['Using a dollar sign (/users/$id)', 'Using a colon prefix (/users/:id)', 'Using a question mark (/users?id)', 'In the body'], answer: 1 },
    { q: 'If a React app fetches `http://backend/api/products/laptop`, and the Express route is `/api/products/:category`, what is `req.params.category`?', options: ['null', 'undefined', '"laptop"', 'An error'], answer: 2 },
    { q: 'What character strictly physically separates the base URL from the start of the Query Strings?', options: ['A slash (/)', 'An ampersand (&)', 'A question mark (?)', 'An equals sign (=)'], answer: 2 },
    { q: 'If a user visits `http://backend/search?q=pizza&sort=price`, how do you extract the word "pizza" in Express?', options: ['req.body.q', 'req.params.q', 'req.query.q', 'res.query.pizza'], answer: 2 },
    { q: 'When building an API, which approach is considered best-practice for purely searching/filtering a large list of Database items?', options: ['Posting a JSON body', 'Route Parameters', 'Query Strings (e.g., ?color=red)', 'Headers'], answer: 2 }
  ]
};

LESSONS['9-6'] = {
  title: 'MongoDB Atlas Setup',
  emoji: '🍃',
  tags: ['MongoDB', 'Database', 'Cloud'],
  intro: `Backend servers don't store data permanently. If the server crashes, all variables in RAM are erased. You need a permanent Database. **MongoDB** is the most popular NoSQL document database, and **Atlas** is their free cloud host.`,
  sections: [
    {
      title: '☁️ The Cloud Database',
      body: `Instead of installing heavy database software on your physical laptop, you just create a free cluster on MongoDB Atlas. They give you a highly secure "Connection String" (URI) that your Node.js Backend uses to dial into the database globally.`,
      code: { lang: 'bash', src: `// A standard MongoDB connection string looks like this:
mongodb+srv://admin_dave:SuperSecretPass@cluster0.abcde.mongodb.net/MyCoolApp

// WARNING: THIS IS HIGHLY SENSITIVE.
// NEVER hardcode this string in your git codebase. 
// It MUST go in a .env file securely!` }
    }
  ],
  realLife: `Running a local database is like building a giant safe wall in your bedroom to store your money; it takes up space, and if your house burns down, the money is gone. MongoDB Atlas is like putting your money in a massive, ultra-secure Swiss Bank. You just use a special ID Card (The Connection String) over the internet to securely deposit and withdraw cash from anywhere in the world.`,
  youtube: [
    { title: 'MongoDB Atlas Tutorial', channel: 'Net Ninja', url: 'https://youtu.be/pWbMrx5rVBE' }
  ],
  exam: [
    { q: 'What specific type of database is MongoDB classified as?', options: ['A Relational SQL Database', 'A NoSQL Document Database (Data is stored effectively as JSON-like BSON objects)', 'A flat-file CSV database', 'A graph database'], answer: 1 },
    { q: 'What is MongoDB Atlas?', options: ['A textbook', 'A local software program', 'A fully managed Cloud Database as a Service provided by MongoDB themselves, allowing you to host your database securely on AWS/Google Cloud servers', 'A library for Express'], answer: 2 },
    { q: 'How does your local Node.js server physically connect to your cloud MongoDB Atlas Cluster?', options: ['Via Bluetooth', 'By directly importing HTML files', 'By passing a highly secure, unique `mongodb+srv://` Connection String URI (which contains your DB username and password) to the Mongoose connection function', 'Using CSS grids'], answer: 2 },
    { q: 'Where is the ONLY acceptable place to securely store your MongoDB Connection String URI inside your codebase?', options: ['Inside a React Component', 'Inside `server.js` as a raw string', 'Inside a `.env` environment variable file that is strictly hidden from GitHub repositories', 'Inside package.json'], answer: 2 },
    { q: 'In MongoDB Atlas, if you get a "Connection Refused / Bad IP" error, what step did you likely forget?', options: ['Installing React', 'Whitelisting your computer\'s IP address (or using 0.0.0.0/0 to allow global access) in the Atlas Network Access Security Panel', 'Paying for the database', 'Writing CSS'], answer: 1 }
  ]
};

LESSONS['9-7'] = {
  title: 'Mongoose ODM',
  emoji: '🦦',
  tags: ['Mongoose', 'ODM', 'MongoDB'],
  intro: `MongoDB's native language is a bit clunky to write via raw Node.js. **Mongoose** is an elegant ODM (Object Data Modeling) library that wraps MongoDB, making it incredibly easy to connect and manipulate data using standard JavaScript functions.`,
  sections: [
    {
      title: '🔌 The Elegant Bridge',
      body: `Mongoose handles the messy network connection to Atlas seamlessly and provides brilliant features like Data Validation, preventing bad data from entering your database.`,
      code: { lang: 'bash', src: `npm install mongoose dotenv` },
      code2: { lang: 'javascript', src: `// server/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 1. Connect to Atlas using your hidden .env string!
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Super-Connected Successfully!');
  } catch (error) {
    console.log('Crash!', error);
    process.exit(1); 
  }
};

module.exports = connectDB;` }
    }
  ],
  realLife: `MongoDB is a massive, complex warehouse full of robotic forklift arms. You *could* painstakingly learn the robotic machine code to control the forklifts directly. OR, you could use Mongoose. Mongoose is the beautiful office computer system in the lobby. You just click a nice user interface saying "Store Box", and Mongoose automatically translates that into perfect forklift movements for you.`,
  youtube: [
    { title: 'Connecting MongoDB with Mongoose', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is Mongoose primarily exactly?', options: ['A SQL database engine', 'An elegant Object Data Modeling (ODM) library for Node.js that makes interacting with MongoDB drastically simpler and more reliable', 'An animal that eats snakes', 'A frontend state manager'], answer: 1 },
    { q: 'Why is Mongoose overwhelmingly preferred over the default `mongodb` native Node driver?', options: ['It is faster', 'It provides strict Schemas (enforcing what shape your data takes) and built-in Validation, whereas native MongoDB lets you recklessly save any garbage into the database', 'It uses CSS', 'It prevents IP bans'], answer: 1 },
    { q: 'What Mongoose function initializes the physical network connection to your database?', options: ['mongoose.start()', 'mongoose.listen()', 'mongoose.connect(process.env.MONGO_URI)', 'mongoose.open()'], answer: 2 },
    { q: 'Because network connections are slow and rely on the internet, what JavaScript keyword MUST you use when connecting to MongoDB or saving data?', options: ['alert()', 'setInterval', 'async / await (Since database operations are inherently Promisified operations that take time)', 'parseFloat'], answer: 2 },
    { q: 'If your `.env` contains `MONGO_URI=mongodb+srv...`, what extremely popular NPM package is required to make `process.env.MONGO_URI` readable in your `db.js` file?', options: ['react', 'dotenv', 'cors', 'nodemon'], answer: 1 }
  ]
};

LESSONS['9-8'] = {
  title: 'Schema & Model Design',
  emoji: '📐',
  tags: ['Schema', 'Model', 'Database'],
  intro: `MongoDB is famous for being "Schema-less", meaning it will happily save <code>{ name: "Bob" }</code> next to <code>{ favoriteColor: "Red", age: 10 }</code>. This is chaos. Mongoose **Schemas** act as strict blueprints enforcing data rules.`,
  sections: [
    {
      title: '🏛️ The Blueprint (Schema) & Factory (Model)',
      body: `A Schema defines the rules (e.g., Email is required, age must be a Number). A Model takes that Schema and gives you a magical object capable of hitting the database!`,
      code: { lang: 'javascript', src: `const mongoose = require('mongoose');

// 1. Define the Strict Blueprint Rules (Schema)
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,    // Reject save if missing!
    minlength: 3       // Reject save if too short!
  },
  email: {
    type: String,
    required: true,
    unique: true       // Reject save if email already exists in DB!
  },
  isAdmin: {
    type: Boolean,
    default: false     // Fallback if not provided
  }
}, { timestamps: true }); // Magically adds createdAt and updatedAt dates!

// 2. Compile and Export the functional Factory (Model)
module.exports = mongoose.model('User', userSchema);` }
    }
  ],
  realLife: `A Schema is the strict mold/blueprint for a beautifully shaped Lego brick. It guarantees every brick will be exactly 4 pegs wide. The Model is the actual factory machine that uses the mold. You feed liquid plastic (req.body data) into the Model machine, and it confidently stamps out perfectly validated Legos into the database container!`,
  youtube: [
    { title: 'Designing Mongoose Schemas', channel: 'Web Dev Simplified', url: 'https://youtu.be/OfL1iQ-K8_A' }
  ],
  exam: [
    { q: 'In Mongoose, what is the strict purpose of a Schema?', options: ['To create HTML tables', 'To strictly define the structural blueprint and stringent validation rules for all documents that will be saved in a specific Database Collection', 'To connect to the database', 'To hash passwords'], answer: 1 },
    { q: 'What does adding the `{ timestamps: true }` option to the bottom of a Mongoose Schema accomplish?', options: ['It pauses the server', 'It automatically injects highly accurate `createdAt` and `updatedAt` Date variables into every single document that gets saved, forever', 'It limits logins based on time', 'It generates a timeline chart'], answer: 1 },
    { q: 'If you set a property completely like `email: { type: String, unique: true }`, what awesome feature does Mongoose handle automatically for you?', options: ['It checks standard formatting', 'It throws a massive database error blocking the save if a user attempts to register with an email that is already located anywhere else in that database collection', 'It makes the email capital letters', 'It emails them a welcome message'], answer: 1 },
    { q: 'What is the crucial difference between a Schema and a Model?', options: ['They are identical words', 'The Schema is just a dumb JavaScript object holding blueprint rules. The Model compiles the Schema into a powerful function wrapper capable of executing `.find()` or `.create()` queries to the actual database.', 'Models use SQL, Schemas use NoSQL', 'Schemas are strings'], answer: 1 },
    { q: 'Which of the following is NOT a valid native Mongoose Schema Type?', options: ['String', 'Number', 'ReactComponent', 'Boolean'], answer: 2 }
  ]
};

LESSONS['9-9'] = {
  title: 'CRUD Operations (Controllers)',
  emoji: '🕹️',
  tags: ['CRUD', 'Controllers', 'Query'],
  intro: `Once you have a Mongoose Model, you can perform **CRUD** (Create, Read, Update, Delete) operations effortlessly. Instead of stuffing this database logic inside ` + '`' + `server.js` + '`' + `, we organize it into separate **Controller** folders for clean architecture.`,
  sections: [
    {
      title: '🔨 Commanding the Database',
      body: `Mongoose models provide incredible built-in query functions like ` + '`' + `.find()` + '`' + `, ` + '`' + `.create()` + '`' + `, and ` + '`' + `.findByIdAndDelete()` + '`' + `.`,
      code: { lang: 'javascript', src: `// controllers/userController.js
const User = require('../models/User'); // Import the Model

// READ ALL (GET)
const getAllUsers = async (req, res) => {
  const users = await User.find({}); // Fetch everything!
  res.json(users);
};

// CREATE (POST)
const createNewUser = async (req, res) => {
  // Uses the strict Schema to validate req.body before saving to Atlas!
  const savedUser = await User.create(req.body); 
  res.status(201).json(savedUser);
};

// DELETE (DELETE)
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id); // Destroys target!
  res.json({ message: "Terminated!" });
};` }
    }
  ],
  realLife: `If the Mongoose Model is the magic TV Remote Control, the CRUD operations are the specific buttons you press. "Create" is the Record button. "Read" is the Play button. "Update" is the Fast-Forward button. "Delete" is the Power Off button. You are just pressing buttons, and the remote handles all the invisible infrared signals to the TV (Database).`,
  youtube: [
    { title: 'MongoDB & Mongoose CRUD', channel: 'Academind', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What Mongoose Model function performs a "Read All" query, fetching exactly every document inside a collection?', options: ['User.getAll()', 'User.find({})', 'User.filter()', 'User.read()'], answer: 1 },
    { q: 'If your frontend passes data via a POST request body, what magical Mongoose function instantly validates it against the Schema and saves it into the Database permanently?', options: ['User.make()', 'User.generate()', 'User.create(req.body)', 'User.insertJSON()'], answer: 2 },
    { q: 'What incredibly robust HTTP Status code should you realistically send back (e.g. `res.status(201).json(...)`) to the frontend when a document is Created successfully?', options: ['200 (OK)', '201 (Created)', '404 (Not Found)', '500 (Server Error)'], answer: 1 },
    { q: 'Why do we typically place CRUD logic into a `/controllers` folder instead of dumping 5,000 lines of code directly into the main `server.js` routing file?', options: ['Node requires it', 'To enforce the incredibly popular MVC (Model-View-Controller) architectural pattern, keeping our routing layout gorgeously clean and abstracted from heavy database logic', 'It saves hard drive space', 'To bypass CORS'], answer: 1 },
    { q: 'What Model function allows you to specifically wipe a document from the database using its unique `_id`?', options: ['User.erase(id)', 'User.removeData(id)', 'User.findByIdAndDelete(req.params.id)', 'User.destroy()'], answer: 2 }
  ]
};

LESSONS['9-10'] = {
  title: 'JWT Authentication',
  emoji: '🎫',
  tags: ['JWT', 'Auth', 'Security'],
  intro: `How does an Express backend know that subsequent HTTP requests are coming from a user who *already logged in* 10 minutes ago, rather than a hacker? You issue a **JSON Web Token (JWT)**.`,
  sections: [
    {
      title: '🛡️ The Forgery-Proof Wristband',
      body: `When a user logs in via a POST request, the backend creates a cryptographically signed JWT string containing their ID, and hands it back. The frontend stores it (usually in LocalStorage or a Cookie) and brutally attaches it to the "Authorization" header of every future fetch request.`,
      code: { lang: 'bash', src: `npm install jsonwebtoken` },
      code2: { lang: 'javascript', src: `const jwt = require('jsonwebtoken');

// A function to generate a ticket (JWT) after a valid login
const generateToken = (userId) => {
  // We sign it forcefully using a MASSIVE secret key hidden in .env
  // If a hacker modifies 'expiresIn' or 'userId', the signature fails instantly!
  return jwt.sign(
    { id: userId }, 
    process.env.JWT_SECRET_KEY_NEVER_SHARE, 
    { expiresIn: '30d' }
  );
};

// Login Route example
app.post('/api/login', (req, res) => {
  // ... check password ... if correct:
  const token = generateToken(user._id);
  res.json({ username: user.username, token: token });
});` }
    }
  ],
  realLife: `A JWT is a highly secure concert VIP pass. When you first show your ID at the box office (Login Route with Username/Password), the staff gives you an unforgeable VIP lanyard (The JWT). For the rest of the night, whenever you approach the VIP lounge (Protected Routes), the bouncer doesn't ask for your password; he just scans the lanyard's holographic signature.`,
  youtube: [
    { title: 'JWT Authentication for Node.js', channel: 'Web Dev Simplified', url: 'https://youtu.be/mbsmsiPbO1A' }
  ],
  exam: [
    { q: 'What core massive problem does a JSON Web Token (JWT) completely solve in modern backend development?', options: ['Database styling', 'Because HTTP requests are "Stateless" (the server forgets you instantly after 1 millisecond), JWT securely reminds the server who you are on every single request without constantly re-submitting passwords', 'It speeds up CSS', 'It compresses images'], answer: 1 },
    { q: 'When generating a Token using `jwt.sign()`, what absolutely critical component prevents hackers from easily modifying the JSON payload inside the browser?', options: ['The CSS styling', 'The Cryptographic Secret Key parameter stored heavily in your `.env` file that is required to stamp a valid unforgeable signature payload onto the token', 'The database connection', 'React Native'], answer: 1 },
    { q: 'If an attacker alters the `id: userId` payload inside their JWT token in a desperate attempt to become an Admin user, what happens when they send it to the server?', options: ['They successfully become admin', 'The Express server crashes globally', 'The `jwt.verify()` function catches the tampering immediately and strictly throws an invalid signature error, safely destroying the request', 'Next.js allows it'], answer: 2 },
    { q: 'What is the `expiresIn` option typically used for deeply inside `jwt.sign()`?', options: ['Forcing the server to sleep', 'Setting a hard time limit (e.g., 30 Days) on the VIP pass, forcing inactive users to eventually log back in for massive security benefits', 'Deleting the user account', 'Clearing the database cache'], answer: 1 },
    { q: 'Where does the Frontend React code traditionally need to attach the JWT string before sending a subsequent fetch call to a locked route?', options: ['Inside an HTML image tag', 'In the URL params', 'Rigorously inside the HTTP Headers as an `Authorization: Bearer <token>` string', 'Inside the CSS'], answer: 2 }
  ]
};

LESSONS['9-11'] = {
  title: 'Password Hashing with bcrypt',
  emoji: '🧷',
  tags: ['Security', 'Bcrypt', 'Passwords'],
  intro: `If you save a user's password as raw, plain-text text in your database (e.g. ` + '`' + `"password123"` + '`' + `), and a hacker steals your database, every user's life is ruined. **Salting and Hashing** is legally mandatory.`,
  sections: [
    {
      title: '🔐 Cryptographic Destruction',
      body: `Bcrypt destroys the password and turns it into a mathematical chaotic string (a Hash). It is a one-way function. You cannot turn a hash back into the password.`,
      code: { lang: 'bash', src: `npm install bcryptjs` },
      code2: { lang: 'javascript', src: `const bcrypt = require('bcryptjs');

// 1. BEFORE SAVING TO DATABASE (Registration)
const salt = await bcrypt.genSalt(10); // Generates massive random characters
const hashedPassword = await bcrypt.hash("password123", salt);
// Saves to database as: $2a$10$X8/WwL... (Utterly unreadable)

// 2. CHECKING PASSWORD (Login)
// We take what they typed ("password123"), hash it using the same math,
// and strictly compare if the two hashes match!
const isCorrect = await bcrypt.compare(req.body.password, userDB.password);

if (!isCorrect) res.status(401).json({ msg: "Intruder Alert!" });` }
    }
  ],
  realLife: `Saving a plain text password is like putting your house key in a clear glass box on your front porch. Hashing with Bcrypt is putting your house key into a titanium shredder. The shredder creates thousands of bizarre metal fragments (The Hash). When you try to log in later, you bring a NEW key, drop it in an identical shredder, and if the two piles of metal fragments match under a microscope exactly, the door opens.`,
  youtube: [
    { title: 'Bcrypt Password Hashing', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is saving plain-text passwords (e.g., "myCar123") brutally dangerous and often violating Data Laws?', options: ['It uses too much server RAM', 'If a malicious actor gains access to your database file, they instantly compromise every user’s account and potentially their banking info on other sites where they reused the password', 'MongoDB doesn\'t allow strings', 'Bcrypt is cheaper'], answer: 1 },
    { q: 'What is fundamentally unique about a mathematical "Cryptographic Hash" function compared to "Encryption"?', options: ['It is faster', 'It is strictly a ONE-WAY function. Even you (the developer) cannot computationally reverse a Bcrypt hash back into the original plain text password natively. It is irreversibly mutated.', 'It formats text to uppercase', 'It deletes the database'], answer: 1 },
    { q: 'What exactly is a "Salt" in cryptography?', options: ['A UI framework', 'A massively randomized string of text appended to the password right before the hash begins, aggressively defending against pre-computed Rainbow Table dictionary attacks', 'A database indexing method', 'A Node.js library'], answer: 1 },
    { q: 'When a user logs in, since we cannot easily un-hash the database password, how does `bcrypt.compare()` actually verify them?', options: ['It emails them a code', 'It hashes whatever password the user just typed into the input form using the exact same salt logic, and confidently compares the two destroyed hashes together for identicality', 'It searches Google', 'It bypasses validation'], answer: 1 },
    { q: 'What wildly important HTTP status code is universally designated for "401 Unauthorized" (meaning Bad Credentials/Wrong Password)?', options: ['200', '404', '401', '500'], answer: 2 }
  ]
};

LESSONS['9-12'] = {
  title: 'Protected Routes Middleware',
  emoji: '🚪',
  tags: ['Middleware', 'Auth', 'Express'],
  intro: `You have a JWT. How do you actually use it to lock the door to your ` + '`' + `/api/dashboard` + '`' + ` route? You build a massive iron gate in Express using **Middleware**.`,
  sections: [
    {
      title: '👮 The Bouncer Function',
      body: `Middleware is any function that physically intercepts the request *before* it hits your final route. We create an ` + '`' + `authMiddleware` + '`' + ` that strictly checks for the JWT in the headers.`,
      code: { lang: 'javascript', src: `// middleware/auth.js
const jwt = require('jsonwebtoken');

// The Middleware Bouncer Function
const protect = (req, res, next) => {
  // Grab the "Bearer eyJhbGc..." token from the Headers
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      const token = authHeader.split(' ')[1]; // Isolate string
      
      // Crack the token open securely!
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedUser; // Attach ID so routes know WHO called!
      
      next(); // Bouncer says: "You pass! Enter the requested Route."
    } catch (err) {
      res.status(401).json({ msg: "Token manipulated or expired!" });
    }
  } else {
    res.status(401).json({ msg: "No token provided. Get out!" });
  }
};

module.exports = { protect };` },
      code2: { lang: 'javascript', src: `// Inside server.js
const { protect } = require('./middleware/auth');

// We simply wedge the 'protect' bouncer function in the middle!
// No Token? This route NEVER runs. Token valid? It runs safely!
app.post('/api/deleteMyData', protect, (req, res) => {
  res.json({ msg: "Data deleted safely for user: " + req.user.id });
});` }
    }
  ],
  realLife: `The Final Route (/api/deleteMyData) is the VIP Lounge deep inside the club. The ` + '`' + `protect` + '`' + ` middleware is the massive intimidating Bouncer standing at the door. Every request MUST physically pass his inspection criteria (` + '`' + `next()` + '`' + `). If you don't have a lanyard, he intercepts you instantly, sending a 401 error, and the VIP lounge never even knows you existed.`,
  youtube: [
    { title: 'Express Middleware Explained', channel: 'Web Dev Simplified', url: 'https://youtu.be/lY6icfhap2o' }
  ],
  exam: [
    { q: 'In Express, what specifically defines a function as "Middleware"?', options: ['It uses React', 'It physically sits directly in the middle of the HTTP Request pipeline, having vast power to intercept, alter, or brutally reject requests before they trigger the final controller functionality', 'It styles CSS', 'It connects to MongoDB purely'], answer: 1 },
    { q: 'What deeply critical parameter function must a middleware call (e.g., `next()`) if the validation genuinely succeeds?', options: ['res.send()', 'req.proceed()', 'next() - which literally tells Express to forcefully advance the request to the next piece of middleware or the final route controller function', 'return true()'], answer: 2 },
    { q: 'If a JWT is beautifully validated inside the Express auth middleware, what common high-end trick is used to seamlessly inform the final Route exactly WHO the user is?', options: ['Setting a cookie', 'Appending the deciphered user ID object strictly onto the massive `req` parameter (e.g., `req.user = decodedData`), which the final route can then read', 'Broadcasting a websocket', 'Updating CSS state'], answer: 1 },
    { q: 'To apply your `protect` middleware to a specific vital Express route like updating a profile, how do you syntax it?', options: ['app.put("/api/profile", protect, updateProfile)', 'app.use(protect)', 'protect.app.put()', 'app.put(updateProfile, protect)'], answer: 0 },
    { q: 'What happens if the `jwt.verify()` function catches a severely tampered token inside the middleware?', options: ['The server reboots', 'It throws a massive Error down the catch block instantly, allowing you to reject the hacker instantly via a robust `res.status(401)` response without executing the restricted code', 'It ignores it and calls next()', 'It formats the token'], answer: 1 }
  ]
};

LESSONS['9-13'] = {
  title: 'CORS & Environment Variables',
  emoji: '🚧',
  tags: ['CORS', 'Dotenv', 'Security'],
  intro: `When your frontend lives at ` + '`' + `localhost:3000` + '`' + ` and your backend lives at ` + '`' + `localhost:5000` + '`' + `, you will encounter the most infamous error in web development: **The CORS Error**.`,
  sections: [
    {
      title: '🛂 Cross-Origin Resource Sharing',
      body: `By default, web browsers block frontend code from fetching data from a completely different domain for massive security reasons. To allow your React app to talk to your Express app, Express must explicitly grant permission using the ` + '`' + `cors` + '`' + ` package.`,
      code: { lang: 'bash', src: `npm install cors dotenv` },
      code2: { lang: 'javascript', src: `const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Loads your massive hidden .env variables natively!

const app = express();

// The "Allow Everyone In" configuration (Great for Dev)
app.use(cors()); 

// The "Highly Secure" configuration (Great for Production Deployments)
app.use(cors({
  origin: process.env.FRONTEND_DEPLOYMENT_URL, // "https://my-react-app.vercel.app"
  credentials: true // Crucial if sending secure httpOnly Cookies!
}));

app.listen(process.env.PORT || 5000);` }
    }
  ],
  realLife: `CORS is a high-end Customs Border Checkpoint between two countries. Country A (React at Port 3000) tries to ship a package to Country B (Express at Port 5000). The Chrome Browser acts as Border Patrol and aggressively stops the package. Unless Country B (Express) has explicitly registered Country A on their strict 'Approved Import Whitelist' (Through the cors middleware), the browser destroys the package to stop international data smuggling.`,
  youtube: [
    { title: 'CORS in 100 Seconds', channel: 'Fireship', url: 'https://youtu.be/4KHiSt0k2Zg' }
  ],
  exam: [
    { q: 'What does the immensely infamous acronym CORS stand for in Web Development?', options: ['Cross-Origin Resource Sharing', 'Cascading Origin Relay System', 'Computer Operation Reference Server', 'Coded Object Rest System'], answer: 0 },
    { q: 'Who strictly enforces the powerful CORS security blocks?', options: ['The Database', 'The Backend Server', 'The user\'s specific Web Browser (Chrome/Firefox/Safari) aggressively blocks the JS fetch request', 'Vercel Deployments'], answer: 2 },
    { q: 'What is the absolute easiest, industry-standard way to swiftly resolve a brutal CORS error in an Express.js API backend?', options: ['Rewriting the React Code entirely', 'Simply installing the NPM `cors` package and utilizing `app.use(cors())` to inject the correct approval HTTP headers outward globally', 'Upgrading HTTP to HTTPS', 'Using CSS z-index'], answer: 1 },
    { q: 'Why is pushing a file named `.env` containing your MongoDB Passwords to a public GitHub repository a catastrophic, career-ending mistake?', options: ['It breaks Github', 'Scraping bots endlessly scan public GitHub files. If they steal your exposed `.env` strings, they will breach your cloud database instantly, steal user data, or hold your DB for bitcoin ransom in minutes.', 'It makes the app run slow', 'It causes CSS errors'], answer: 1 },
    { q: 'What does the prominent `dotenv` package specifically accomplish within your `server.js` file?', options: ['It downloads files', 'It secretly injects your local `.env` hidden text file variables seamlessly into the native `process.env` global Node object so code runs safely', 'It converts arrays to objects', 'It handles routing requests'], answer: 1 }
  ]
};

LESSONS['9-14'] = {
  title: 'Deploy to Railway/Render',
  emoji: '🚀',
  tags: ['Deployment', 'Railway', 'Render'],
  intro: `Your Next.js Frontend is hosted gorgeously on **Vercel**. But Vercel isn't designed for heavy, long-running Express server backgrounds. You must deploy your Express API to a platform built for servers, like **Render** or **Railway**.`,
  sections: [
    {
      title: '🛫 Liftoff for the Backend',
      body: `Render and Railway link directly to your GitHub repository. Every time you push code to the ` + '`' + `main` + '`' + ` branch, they automatically run ` + '`' + `npm install` + '`' + ` and ` + '`' + `node server.js` + '`' + `, giving you a live global HTTPS URL!`,
      code: { lang: 'markdown', src: `// Deployment Steps Checklist:

1. Hide Secrets: Ensure .env is brutally tracked inside .gitignore
2. Dynamic Port: Ensure server uses: const PORT = process.env.PORT || 5000;
3. Start Command: Ensure package.json has a strict "start" script:
   "scripts": { "start": "node server.js" }
4. Publish: Push entire Express repo code to GitHub.
5. Deploy: Connect Repo on Render.com Web Services.
6. Secrets: Manually paste your MONGO_URI and JWT_SECRET directly into the Render Dashboard's Environment Variables tab!
7. Connect: Copy the live Render API URL and paste it into your Vercel React Next.js Frontend's environment variables!` }
    }
  ],
  realLife: `Deploying locally vs cloud is like acting in a play in your basement (localhost) vs Broadway (Render/Vercel). When acting in your basement, nobody in the world can physically see you. When you deploy, you upload the script (GitHub) to the Broadway stage manager. They provide the server lights, the security (HTTPS), and immediately open the doors so the entire planet can access your API.`,
  youtube: [
    { title: 'Deploy Express to Render', channel: 'Codedamn', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'When deploying a full-scale true MERN/Express application, what is incredibly common regarding hosting?', options: ['Hosting them on one USB drive', 'Splitting them! The Frontend React app is hosted on Vercel/Netlify for incredible static edge speeds, and the Node Express Backend is hosted cleanly on Render/Railway/Heroku.', 'Using only HTML servers', 'Hosting strictly only the database'], answer: 1 },
    { q: 'Why is it an absolute fatal crash error to strictly hardcode `app.listen(5000)` without utilizing `process.env.PORT` on deployment platforms?', options: ['Because 5000 is an unlucky number', 'Because cloud platforms dynamically inject massive random port configurations (like Port 10324) upon deployment via `process.env.PORT`. If you blatantly ignore it, the platform routing will brutally crash.', 'Because it slows down databases', 'React Native requires 3000'], answer: 1 },
    { q: 'Since you completely `git ignored` your `.env` string files, how does the deeply deployed Render server know your secret MongoDB Passwords?', options: ['You email it to them', 'You must manually inject/paste those exact Environment Variables (MONGO_URI) safely inside the specific private UI Dashboard interface on the Render web portal', 'They guess it', 'It runs without a database'], answer: 1 },
    { q: 'Inside `package.json`, what specific critical "script" command does Railway/Render aggressively look for to understand how to historically wake up your Express Server API upon launch?', options: ['"start": "node server.js"', '"build": "react-scripts"', '"css": "sass compile"', '"run": "nodemon dev"'], answer: 0 },
    { q: 'If your Vercel deployed React app brutally fails to successfully hit your newly deployed Render API, what is highly likely the massive issue?', options: ['React Router failed', 'You forgot to update the massive frontend `.env` config variables (like `NEXT_PUBLIC_API_URL`) to strictly point at the live `https://api.render.com` URL instead of `http://localhost:5000`.', 'CSS grid overlaps', 'HTML metadata is incorrect'], answer: 1 }
  ]
};

// ════════════ PHASE 10: Full-Stack Final Project (Part 1) ════════════

LESSONS['10-0'] = {
  title: 'Full-Stack Architecture Planning',
  emoji: '🗺️',
  tags: ['Architecture', 'Planning', 'Full-Stack'],
  intro: `Before writing a single line of code for your Capstone Project, you must design the Architecture. Building without a plan is a guaranteed recipe for spaghetti code and project failure.`,
  sections: [
    {
      title: '🏗️ Choosing Your Stack',
      body: `You must strictly decide between a **Monolith** (Next.js App Router doing Frontend and Backend together) or a **Separated Architecture (MERN)** (Next.js handling the UI, and a dedicated Express.js Server handling the heavy backend lifting). We highly recommend the Separated Architecture for enterprise-grade projects.`,
      code: { lang: 'markdown', src: `The Separated Architecture Flow:
1. User clicks "Buy" on the Next.js Frontend.
2. Next.js fires an Axios HTTP POST request over the internet.
3. The Express Backend receives the request, verifies the JWT Bouncer, and talks to MongoDB.
4. MongoDB confirms inventory and saves the order.
5. Express sends a JSON 201 Success back.
6. Next.js updates the UI to show a "Purchase Complete!" toast.` }
    }
  ],
  realLife: `Architecture Planning is drawing the blueprints before pouring concrete. If you just start nailing wood together randomly (coding blindly), you might build a nice room, but you'll eventually realize you forgot to leave space for the plumbing (the database) or the stairs (routing), forcing you to aggressively tear the whole house down and start over.`,
  youtube: [
    { title: 'Choosing the Right Tech Stack', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the absolute most critical step before starting a massive Full-Stack capstone project?', options: ['Writing CSS', 'Installing React', 'Aggressively planning the Architecture, Database Schemas, and API flow to prevent disastrous structural rewrites later', 'Buying a domain'], answer: 2 },
    { q: 'What defines a "Separated" Backend Architecture (like MERN) compared to a Monolith?', options: ['The code is on two different computers', 'The Frontend (React) and Backend (Express) are two completely isolated applications that strictly communicate over the internet via HTTP JSON, allowing them to scale independently', 'They use the same CSS', 'There is no database'], answer: 1 },
    { q: 'If your project heavily relies on long-running computational background tasks (like processing 4K video), which Architecture is vastly superior?', options: ['Next.js API Routes (Monolith)', 'A Dedicated Express Backend, because Next.js API Routes hosted on Vercel ruthlessly timeout and kill the process after 10-60 seconds', 'React Native', 'Static Site Generation'], answer: 1 },
    { q: 'In a professional Separated Architecture, where does the JWT essentially "live" most of the time?', options: ['In the CSS', 'On the Database', 'Securely stored on the Frontend Browser (in memory or HttpOnly Cookies), and sent continuously to the Backend to prove identity', 'Inside the Git Repo'], answer: 2 },
    { q: 'What is a "Monorepo"?', options: ['A single developer', 'Storing both the entirely separate Frontend Application folder and the Backend Application folder perfectly inside one single parent GitHub Repository for easier management', 'A monochrome UI', 'A type of database'], answer: 1 }
  ]
};

LESSONS['10-1'] = {
  title: 'Project Folder Structure',
  emoji: '📁',
  tags: ['Structure', 'Folders', 'Organization'],
  intro: `A production-ready application requires a highly strict, deeply organized folder structure. If you just dump 50 files into the root ` + '`' + `/src` + '`' + ` folder, your codebase will become a terrifying, unmaintainable nightmare.`,
  sections: [
    {
      title: '🗄️ The Feature-Based Approach',
      body: `Instead of grouping by file type (e.g., all components together, all hooks together), modern enterprise apps use Feature-Based routing (e.g., throwing all Auth components, Auth hooks, and Auth API calls strictly inside an ` + '`' + `/auth` + '`' + ` folder).`,
      code: { lang: 'bash', src: `// A Highly Robust Enterprise Folder Architecture:
/my-final-project
  ├── /client (Next.js)
  │     ├── /src
  │     │     ├── /components   # Generic UI (Buttons, Navbars)
  │     │     ├── /features     # Complex specific UI (Auth, Dashboard)
  │     │     ├── /hooks        # Custom generic hooks
  │     │     └── /services     # Reusable Axios API calls
  │     └── .env.local
  ├── /server (Express)
  │     ├── /src
  │     │     ├── /controllers  # The heavy Route Logic functions
  │     │     ├── /middleware   # Route Protectors (Auth)
  │     │     ├── /models       # Mongoose Schemas
  │     │     └── /routes       # The Endpoint URLs
  │     └── .env
  └── README.md` }
    }
  ],
  realLife: `Folder Structure is a grocery store layout. If a store just dumped thousands of items into a giant pile in the middle of the floor (a chaotic codebase), finding the milk would take hours. A pristine folder structure naturally organizes items into highly predictable aisles (Dairy, Produce, Meats), meaning any new developer can walk in and instantly find exactly what they need.`,
  youtube: [
    { title: 'React Folder Structure Best Practices', channel: 'Web Dev Simplified', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the primary immense benefit of a strict, highly organized folder structure in a large Full-Stack app?', options: ['It uses less hard drive space', 'It makes CSS load faster', 'It prevents chaotic unmaintainable "Spaghetti Code" by making exactly every file highly predictable and easy to locate for any developer on the team', 'It stops hackers'], answer: 2 },
    { q: 'In a modern React architecture, what generally goes into the `/components` folder versus the `/features` folder?', options: ['They are the same', '`/components` holds small, generic, reusable UI (like a standard Button). `/features` holds massive, domain-specific logical pieces (like a deeply complex `LoginForm` attached to API calls)', 'Components are HTML, Features are CSS', 'Features hold Redux'], answer: 1 },
    { q: 'Where do Next.js environment variables strictly go in the filesystem?', options: ['Inside index.js', 'Inside `package.json`', 'Inside the root `.env.local` file that is aggressively .gitignored to hide secrets', 'Inside the database'], answer: 2 },
    { q: 'In an Express backend structure, if the `/routes` folder defines `app.get("/users")`, what folder deeply holds the massive logic function that physically fetches that data from MongoDB?', options: ['/models', '/controllers', '/middleware', '/views'], answer: 1 },
    { q: 'What folder beautifully isolates all your third-party Fetch/Axios API calls so they aren\'t violently scattered across 50 different React components?', options: ['/styles', '/pages', '/services (or /api)', '/hooks'], answer: 2 }
  ]
};

LESSONS['10-2'] = {
  title: 'Frontend (Next.js) Setup',
  emoji: '⚛️',
  tags: ['Next.js', 'Setup', 'Frontend'],
  intro: `It's time to build the face of your capstone project. We will strictly use **Next.js (App Router)** initialized with incredibly modern tooling to guarantee extreme performance.`,
  sections: [
    {
      title: '🖥️ Bootstrapping the UI',
      body: `You initialize the frontend using ` + '`' + `create-next-app` + '`' + `, implement highly generic Global Layouts (Navbars/Footers), and lock down a unified UI styling system.`,
      code: { lang: 'bash', src: `npx create-next-app@latest ./client` },
      code2: { lang: 'jsx', src: `// client/app/layout.jsx
// The ultimate wrapper for your ENTIRE frontend web application!

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* The current specific Page physically renders here inside the children! */}
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}` }
    }
  ],
  realLife: `Setting up Next.js is like pouring the concrete foundation and erecting the steel girders of a massive skyscraper. Once the ` + '`' + `layout.jsx` + '`' + ` (The structural steel) and configuration files are flawlessly dialed in, the actual rooms (The specific Pages) can be built infinitely fast without worrying about the building collapsing.`,
  youtube: [
    { title: 'Next.js App Router Setup Final', channel: 'Codevolution', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the absolute easiest modern standard terminal command to generate a flawless Next.js application?', options: ['npm build react', 'npx create-next-app@latest', 'git clone next', 'npm install next'], answer: 1 },
    { q: 'In Next.js App Router, which specific ultra-critical file perfectly wraps the `<html>` and `<body>` tags around every single page in your entire application?', options: ['index.html', 'app/layout.jsx (Root Layout)', 'app/page.jsx', 'app/global.js'], answer: 1 },
    { q: 'Why is tossing a <Navbar /> directly into the `app/layout.jsx` file profoundly superior to importing it manually into every single page?', options: ['It uses less CSS', 'Because the Layout file structurally persists. The Navbar will never aggressively unmount, blink, or lose state when the user navigates randomly between inner pages.', 'It connects to the database', 'React requires it'], answer: 1 },
    { q: 'What CSS paradigm does `create-next-app` typically highly encourage you to utilize by default for blistering fast styling?', options: ['SASS', 'Tailwind CSS', 'Inline Styles', 'Bootstrap'], answer: 1 },
    { q: 'If you want to create a brand new `/dashboard/settings` route, what exact file must you manually create?', options: ['app/dashboard/settings.html', 'app/dashboard/settings/page.jsx', 'src/views/settings.js', 'app/Settings.jsx'], answer: 1 }
  ]
};

LESSONS['10-3'] = {
  title: 'Backend (Express + MongoDB) Setup',
  emoji: '🚂',
  tags: ['Backend', 'Express', 'API'],
  intro: `Your beautiful pristine frontend is utterly useless if it can't save its data. We will now boot up the **Express.js API Engine** and strictly connect it to a massive **MongoDB Atlas Cloud Cluster**.`,
  sections: [
    {
      title: '🔌 Wiring the Mainframe',
      body: `The Backend setup requires hyper-focus on security (` + '`' + `helmet` + '`' + `, ` + '`' + `cors` + '`' + `), parsing JSON bodies, and successfully aggressively establishing the database connection before letting routes trigger.`,
      code: { lang: 'bash', src: `npm init -y
npm install express mongoose cors dotenv helmet` },
      code2: { lang: 'javascript', src: `// server/src/index.js
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to Atlas instantly!
connectDB(); 

const app = express();

// The Holy Trinity of Middleware
app.use(express.json()); // Allow reading req.body!
app.use(require('cors')()); // Allow Frontend to talk to us!
app.use(require('helmet')()); // Obscure aggressive HTTP vulnerabilities!

// Route Mounts
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.listen(process.env.PORT || 5000, () => {
  console.log('API Engine Online.');
});` }
    }
  ],
  realLife: `Setting up the Express Backend is building the Bank Vault. You install the physical vault door (Express), configure the security checkpoints to aggressively scan incoming packages (CORS & Helmet Middleware), and establish the ultra-secure phone line directly to the CEO (MongoDB Atlas Connection).`,
  youtube: [
    { title: 'Express & MongoDB Setup Pro Guide', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'In a professional Express server, what does the incredibly crucial `app.use(express.json())` middleware actually accomplish?', options: ['It formats CSS into JSON', 'It structurally parses completely incoming HTTP request bodies so you can magically read `req.body.password` instead of it returning `undefined`', 'It connects to MongoDB', 'It encrypts the response'], answer: 1 },
    { q: 'Why is injecting the `dotenv` package as early as possible inside `index.js` deeply critical?', options: ['To speed up the server', 'Because if `dotenv` hasn\'t formally loaded your secret `.env` file yet, `process.env.MONGO_URI` will be undefined, violently crashing the database connection', 'To run React', 'To handle CORS'], answer: 1 },
    { q: 'What does the `cors` package specifically allow your server to do?', options: ['Minify images', 'Successfully accept cross-origin HTTP fetch requests coming from your Next.js Frontend (e.g. localhost:3000), preventing the Browser from aggressively blocking the data', 'Format dates', 'Save to MongoDB'], answer: 1 },
    { q: 'What does `app.use("/api/users", userRoutes)` brilliantly accomplish architecturally?', options: ['It breaks the server', 'It natively mounts all endpoints inside the `userRoutes` file onto the `/api/users` prefix, keeping the main `index.js` file beautifully clean and short', 'It deletes users', 'It hides the URL'], answer: 1 },
    { q: 'What popular Express middleware package (like `helmet`) is deeply recommended in production to quietly fix massive HTTP header security vulnerabilities?', options: ['nodemon', 'axios', 'helmet / express-rate-limit', 'styled-components'], answer: 2 }
  ]
};

LESSONS['10-4'] = {
  title: 'Connecting Frontend to Backend API',
  emoji: '🔌',
  tags: ['Axios', 'API', 'Integration'],
  intro: `You have two separate apps running simultaneously. How do you brilliantly connect them so they act like a unified organism? We use an isolated **Axios Interceptor** service layer.`,
  sections: [
    {
      title: '📡 The Global Fetch Service',
      body: `Never scatter ` + '`' + `fetch()` + '`' + ` commands everywhere. We create a central Axios "Instance". If you ever need to change your backend URL or attach an Authorization Token to every single request, you do it instantly in one file.`,
      code: { lang: 'bash', src: `npm install axios` },
      code2: { lang: 'javascript', src: `// client/src/services/api.js
import axios from 'axios';

// 1. Create a Master Instance pointing to the Backend Variable
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
});

// 2. Interceptor: Before ANY request leaves the frontend, run this!
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // If we mapped a JWT, attach it forcefully to the Headers!
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
});

export default api;

// Over in a React Component later:
// import api from '@/services/api';
// const response = await api.get('/users/profile'); // Super clean!` }
    }
  ],
  realLife: `An Axios Interceptor Service is an ultra-efficient Mailroom. Instead of making every React Component manually write out the return address and stick stamps on every single envelope (HTTP Headers / JWTs) before sending data to the Backend, the Components just hand the raw letter to the Mailroom (Api Service). The Mailroom automatically stamps the JWT to the envelope and perfectly ships it out.`,
  youtube: [
    { title: 'Axios Interceptors Masterclass', channel: 'PedroTech', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is defining a unified `axios.create` instance vastly superior to writing raw `fetch()` calls locally in 50 different React components?', options: ['It uses CSS faster', 'It rigidly centralizes your deeply critical Backend URL. If the URL changes upon deployment, you literally only have to change it in one singular file.', 'Axios bypasses CORS securely', 'React Native demands it'], answer: 1 },
    { q: 'What magical feature physically allows an Axios service configuration to aggressively "intercept" outgoing requests and effortlessly modify them (like instantly slapping a JWT onto the Headers)?', options: ['Array.map', 'Axios Interceptors (api.interceptors.request.use)', 'React Context', 'Next.js layouts'], answer: 1 },
    { q: 'In Next.js, what deeply specific prefix must an environment variable have to deliberately force Next.js to expose it publicly to the Browser JS React Components (like your API URL)?', options: ['REACT_APP_', 'PUBLIC_VAR_', 'NEXT_PUBLIC_', 'EXPOSE_'], answer: 2 },
    { q: 'If the browser Console violently throws a "Cross-Origin blocked by CORS policy" error when your beautiful Axios service fires a request, what side of the stack is misconfigured?', options: ['The React Components', 'The Axios Service', 'The Express.js Backend Server (It forgot to use the `cors` middleware dynamically to whitelist the React URL)', 'MongoDB'], answer: 2 },
    { q: 'What is a massive benefit of utilizing an Axios Response Interceptor globally?', options: ['It compresses images wildly', 'It can universally intercept 401 Unauthorized API errors and seamlessly force the entire React App to `window.location.href = "/login"` in one single central place', 'It hashes database passwords', 'It upgrades to Websockets'], answer: 1 }
  ]
};

LESSONS['10-5'] = {
  title: 'Authentication & Authorization',
  emoji: '🔐',
  tags: ['Auth', 'JWT', 'Security'],
  intro: `Since NextAuth is heavily integrated into Next.js monoliths, many professional Full-Stack MERN applications handle Authentication natively using custom **Refresh/Access Tokens**.`,
  sections: [
    {
      title: '🛡️ Advanced Dual-Token JWT Strategy',
      body: `An Access Token is short-lived (15 mins) and sent on every request. A Refresh Token is extremely long-lived (7 days) and stored inside a highly secure browser ` + '`' + `HttpOnly Cookie` + '`' + `.`,
      code: { lang: 'markdown', src: `The Highly Secure Login Flow:
1. User logs in flawlessly (Email/Password).
2. Backend validates bcrypt hash perfectly.
3. Backend creates a Short-lived Access Token (JWT) AND a Long-lived Refresh Token (JWT).
4. Backend sends the Refresh Token silently back as an 'HttpOnly' Cookie (Hackers CANNOT read this via JS).
5. Backend sends Access token as normal JSON data.
6. React stores Access Token in RAM (Zustand/Redux).
7. When the 15-minute Access token casually expires, React uses the HttpOnly Refresh Cookie to silently ask the backend for a brand new Access Token, meaning the user stays logged in flawlessly for 7 days!` }
    }
  ],
  realLife: `The Access Token is a standard hotel room keycard; it's active for an hour, and if you drop it (a hacker steals it), the damage is extremely limited. The Refresh Token is your physical Passport. The Passport is locked permanently inside the Hotel Room Safe (HttpOnly Cookie). If the keycard expires, the Front Desk checks your Passport inside the safe and smoothly prints you a brand new 1-hour keycard.`,
  youtube: [
    { title: 'Refresh/Access JWT Auth Strategy', channel: 'Web Dev Simplified', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'In an enterprise Authentication system, what immense security flaw does implementing a Dual Token (Access/Refresh) strategy specifically solve?', options: ['It makes CSS styling secure', 'If a standard single JWT lasts for 30 days and is stolen by an attacker, the attacker ruins the user unconditionally for 30 days. Short Access Tokens limit the hack window to 15 minutes globally.', 'It compresses headers', 'It bypasses CORS'], answer: 1 },
    { q: 'What is an `HttpOnly` browser Cookie?', options: ['A cookie used for CSS', 'An aggressively secure cookie that the browser attaches to Network requests automatically, but rigidly completely blocks Frontend JavaScript (`document.cookie`) from reading, preventing vast XSS hacking attacks', 'A cookie that tracks analytics', 'A Next.js native component'], answer: 1 },
    { q: 'In this strategy, where does the Frontend React application aggressively store the short-lived 15-minute Access Token?', options: ['In the Database URL', 'In standard LocalStorage or just plain variable RAM state (Since the HttpOnly refresh token will elegantly grab a new one if memory is wiped)', 'Inside the HTML head', 'In MongoDB'], answer: 1 },
    { q: 'What expressly is the difference between Authentication and Authorization?', options: ['They are the same', 'Authentication confirms Identity (WHO is this person logging in?). Authorization deeply verifies Permissions (WHAT is this logged-in person allowed to do?).', 'Authentication uses CSS', 'Authentication happens on the Frontend only'], answer: 1 },
    { q: 'If your Axios interceptor catches a 403 Forbidden or 401 Unauthorized API error, what should typically happen?', options: ['Turn the screen blue', 'The Interceptor should seamlessly erase the user state and firmly redirect them back to the `/login` portal', 'Format the hard drive', 'Delete the database user'], answer: 1 }
  ]
};

LESSONS['10-6'] = {
  title: 'User Roles & Permissions',
  emoji: '👑',
  tags: ['RBAC', 'Roles', 'Admin'],
  intro: `Once your backend authenticates that a user is logged in, you must implement **Role-Based Access Control (RBAC)** to physically prevent standard users from accessing massive, highly destructive Admin Dashboards.`,
  sections: [
    {
      title: '🚷 The Server-Side Bouncer',
      body: `Hiding an "Admin" button using React CSS (` + '`' + `display: none` + '`' + `) is utterly useless. Hackers can just bypass the frontend and hit the API Endpoint URL directly. You MUST rigidly check the User Role directly on the Backend Database level.`,
      code: { lang: 'javascript', src: `// server/src/middleware/auth.js

// 1. First Middleware: Check if logged in (Has JWT)
const protect = (req, res, next) => { /* decodes JWT to req.user */ };

// 2. Second Middleware: Check if they possess the God Role!
const authorizeAdmin = (req, res, next) => {
  // We check the role attached to their decoded JWT Token!
  if (req.user && req.user.role === 'admin') {
    next(); // Access Granted! Fire the route logic.
  } else {
    res.status(403).json({ msg: "Forbidden. Admin Elite Access Only." });
  }
};

// 3. Mount it on the violently dangerous route!
// Only runs if BOTH middlewares call next() beautifully!
app.delete('/api/users/:id', protect, authorizeAdmin, deleteUserController);` }
    }
  ],
  realLife: `Authentication (The Protect Middleware) is effectively showing an ID to confirm you absolutely work at the Hospital. Authorization (The Admin Middleware) is having the specific red keycard dynamically required to open the heavily secured Pharmacy Vault. A hospital janitor is authenticated, but they are NOT authorized.`,
  youtube: [
    { title: 'Role Based Access Control MERN', channel: 'Academind', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is rigidly hiding an "Admin Setup" HTML button on the Frontend React App utterly insufficient for real security?', options: ['It breaks the CSS formatting', 'Because intelligent attackers drastically bypass the frontend UI entirely using Postman to fire HTTP requests directly manually at your unprotected Backend API endpoints', 'React cannot hide buttons', 'CSS is outdated'], answer: 1 },
    { q: 'What does the acronym RBAC universally refer to in extreme system security?', options: ['React Backend API Control', 'Role-Based Access Control (Giving users specific strict tier levels like "Admin", "Manager", "User")', 'Render Base Auth Component', 'Redux Boilerplate Application Component'], answer: 1 },
    { q: 'In the provided Express backend architecture, how do we drastically ensure a specific Route requires BOTH a JWT login AND Admin status?', options: ['Write a massive if statement', 'We effortlessly stack multiple middlewares in sequence on the route (e.g. `app.delete("/", protect, authorizeAdmin, finish)`)', 'We use MongoDB schemas', 'We format the response'], answer: 1 },
    { q: 'Where should a user\'s role (e.g. "admin" or "user") ideally ultimately be validated during a fierce request?', options: ['Inside LocalStorage', 'Inside the React Context', 'Aggressively on the Backend Server relying strictly on the Decoded Secure JWT Payload or a fresh Database check', 'Inside the CSS class'], answer: 2 },
    { q: 'What HTTP Error code inherently formally means "Forbidden - I know exactly who you are, but you profoundly lack the clearance permissions to view this"?', options: ['404', '500', '401', '403'], answer: 3 }
  ]
};

// ════════════ PHASE 10: Full-Stack Final Project (Part 2) ════════════

LESSONS['10-7'] = {
  title: 'File Upload (Cloudinary)',
  emoji: '☁️',
  tags: ['Uploads', 'Cloudinary', 'Media'],
  intro: `Users need profile pictures. You should NEVER store image files directly in your MongoDB database or physical Express server folder structure. You must strictly use a dedicated cloud storage CDN like **Cloudinary** or **AWS S3**.`,
  sections: [
    {
      title: '📸 The Cloud Storage System',
      body: `Instead of saving a 5MB image file to MongoDB, we send the physical file to Cloudinary. Cloudinary instantly gives us back a highly optimized URL string (e.g., ` + '`' + `https://res.cloudinary.com/.../profile.jpg` + '`' + `). We then save that tiny URL string into our MongoDB user document!`,
      code: { lang: 'bash', src: `npm install cloudinary multer` },
      code2: { lang: 'javascript', src: `// Backend Upload Flow (Mental Model)
// 1. React sends Image File -> Express '/upload' route
// 2. Express uses 'multer' middleware to grab the physical file from the request
// 3. Express uploads it physically to Cloudinary CDN
// 4. Cloudinary returns the secure URL
// 5. Express saves the URL to User database document
// 6. Next.js natively renders the Cloudinary URL in an <Image /> component!` }
    }
  ],
  realLife: `Storing images directly in a database is like stuffing a physical grand piano inside a tiny filing cabinet lockbox. It crushes the database. Using Cloudinary is renting a massive professional storage warehouse for the piano, and Cloudinary just hands you a tiny piece of paper (The URL) with the address of the warehouse. You put that tiny piece of paper into the filing cabinet instead.`,
  youtube: [
    { title: 'Upload Images to Cloudinary MERN', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is rigidly storing raw image files natively inside a MongoDB Document (using BSON) heavily discouraged in modern architecture?', options: ['It uses CSS arrays', 'It wildly inflates the database size, dramatically devastating query performance and skyrocketing hosting costs', 'MongoDB deletes images', 'Images crash React'], answer: 1 },
    { q: 'What exactly is Cloudinary?', options: ['A CSS framework', 'A massively popular, highly optimized Cloud CDN specifically built for securely storing, processing, and dynamically serving images/videos globally', 'A local Node.js database', 'A React Hook'], answer: 1 },
    { q: 'In this professional architecture, what specific data strictly gets saved to your MongoDB document regarding the user profile picture?', options: ['The raw binary image', 'A tiny, secure string containing the unique public URL address provided instantly by the Cloudinary API (e.g., `https://res.cloudinary.../image.jpg`)', 'A React component', 'An array of CSS styles'], answer: 1 },
    { q: 'What popular Express middleware package (which magically parses `multipart/form-data`) is overwhelmingly used to physically intercept the incoming image file from React before sending it to Cloudinary?', options: ['Mongoose', 'Cors', 'Helmet', 'Multer'], answer: 3 },
    { q: 'What highly critical element must a Frontend React HTML `<form>` tag have to successfully transmit physical files to an Express server?', options: ['enctype="multipart/form-data"', 'method="GET"', 'style="display: none"', 'class="upload"'], answer: 0 }
  ]
};

LESSONS['10-8'] = {
  title: 'Payment Integration (Stripe)',
  emoji: '💳',
  tags: ['Stripe', 'Payments', 'E-commerce'],
  intro: `If you are building a SaaS or E-commerce capstone project, you must securely charge credit cards. **Stripe** is the undisputed industry standard for integrating hyper-secure, profoundly stable payment processing.`,
  sections: [
    {
      title: '💵 The Secure Stripe Checkout',
      body: `You must never actually touch, transmit, or store a user's raw Credit Card number on your own backend. If you do, you become legally liable for PCI DSS compliance. Stripe handles the physical card securely.`,
      code: { lang: 'bash', src: `npm install stripe` },
      code2: { lang: 'javascript', src: `// server/src/routes/payment.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// 1. React asks Backend for a "Checkout Session"
app.post('/api/create-checkout-session', async (req, res) => {
  // 2. Backend tells Stripe what the user is buying
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: { name: 'Pro Subscription' },
          unit_amount: 2000, // Stripe uses pennies! ($20.00)
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    // 3. User is physically redirected to Stripe's ultra-secure domain
    success_url: 'http://localhost:3000/success', 
    cancel_url: 'http://localhost:3000/cancel',
  });

  // 4. Send the Session URL back to React so it can redirect the user!
  res.json({ url: session.url });
});` }
    }
  ],
  realLife: `Writing custom credit card code is like building an amateur bank vault out of cardboard to hold customer cash; if a hacker breaks in, you are entirely legally responsible and going to jail. Stripe is like hiring an armored Brinks truck and an elite team of armed guards natively. The customer gives the cash directly to the guards (Stripe Checkout), and the guards just securely text you saying "The $20 payment is verified. They are good to go." You never touch the massive risk.`,
  youtube: [
    { title: 'Stripe Checkout Node.js', channel: 'Web Dev Simplified', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What massive, career-ending legal/architectural mistake must you absolutely avoid regarding credit cards?', options: ['Styling them with CSS', 'Never physically accept, parse, or store raw 16-digit credit card numbers natively in your own MongoDB Database because it profoundly violates strict PCI-DSS federal compliance laws', 'Allowing Stripe to use it', 'Deleting the cards'], answer: 1 },
    { q: 'In the enormously popular Stripe Checkout architecture, where does the user literally type in their actual credit card number?', options: ['In your Express DB', 'Inside your own React `<input>` fields natively', 'On a highly secure, PCI-compliant Checkout webpage physically hosted by Stripe on their own domain, which your Express server dynamically redirects them to', 'On GitHub'], answer: 2 },
    { q: 'What weird mathematical quirk deeply applies when defining the `unit_amount` for an item inside a Stripe Express configuration?', options: ['You must use CSS calc', 'Stripe unequivocally calculates all currencies in the absolute smallest denominator (e.g. Pennies/Cents). Therefore, $20.00 is strictly written as `2000`.', 'You must use Decimals ($20.00)', 'Stripe requires Euros'], answer: 1 },
    { q: 'When building this feature locally, what keys do you use to test it?', options: ['The live production keys', 'The specific "Test Mode" Public and Secret keys deeply provided by the Stripe Dashboard, which violently refuse real credit cards and only accept fake "4242" test cards', 'No keys at all', 'CSS keys'], answer: 1 },
    { q: 'After Stripe successfully secures the real payment, how does your backend structurally know to unlock the user\'s "Pro" status?', options: ['Stripe emails them', 'Stripe fires a highly secure server-to-server HTTP POST request (called a Webhook) instantly describing the successful transaction to your Express backend behind the scenes', 'The user calls you', 'Stripe edits MongoDB directly'], answer: 1 }
  ]
};

LESSONS['10-9'] = {
  title: 'Real-time Features (Socket.io)',
  emoji: '⚡',
  tags: ['WebSockets', 'Socket.io', 'Realtime'],
  intro: `Standard HTTP is physically incapable of "pushing" data to a browser. If a user receives a chat message, HTTP requires them to manually intensely refresh the page to see it. **WebSockets (Socket.io)** solves this by creating an open, continuous two-way pipeline.`,
  sections: [
    {
      title: '🚰 The Always-Open Pipeline',
      body: `Socket.io allows your Express Backend to proactively "Emit" a blast to the Next.js Frontend the exact millisecond an event occurs (like a new chat message or a live notification), without the frontend ever asking for it!`,
      code: { lang: 'bash', src: `npm install socket.io socket.io-client` },
      code2: { lang: 'javascript', src: `// Backend: Express + Socket.io
io.on('connection', (socket) => {
  console.log('User heavily connected to WebSocket!');

  // Listen for a message from the React Frontend
  socket.on('send_message', (data) => {
    // Instantly blast that message to EVERY single other connected React Frontend globally!
    socket.broadcast.emit('receive_message', data);
  });
});` }
    }
  ],
  realLife: `HTTP is sending a physical Letter in the mail. If you want to know if they replied, you literally have to walk to the mailbox and check manually every 5 minutes (Polling). WebSockets (Socket.io) is a live Telephone Call. The connection physically stays intensely open. If they have something to say, they immediately speak, and you hear it instantly without having to check anything.`,
  youtube: [
    { title: 'Socket.io Chat App React/Node', channel: 'PedroTech', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What fundamental limitation of standard HTTP profoundly necessitates the usage of WebSockets for live chat applications?', options: ['HTTP crashes React', 'HTTP inherently strictly requires the Frontend to manually initiate a Request to get data. The Backend cannot proactively "Push" or force new data onto the Frontend without being explicitly asked.', 'HTTP is too slow for text', 'HTTP prevents CSS'], answer: 1 },
    { q: 'What is Socket.io?', options: ['A CSS animation', 'An immensely powerful JavaScript library that expertly wraps the raw WebSocket protocol, providing brilliant fallbacks, Rooms, and dead-simple real-time event routing for Node/React applications', 'A database', 'A styling system'], answer: 1 },
    { q: 'In Socket.io terminology, what does `socket.emit("event")` physically do?', options: ['It crashes the server', 'It natively saves data to MongoDB completely', 'It violently fires (broadcasts) a specific real-time data package across the open open TCP pipeline to the listener', 'It deletes data'], answer: 2 },
    { q: 'If User A fiercely clicks "Send" on a chat message, what happens in a Socket.io architecture?', options: ['They email the user', 'React emits it to the Express Server -> The Server physically catches it -> The Server emits it globally to User B\'s browser instantly -> User B\'s React updates its state', 'React sends it directly to React', 'MongoDB sends it'], answer: 1 },
    { q: 'If you want to isolate users into a private chat conversation so they don\'t broadcast messages to the entire global planet, what Socket.io feature do you use?', options: ['CSS hiding', 'Socket "Rooms" (e.g. `socket.join("Room-123")`)', 'A new Database', 'React Router'], answer: 1 }
  ]
};

LESSONS['10-10'] = {
  title: 'Testing with Jest',
  emoji: '🧪',
  tags: ['Testing', 'Jest', 'Quality'],
  intro: `Before you deploy to production, how do you mathematically guarantee that your ` + '`' + `calculateTotal()` + '`' + ` Shopping Cart function actually works? You write Automated Tests using **Jest**.`,
  sections: [
    {
      title: '🤖 The Automated QA Engineer',
      body: `Instead of manually clicking around your app for 5 hours looking for bugs, you write a script that aggressively tests your functions in 2 milliseconds.`,
      code: { lang: 'bash', src: `npm install --save-dev jest` },
      code2: { lang: 'javascript', src: `// utils/math.js
export const calculateTotal = (price, taxRate) => price + (price * taxRate);

// utils/math.test.js
import { calculateTotal } from './math';

test('calculateTotal perfectly adds 10% tax to $100 resulting in 110', () => {
  // 1. Arrange/Act
  const result = calculateTotal(100, 0.10);
  
  // 2. Assert (Jest violently throws an error if this is false!)
  expect(result).toBe(110); 
});` }
    }
  ],
  realLife: `Manual testing is having a human physically press every button on the dashboard of a car as it rolls off the factory assembly line to make sure the horn works. It takes 10 minutes per car. Jest Automated Testing is building a massive robotic arm array that presses all 500 buttons perfectly on the car in 0.02 seconds, proving unequivocally that the electronics are flawless before the car ships.`,
  youtube: [
    { title: 'Jest Crash Course - Unit Testing', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the massive overarching goal of writing pure Unit Tests utilizing Jest?', options: ['To violently style the site', 'To programmatically mathematically prove that an isolated specific function or component always returns the exact correct output when given specific inputs, preventing future developers from accidentally breaking that logic', 'To deploy the site', 'To connect to MongoDB'], answer: 1 },
    { q: 'What specific powerful Jest keyword acts as the core mathematical validator that determines if the test passes or violently fails?', options: ['if()', 'expect(value).toBe(...) / expect().toEqual(...)', 'return true;', 'assertCSS()'], answer: 1 },
    { q: 'In TDD (Test Driven Development), when are tests notoriously written?', options: ['Never', 'Aggressively *before* the actual feature code is written. The test initially fails, and you write the actual code until the test turns mathematically green.', 'After deployment', 'During the CSS phase'], answer: 1 },
    { q: 'What specifically defines "Unit" Testing versus "End-to-End" (E2E) testing?', options: ['Unit testing is CSS, E2E is HTML', 'Unit testing brutally tests one deeply isolated microscopic function (like a math helper). E2E testing physically boots up a fake Chrome browser and clicks through the entire application exactly like a real human.', 'Unit requires MongoDB', 'E2E is for Express only'], answer: 1 },
    { q: 'If an essential test file is named `cart.test.js`, and you furiously run the command `npm run test` (mapped to `jest`), what does Jest automatically do?', options: ['Deletes the file', 'It natively scans your entire massive repository searching specifically for any files ending in `.test.js` or `.spec.js`, and flawlessly executes them simultaneously', 'It connects to Vercel', 'It starts React'], answer: 1 }
  ]
};

// ════════════ PHASE 10: Full-Stack Final Project (Part 3) ════════════

LESSONS['10-11'] = {
  title: 'CI/CD with GitHub Actions',
  emoji: '🚦',
  tags: ['CICD', 'Actions', 'DevOps'],
  intro: `You just wrote 50 tests. Do you want to manually run ` + '`' + `npm test` + '`' + ` on your laptop every single time you push code? No. That is what **Continuous Integration/Continuous Deployment (CI/CD)** is for.`,
  sections: [
    {
      title: '🤖 The Automated Factory Worker',
      body: `GitHub Actions is a robot that watches your repository. Whenever you furiously push ` + '`' + `main` + '`' + ` to GitHub, the robot wakes up, installs your packages, aggressively runs all your Jest tests, and physically STOPS the Vercel deployment if any test violently fails.`,
      code: { lang: 'yaml', src: `# .github/workflows/main.yml
name: Node CI/CD Protocol

# Run specifically when pushing to the main branch
on:
  push:
    branches: [ "main" ]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js Pro
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    - run: npm install
    # THE CHOKE POINT: If this dramatically fails, deployment halts!
    - run: npm test` }
    }
  ],
  realLife: `CI/CD is the strict massive Bouncer standing between your messy laptop and the pristine Production Server. When you try to push new code to production, the Bouncer violently rips the code out of your hands, runs it through a massive battery of aggressive automated tests, and only if it survives does he securely unlock the door to the Production server.`,
  youtube: [
    { title: 'GitHub Actions Crash Course', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'In modern DevOps, what does the incredibly crucial acronym CI/CD stand for?', options: ['Computer Integration / Current Deployment', 'Continuous Integration and Continuous Deployment', 'Cascading Index / Connected Database', 'Code Installer / Code Downloader'], answer: 1 },
    { q: 'What is the massive overarching purpose of a GitHub Actions YAML workflow script?', options: ['To violently style the site', 'To violently execute highly automated pipelines (like running tests, linting code, and pushing to Vercel) immediately every single time a developer pushes code to the repository', 'To connect to MongoDB', 'To format the hard drive'], answer: 1 },
    { q: 'If your `.yml` Action specifically contains a step stating `run: npm test`, and exactly 1 out of 500 Jest tests inherently fails, what happens?', options: ['It ignores it', 'The entire CI/CD Action pipeline violently completely aborts and marks the Push with a massive Red X on GitHub, decisively preventing a broken build from being deployed to production hosts', 'It emails the user', 'It deletes the database'], answer: 1 },
    { q: 'What format are deeply precise GitHub Actions incredibly notoriously written in?', options: ['HTML', 'YAML (.yml) files securely placed inside a hidden `.github/workflows/` folder', 'CSS', 'JSON'], answer: 1 },
    { q: 'What is typically heavily required to physically give GitHub Actions the explicit permission to securely deploy code to external cloud providers like AWS or Vercel?', options: ['Giving them your password', 'Securely injecting massively encrypted secret API Tokens (e.g. `VERCEL_TOKEN`) directly into the GitHub Secret Settings Dashboard', 'Uploading CSS', 'Calling customer service'], answer: 1 }
  ]
};

LESSONS['10-12'] = {
  title: 'Deployment: Vercel + Railway',
  emoji: '🚀',
  tags: ['Deployment', 'Vercel', 'Railway'],
  intro: `Your code works flawlessly on ` + '`' + `localhost:3000` + '`' + ` and ` + '`' + `localhost:5000` + '`' + `. Now it's time to show the universe. We will deploy the React Frontend to **Vercel** and the Express Backend to **Railway** (or Render).`,
  sections: [
    {
      title: '🌍 The Dual-Host Lift-Off',
      body: `Frontend hosts like Vercel are brutally optimized for serving Next.js static files blazing fast across the globe securely. Backend hosts like Railway are heavily designed to run an Express ` + '`' + `server.js` + '`' + ` script 24/7 without timing out.`,
      code: { lang: 'markdown', src: `The Ultimate Deployment Checklist:
1. Railway Express Deploy: Connect GitHub repo to Railway.
2. Railway Env: Paste your 'MONGO_URI' & 'JWT_SECRET' deeply into the Railway Secrets panel.
3. Railway Domain: Copy the new live API URL (e.g., https://my-api.up.railway.app)
4. Vercel Next Deploy: Connect Frontend Repo to Vercel.
5. Vercel Env: Paste the Railway Domain directly into 'NEXT_PUBLIC_API_URL' in Vercel settings!
6. Vercel Domain: Success! Your Full-Stack MERN app is live natively.` }
    }
  ],
  realLife: `Deploying a Separated MERN Stack is like completely opening a massive new Restaurant. Vercel is building the beautiful, fast, physical Dining Room right on Main Street globally. Railway is renting a colossal industrial Kitchen on the edge of town explicitly designed for hot stoves (Servers). The two buildings violently talk to each other perfectly over the phone (HTTPS).`,
  youtube: [
    { title: 'Deploy MERN Stack to Vercel & Render', channel: 'Codedamn', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why do we typically overwhelmingly split the Deployment (Next.js to Vercel, Express to Railway/Render) instead of violently forcing both onto one server?', options: ['To save 10 cents', 'Vercel profoundly specializes in globally caching Edge network frontends but brutally punishes long-running Backend servers via severe timeouts. Railway specifically specializes in 24/7 heavy server persistence.', 'React demands it', 'CSS runs faster'], answer: 1 },
    { q: 'What specific massive Error occurs securely if you forget to inject the Live `NEXT_PUBLIC_API_URL` into Vercel\'s Environment Variables?', options: ['The CSS turns green', 'The deployed Next.js physical frontend will violently attempt to fetch data from `http://localhost:5000` (which absolutely does not exist on a user’s phone), causing a brutal global crash', 'MongoDB violently crashes', 'It deletes users'], answer: 1 },
    { q: 'On deeply deployed platforms like Railway, what absolutely prevents hackers from viewing your Express `.env` file containing Database Passwords?', options: ['It is fully encrypted text', 'Because you explicitly completely `.gitignored` the `.env` file. You literally forcibly copy and paste the raw text values manually into Railway’s deeply locked web dashboard UI so the code never hits GitHub natively.', 'It is CSS', 'It is a JSON file'], answer: 1 },
    { q: 'In Express, what exact dynamic port setup is incredibly completely legally required by Cloud Hosts to prevent a crash?', options: ['app.listen(80)', 'const port = 5000;', 'app.listen(process.env.PORT || 5000);', 'server.port(3000)'], answer: 2 },
    { q: 'What severely strict HTTP security Protocol is massively mandated (and instantly provided) by Vercel and Railway out of the box?', options: ['HTTP', 'HTTPS (Extremely secure encrypted SSL pipelines)', 'FTP', 'SSH'], answer: 1 }
  ]
};

LESSONS['10-13'] = {
  title: 'Post-Launch Monitoring',
  emoji: '📡',
  tags: ['Monitoring', 'Sentry', 'DevOps'],
  intro: `You deployed. Congratulations. But what happens if a specific user deeply clicking a specific button brutally crashes the app, and they angrily close the tab? You wouldn't even know. **Post-Launch Monitoring** is vital.`,
  sections: [
    {
      title: '🚨 The Alert Systems',
      body: `Professionals don't just wait for furious customer emails. They implement highly aggressive Error Tracking software (like **Sentry**). If any browser violently throws a JS error globally, Sentry instantly catches the exact stack trace and blasts you a Slack notification!`,
      code: { lang: 'bash', src: `npm install @sentry/nextjs` },
      code2: { lang: 'javascript', src: `// By cleanly injecting Sentry, if this happens natively on a user's phone in Egypt:
const checkoutData = undefined;
const price = checkoutData.price; // VIOLENT CRASH: Cannot read properties of undefined!

// Sentry intrinsically profoundly intercepts the crash before the browser dies!
// It sends the exact File Name, Line Number, and User OS straight to your Email!
// Meaning you can push a hot-fix patch strictly within 5 minutes.` }
    }
  ],
  realLife: `Launching without Monitoring is strapping on a blindfold while aggressively driving a massive train filled with passengers. If the train completely derails historically miles behind you, you have absolute zero idea. Sentry Error Monitoring is fiercely installing thousands of highly sensitive wireless smoke detectors deeply into every single component of the train. If one sparks, your phone alarms immensely.`,
  youtube: [
    { title: 'Sentry Error Monitoring Next.js', channel: 'Web Dev Simplified', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the massive overarching goal of utilizing a brilliant Post-Launch Monitoring tool like Sentry?', options: ['To brutally style the application', 'To aggressively historically intercept, log, and alert you of deep, silent JavaScript crashes occurring directly inside the browser of remote live users globally so you can urgently fix them without them complaining', 'To intensely connect to MongoDB purely', 'To forcefully format hard drives'], answer: 1 },
    { q: 'Why is standard `console.log()` completely utterly useless for heavily monitoring a live Production React Application?', options: ['It aggressively slows the server entirely', 'Because a deployed React app runs historically locally inside the User\'s physical Browser Memory (like Chrome on their phone). They see the console, you fiercely do not.', 'It breaks CSS styling perfectly', 'It brutally deletes databases'], answer: 1 },
    { q: 'Besides immensely tracking strict code errors, what other highly critical metric do advanced APM (Application Performance Monitoring) tools aggressively measure deeply?', options: ['The CSS colors', 'Brutal performance bottlenecks natively (e.g. Warning: The `/api/checkout` route fiercely took 8.4 seconds to completely execute, significantly causing 90% of users to violently abandon the page)', 'The React Version purely', 'The HTML layout entirely'], answer: 1 },
    { q: 'If Sentry profoundly catches a major crash on Line 42 of `Cart.jsx`, what fiercely allows you to brilliantly see the exact code that crashed even completely though your Production Javascript is minified/scrambled?', options: ['CSS files entirely', 'Securely uploading Source Maps (.map files) dynamically to Sentry upon build, which seamlessly translates the scrambled garbled code heavily back into readable React variables', 'Database querying directly', 'React Hooks strictly'], answer: 1 },
    { q: 'Who profoundly formally deserves incredible congratulations for historically surviving the deeply grueling 10 Phases to reach exactly this point?', options: ['The CSS', 'YOU deeply entirely.', 'The Terminal purely', 'The Browser strictly'], answer: 1 }
  ]
};

// ════════════ PHASE 11: Vibe Coding Mastery (Part 1) ════════════

LESSONS['11-0'] = {
  title: 'The AI-Assisted Development Workflow',
  emoji: '🤖',
  tags: ['Workflow', 'AI', 'Productivity'],
  intro: `Vibe Coding isn't about letting AI write everything for you. It's about augmenting your expertise with intelligent tools to code 10x faster, focus on architecture, and eliminate boilerplate.`,
  sections: [
    {
      title: '🔄 The Augmented Cycle',
      body: `Instead of diving straight into syntax, adopt the "Logic-First Mindset". You are no longer just a typist; you are the **Chief Architect** orchestrating the code generation.`,
      code: { lang: 'markdown', src: `The 5-Step Logic-First Workflow:
1. PLAN: Define logic, write pseudocode, draw the architecture.
2. PROMPT: Translate the plan to the AI using structured constraints.
3. GENERATE: Let AI physically write the boilerplate syntax.
4. INTEGRATE: Paste, test, and adapt the generated code into your system.
5. REFINE: Force the AI to iterate, debug issues, and optimize.

(Old Way: "I must write every line myself")
(New Way: "I architect the solution; AI implements it under my strict review")` }
    }
  ],
  realLife: `Traditional coding is like building a house completely single-handedly, laying every single brick yourself for 12 months. Vibe Coding is becoming the General Contractor. You draw the brilliant blueprints, you hire an incredibly fast AI construction crew to instantly pour the concrete, and you strictly supervise them to ensure the structural integrity matches your vision exactly.`,
  youtube: [
    { title: 'The Future of AI Development', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the absolute core philosophy behind "Vibe Coding" (AI-Assisted Development)?', options: ['Removing developers entirely', 'Augmenting the developer so they can act as an Architect, focusing purely on high-level logic and design while the AI handles the repetitive syntax boilerplate', 'Only using CSS', 'Writing slower code'], answer: 1 },
    { q: 'What is the absolute first mandatory step of the Augmented Development Cycle before you even talk to the AI?', options: ['Deploy to Vercel', 'Buy a domain', 'PLAN: Establish the explicit goal, outline the architecture, and write pseudocode in plain English to lock down the exact logic', 'Write the CSS'], answer: 2 },
    { q: 'Why is the "Old Way" of writing every single line of code yourself becoming obsolete in specific use cases?', options: ['Because humans are bad at CSS', 'Because writing repetitive boilerplate syntax manually wastes massive amounts of time that could be better spent on complex problem-solving and scalability', 'Because React deleted its documentation', 'Because servers are faster'], answer: 1 },
    { q: 'What is a deeply critical strict rule when integrating AI-generated code into your Capstone project?', options: ['Never use it', 'Always blindly copy and paste it into production without reading it', 'You are fundamentally still the engineer! You must aggressively review, completely understand, and rigorously test every line of code the AI outputs', 'Only use it for HTML'], answer: 2 },
    { q: 'Which highly popular AI tool is a brilliant, direct VS Code alternative natively built from the ground up to deeply integrate AI understanding of your entire local codebase?', options: ['Microsoft Word', 'Notepad++', 'Cursor', 'Photoshop'], answer: 2 }
  ]
};

LESSONS['11-1'] = {
  title: 'Prompt Engineering for Developers',
  emoji: '🧠',
  tags: ['Prompts', 'ChatGPT', 'Claude'],
  intro: `Talking to an AI like it's a human doesn't work well for code. You must learn the rigorous discipline of **Prompt Engineering** to force the AI to produce exact, production-grade output on the first try.`,
  sections: [
    {
      title: '🛠️ The Structured Prompt Template',
      body: `Vague prompts yield chaotic, completely unusable code. A pristine prompt defines the **Role**, **Context**, **Task**, strict **Inputs/Outputs**, and absolutely rigid **Constraints**.`,
      code: { lang: 'markdown', src: `// A Perfect Developer Prompt:
[ROLE] You are a Senior Next.js Developer specializing in e-commerce.

[CONTEXT] I am building a client-side shopping cart feature.

[TASK] Write a JS function that recalculates the cart total mathematically.

[INPUT] Array of items: { price: number, quantity: number }

[CONSTRAINTS]
- Must beautifully handle empty arrays without throwing errors
- Must absolutely use the Array.reduce() method
- Do NOT use any external libraries
- Generate ONLY the raw function code with JSDoc comments.

// By providing this much structure, the AI cannot possibly fail or hallucinate.` }
    }
  ],
  realLife: `A bad prompt is walking into an intense restaurant kitchen and yelling "Make me food!" (You might get soup, you might get a raw steak). A highly engineered prompt is handing the chef a hyper-detailed architectural recipe: "I need a medium-rare 8oz Sirloin, no salt, cooked with olive oil, plated strictly on a square blue dish." You get exactly what you need.`,
  youtube: [
    { title: 'Prompt Engineering Crash Course', channel: 'freeCodeCamp', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the massive overarching goal of extreme Prompt Engineering?', options: ['To talk to the AI about feelings', 'To systematically structure your request with rigorous precision so the AI produces exact, highly usable production-grade code without hallucinating or drifting', 'To make the AI write CSS', 'To bypass passwords'], answer: 1 },
    { q: 'Why is defining strict [CONSTRAINTS] in a prompt incredibly crucial for a developer?', options: ['To make the text longer', 'Because if you don\'t tell the AI explicitly to avoid deprecated libraries, or to strictly use TypeScript, it will wildly guess and ruin the integration', 'To appease the AI', 'To make CSS colorful'], answer: 1 },
    { q: 'What does the [ROLE] block of a structured prompt mentally force the AI to do?', options: ['It turns the AI off', 'It anchors the AI\'s vast behavior strictly to the persona of an elite Senior Engineer in that specific framework, heavily improving the professional quality of the output', 'It crashes React', 'It deletes databases'], answer: 1 },
    { q: 'If your prompt simply says `Write a login form`, what devastating issue will you immediately face?', options: ['The AI will steal your data', 'The AI will produce incredibly vague, generic code that uses the wrong framework, wildly misses your custom database requirements, and requires 5 hours of manual fixing', 'The AI will delete your CSS', 'The HTML will be red'], answer: 1 },
    { q: 'In an "Explain This Code" Prompt Pattern, what is a highly recommended specific question to strictly ask the AI?', options: ['Are you alive?', 'What are the specific Inputs/Outputs, and are there any deeply hidden edge-case bugs in this logic?', 'How do I download RAM?', 'Can you write HTML?'], answer: 1 }
  ]
};

LESSONS['11-2'] = {
  title: 'Using v0.dev for UI Generation',
  emoji: '🎨',
  tags: ['v0', 'UI', 'Generative'],
  intro: `Building complex React + Tailwind layouts manually can take absolutely hours. **v0.dev** (by Vercel) is a Generative UI tool that instantly converts plain English into hyper-beautiful, completely production-ready React components.`,
  sections: [
    {
      title: '🖌️ The AI Canvas',
      body: `You simply aggressively describe exactly what the UI should look like. v0 generates the Next.js code, highly styles it with Tailwind CSS, and even perfectly wires up smooth Framer Motion animations.`,
      code: { lang: 'markdown', src: `The v0.dev Workflow:
1. Prompt v0: "Build a brilliant dark-mode Pricing Card SaaS component. It needs 3 tiers. Highlight the middle Pro tier heavily with a neon purple border. Add a subtle hover scale animation."
2. The AI instantly generates the UI visually.
3. You type refinements: "Make the Pro button incredibly wider and add checkmark icons to the features."
4. You physically copy the generated generic React code.
5. You paste it seamlessly into your Next.js project and instantly connect your real data.` }
    }
  ],
  realLife: `Generative UI is like having a masterful interior designer trapped inside your computer. Normally, you have to buy the wood, paint the walls, and sew the curtains (writing CSS manually). With v0, you just confidently stand in the room and yell "Give me a Modern Scandinavian Kitchen with black marble!", and the room materializes in absolute seconds. You just have to supply the food.`,
  youtube: [
    { title: 'Build UIs instantly with v0', channel: 'Vercel', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What specific massive problem does v0.dev fundamentally solve for Full-Stack developers?', options: ['It writes database queries', 'It eliminates the agonizingly slow process of manually writing raw Tailwind CSS and HTML structure by instantly generating gorgeous production UI directly from text', 'It hosts the database', 'It automatically tests code'], answer: 1 },
    { q: 'What incredible ecosystem stack does v0.dev natively and perfectly output its code in highly typically?', options: ['Vue and SASS', 'Vanilla HTML/CSS', 'React, Tailwind CSS, and shadcn/ui generic components', 'Angular and Bootstrap'], answer: 2 },
    { q: 'If the initial UI generated by v0 is slightly flawed, what is the brilliant intended incredibly smooth workflow?', options: ['Delete the account', 'You iteratively prompt the AI in the chat to heavily tweak details (e.g. "Make the font vastly larger and change the button to red") before exporting the final code', 'Write raw CSS manually', 'Switch to AWS'], answer: 1 },
    { q: 'Why is v0.dev profoundly superior for building a SaaS "Settings Dashboard" quickly compared to standard ChatGPT?', options: ['It uses less RAM', 'v0 visually natively renders the live, interactive UI component instantly in the browser so you can fiercely see exactly what it looks like before copying the code', 'It formats hard drives', 'It connects to MongoDB automatically'], answer: 1 },
    { q: 'What must you absolutely deeply remember to do AFTER successfully pasting v0 code into your real React Application?', options: ['Delete your CSS files', 'Carefully aggressively review the accessibility (ARIA tags), physically fix any blind component import paths, and seamlessly wire up your real backend database data to the beautiful static UI', 'Format windows', 'Contact Vercel'], answer: 1 }
  ]
};

LESSONS['11-3'] = {
  title: 'Using GitHub Copilot',
  emoji: '✈️',
  tags: ['Copilot', 'Extensions', 'Editors'],
  intro: `Writing boilerplate code (like array mappings or basic ` + '`' + `fetch` + '`' + ` requests) is insanely repetitive. **GitHub Copilot** acts as a brilliant autocomplete engine inside VS Code, predicting entire blocks of code dynamically as you type.`,
  sections: [
    {
      title: '👻 The Ghost in your Editor',
      body: `Copilot reads the surrounding context of your file. If you write a beautifully descriptive JSDoc comment, Copilot will essentially write the entire physical function instantly. You just press ` + '`' + `Tab` + '`' + ` to decisively accept it.`,
      code: { lang: 'javascript', src: `// 1. You aggressively write the logic description FIRST:
/**
 * Takes an intense array of user orders and mathematically 
 * returns the total strict revenue, heavily ignoring cancelled orders.
 */
const calculateRevenue = (orders) => {

// 2. Copilot instantly magically generates this exact code in grey text:
  return orders
    .filter(order => order.status !== 'cancelled')
    .reduce((sum, order) => sum + order.price, 0);
};

// 3. You press 'TAB' to accept the code!` }
    }
  ],
  realLife: `Copilot is the brilliant Co-Pilot in an airplane. You (the Captain) set the intense global coordinates and hold the yoke. If you confidently say "Prepare the landing gear", the Co-Pilot instantly reaches over and perfectly flips all 12 necessary switches. He executes the tedious mechanical actions seamlessly so you can focus profoundly on not crashing the massive plane.`,
  youtube: [
    { title: 'GitHub Copilot Best Practices', channel: 'GitHub', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'How does GitHub Copilot primarily and brilliantly interface with you as a developer?', options: ['Through a Web Browser', 'It lives directly natively inside your IDE (VS Code) and dynamically incredibly projects "ghost text" autocomplete suggestions absolutely everywhere as you type', 'Through a phone app', 'Through a physical keyboard'], answer: 1 },
    { q: 'What is the absolute easiest, most powerful way to forcefully coax Copilot into writing a completely brilliant custom function for you?', options: ['Write CSS classes', 'Write an incredibly detailed, multi-line JS comment explicitly heavily describing exactly what the function should logically accomplish before typing the function name', 'Uninstall React', 'Talk loudly into the microphone'], answer: 1 },
    { q: 'What immensely dangerous pitfall must you absolutely fiercely avoid when using Copilot autocomplete?', options: ['It uses up internet data', 'Pressing "Tab" blindly to desperately accept massive blocks of code without aggressively rigorously reading and fundamentally understanding what the code actually does', 'It breaks CSS styling', 'It deletes GitHub repos'], answer: 1 },
    { q: 'Does GitHub Copilot fundamentally completely replace the need for extreme Prompt Engineering?', options: ['Yes entirely', 'No. Copilot is for massive micro-level instantaneous inline boilerplate. You still deeply need immense architectural Prompt Engineering (via Chat) to build massive complex features.', 'Yes, it replaces CSS', 'Yes, it deletes HTML'], answer: 1 },
    { q: 'If Copilot aggressively hallucinates an entirely incorrect API URL inside your code, who is fundamentally legally responsible for that heavily broken code deploying?', options: ['GitHub', 'Microsoft', 'YOU. The developer is absolutely historically responsible for every single character of code committed, regardless of who generated it.', 'The Server'], answer: 2 }
  ]
};

LESSONS['11-4'] = {
  title: 'ChatGPT for Coding',
  emoji: '💬',
  tags: ['ChatGPT', 'Claude', 'Architecture'],
  intro: `When autocomplete isn't enough, you need a highly articulate conversational Partner. You use **ChatGPT-4** or **Claude 3.5** to fiercely brainstorm complex Application Architectures, design MongoDB Schemas, and explain completely baffling concepts.`,
  sections: [
    {
      title: '🏛️ The Senior Architect Partner',
      body: `Instead of demanding raw code, you use Conversational AI to explicitly solve "Blank Page Syndrome" and forcefully lay out massive structural roadmaps before you write a single file.`,
      code: { lang: 'markdown', src: `The Chain-Of-Thought Architecture Prompt:

"I need to brilliantly implement a Real-Time Chat feature in my MERN stack app.
BEFORE YOU WRITE ANY CODE, please fiercely:
1. Outline the exact macro architecture (Next.js, Express, Socket.io, MongoDB).
2. Explicitly list the precise precise API endpoints I will need to build.
3. Deeply describe the specific JSON data flow for sending/receiving messages.
4. Heavily identify potential scaling challenges I will furiously encounter.

Only after answering those 4 points, explicitly provide the Express Server boilerplate."` }
    }
  ],
  realLife: `Using ChatGPT for coding is immensely like walking into the office of a brilliant Senior Principal Engineer who has 40 years of experience. You don't ask him to type out your HTML buttons. You walk up to the giant whiteboard and aggressively say, "How do we fundamentally design a highly scalable database for 10,000 users?", and you brainstorm the massive architecture together.`,
  youtube: [
    { title: 'Using AI to Architect Full Stack Apps', channel: 'Web Dev Simplified', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is extremely often considered the absolute highest-value use case for conversing with an advanced model like ChatGPT-4 or Claude 3.5?', options: ['Writing basic HTML headers', 'Fiercely bouncing massive architectural ideas, fundamentally planning complex database schemas, and highly extracting deep explanations for baffling algorithms', 'Changing CSS colors', 'Setting passwords'], answer: 1 },
    { q: 'What is the immense power of "Chain-of-Thought" Prompting when designing extremely complex systems?', options: ['It forces the AI to write CSS', 'You rigorously deliberately force the AI to painfully explain its step-by-step logical macro blueprint *before* it generates raw code, wildly preventing disastrous logic hallucinations', 'It deletes massive databases', 'It formats Windows'], answer: 1 },
    { q: 'If you are utterly stuck trying to understand an incredibly complex, 500-line legacy Node.js function, what is the best AI workflow?', options: ['Delete the entire file', 'You literally fiercely paste the exact code into Claude/ChatGPT and explicitly command: "Break this exact function down and explain what it does in absolute plain English."', 'Write CSS over it', 'Format the code'], answer: 1 },
    { q: 'Why do many elite Senior Developers wildly prefer Claude 3.5 Sonnet specifically for profound coding tasks over older models?', options: ['It plays music heavily', 'It has proven to be incredibly profoundly accurate, natively possesses massive context windows for reading entire codebases, and writes exceptionally pristine React/Node logic', 'It uses less electricity purely', 'It deletes HTML'], answer: 1 },
    { q: 'When using ChatGPT to fiercely generate a MongoDB Mongoose Schema, what highly critical aspect must you explicitly forcefully remind it to include?', options: ['To use CSS', 'To meticulously heavily include Security constraints, extreme Validation rules, and proper Timestamp triggers, so the Schema is actually production-ready', 'To use HTML tables', 'To format the screen'], answer: 1 }
  ]
};

LESSONS['11-5'] = {
  title: 'AI Debugging Techniques',
  emoji: '🐛',
  tags: ['Debugging', 'Errors', 'Fixing'],
  intro: `Staring furiously at a screaming red React Terminal Error for 5 hours is completely obsolete. AI can aggressively diagnose and violently obliterate complex bugs in 15 seconds if you provide it the exact context.`,
  sections: [
    {
      title: '🩺 The AI Doctor Workflow',
      body: `You cannot just say "My app is broken." To diagnose the sickness, the AI doctor needs the exact Error Trace, the exact surrounding Code Snippet, and exactly what you expected to happen.`,
      code: { lang: 'markdown', src: `The Ultimate Debugging Prompt:

"I am aggressively encountering a fatal React bug.
1. THE ERROR LOG: Cannot read properties of undefined (reading 'map')
2. THE ENVIRONMENT: Next.js Client Component fetching from Express.
3. MY EXACT CODE:
   const [users, setUsers] = useState();
   // ... fetch logic ...
   {users.map(u => <li>{u.name}</li>)}

4. WHAT I EXPECTED: The list to flawlessly render gracefully.
5. WHAT I TRIED: Adding console.logs, but it crashes before the log.

Why is this wildly exploding and how do I precisely fix it?"` }
    }
  ],
  realLife: `Debugging naturally is trying to find a massive gas leak in a giant dark hospital using only your nose. It is agonizing and highly dangerous. AI Debugging is brilliantly throwing 500 electronic sniffer drones into the vents that instantly fly to the exact 5-inch pipe on the 4th floor that is violently leaking, and they hand you the absolute wrench to fix it.`,
  youtube: [
    { title: 'AI Debugging Masterclass', channel: 'Traversy Media', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is vaguely telling an AI "React is throwing a huge error, fix it please" an utterly terrible, highly unusable debugging prompt?', options: ['The AI gets angry', 'Because you fiercely absolutely failed to provide the explicit specific Error Trace, the exact Code file, or the Context, forcing the AI to blindly guess out of 10,000 possible completely different bugs', 'The AI hates React', 'React doesn\'t use AI'], answer: 1 },
    { q: 'What specific highly critical piece of Terminal information should you absolutely forcefully paste into the AI when a brutal crash occurs?', options: ['The CSS file entirely', 'The exact, raw, fiercely screaming Terminal Error text and the Full Stack Trace (the huge block of red text showing the specific Line Numbers where it died)', 'The package.json', 'The HTML head'], answer: 1 },
    { q: 'If your Next.js application isn\'t technically crashing, but the API Fetch is silently brutally returning wildly wrong data, what should you provide the AI?', options: ['The MongoDB password', 'You must fiercely show the AI the exact HTTP Axios request code, AND profoundly paste the exact raw JSON output the server is currently returning, so the AI can physically see the mismatch', 'The raw CSS classes', 'The React Logo completely'], answer: 1 },
    { q: 'What is a massive, incredibly common cause for "Cannot read properties of undefined (reading `map`)" in React that AI spots instantly?', options: ['CSS is broken completely', 'You aggressively fiercely initialized a `useState()` hook completely empty instead of `useState([])`, so when the component brilliantly renders the first frame, it desperately tries to `.map()` over nothing', 'The server is off wildly', 'HTML is deleted natively'], answer: 1 },
    { q: 'When the AI proudly provides a "Fix" for your bug, what is your absolute strict responsibility?', options: ['Restart the PC', 'Do NOT blindly paste it to make the red text go away. You must aggressively radically read their explanation and thoroughly fundamentally understand exactly *why* the bug occurred so you never deeply write it again.', 'To write CSS over it', 'To format the database'], answer: 1 }
  ]
};

// Export to global scope
// Note: We'll overwrite window.LESSONS at the very end.

// ════════════ PHASE 11: Vibe Coding Mastery (Part 2) ════════════

LESSONS['11-6'] = {
  title: 'AI Code Refactoring',
  emoji: '🧹',
  tags: ['Refactoring', 'Clean Code', 'Optimization'],
  intro: `Getting code to "just work" is only phase one. Phase two is **Refactoring**: making the code profoundly clean, heavily readable, and wildly performant. AI does this better than almost anyone.`,
  sections: [
    {
      title: '🚿 The Clean Code Prompt',
      body: `You paste a massive, incredibly ugly 200-line React component into the AI. You explicitly command it to chop it into 3 smaller Custom Hooks, purely optimize the ` + '`' + `useEffect` + '`' + ` dependencies, and aggressively add TypeScript.`,
      code: { lang: 'markdown', src: `The Master Refactor Prompt:

"Refactor this massive, utterly chaotic React component to follow absolute modern best practices.
- Separate the raw fetching logic into a clean Custom Hook.
- Remove any stale closures or missing dependencies in the useEffect.
- Add strict JSDoc comments to everything.
- Do NOT alter any of the public UI or break the existing CSS structure.

[Paste 200 lines of spaghetti code here]"` }
    }
  ],
  realLife: `Refactoring manually is like meticulously taking apart an engine block piece-by-piece to clean every single gear with a toothbrush, hoping you remember how to reassemble it. AI Refactoring is simply handing the dirty engine to an elite NASCAR mechanic, closing your eyes for 5 seconds, and opening them to a perfectly shining, upgraded engine that runs twice as fast.`,
  youtube: [
    { title: 'AI Refactoring Guide', channel: 'Web Dev Simplified', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the absolute fundamental purpose of "Refactoring" code?', options: ['To change what the application visually does completely', 'To aggressively clean, perfectly restructure, and massively optimize existing code without fundamentally changing its external behavior', 'To explicitly delete the database', 'To change the CSS colors wildly'], answer: 1 },
    { q: 'Before you aggressively command an AI to fiercely refactor your huge component, what is a highly critical absolute best practice?', options: ['Delete the file', 'Uninstall Node', 'Always absolutely ensure the current chaotic code actually *works* natively and commit it to Git first, so if the AI ruins it, you can instantly revert', 'Change your password'], answer: 2 },
    { q: 'What specific powerful architecture pattern can you heavily instruct the AI to use when refactoring a massive React component?', options: ['Using `var` everywhere', 'Using SQL', 'Extracting messy complex state logic entirely into clean, isolated `useCustomHooks`', 'Using `document.getElementById`'], answer: 2 },
    { q: 'If your `useEffect` is currently fiercely causing a massive infinite loop that crashes the browser, how should you structure the prompt?', options: ['Tell it to delete React', 'Explicitly brilliantly prompt: "This useEffect is causing an infinite loop. Analyze the dependency array natively and rewrite the logic to fiercely prevent stale closures."', 'Say "Please fix"', 'Use CSS instead'], answer: 1 },
    { q: 'Why must you still rigorously test the application violently after an AI refactor, even if the code looks pristine?', options: ['Because the AI might have accidentally wildly stripped out a critical microscopic edge-case logic check that completely breaks a specific button', 'Because AI deletes CSS', 'Because Node will crash', 'Because MongoDB prevents AI'], answer: 0 }
  ]
};

LESSONS['11-7'] = {
  title: 'Database Design with AI',
  emoji: '🗄️',
  tags: ['Database', 'Schema', 'MongoDB'],
  intro: `Designing a scalable Database Schema from entirely scratch is incredibly intimidating. AI acts as an elite Database Architect, instantly structuring massive MongoDB models perfectly.`,
  sections: [
    {
      title: '🏗️ From Nouns to Schemas',
      body: `You wildly describe the raw business logic in plain English. The AI systematically produces the exact Mongoose schema code, perfectly handling relationships, rigorous validations, and advanced indexing.`,
      code: { lang: 'markdown', src: `The Architect Schema Prompt:

"I am building an E-Commerce system. I incredibly need a MongoDB Mongoose Schema for a 'Product'.
Requirements:
- Name, Description, Price (must be > 0).
- An Array of 'Reviews' (each has a rating 1-5 and user reference).
- Timestamps natively included.
- A virtual property combining Price + Tax.

Generate the exact raw Mongoose code with extreme validation constraints."` }
    }
  ],
  realLife: `Building a database manually is like acting as an aggressive city planner, tediously drawing water pipes to 10,000 houses by hand and hoping they don't leak. Asking an AI to design the Schema is like aggressively feeding the raw city requirements into a massive mainframe that instantly draws flawless, perfectly pressurized pipe blueprints for the entire grid in 3 seconds.`,
  youtube: [
    { title: 'MongoDB Schema Design with AI', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'When incredibly using AI to deeply design a massive MongoDB Schema, what explicit things should you fiercely demand in your prompt?', options: ['To format my C: drive', 'Rigorous extreme validation rules (e.g., price > 0), relationship structures natively, and required indexing fields so the database scales brilliantly', 'To write CSS', 'To create a React component'], answer: 1 },
    { q: 'Why is AI profoundly superior at establishing Mongoose specific syntax formats than a beginner?', options: ['Because it hates SQL', 'Because it absolutely never historically forgets completely necessary configuration boilerplates like `{ timestamps: true }` or the fierce exact syntax for deep Object ID referencing', 'Because it uses Python', 'Because it is faster than Chrome'], answer: 1 },
    { q: 'What is extremely dangerous about wildly accepting an AI Schema without rigorous review?', options: ['It uses too much CSS', 'The AI absolutely has zero context about how fast your specific startup will scale. It might completely neglect to denormalize heavy arrays, which forcefully causes a profound database crash at 100,000 users.', 'It deletes the HTML perfectly', 'It breaks Github natively'], answer: 1 },
    { q: 'If you want a specifically complex relationship where "Users have 1000s of Posts", what should you tell the AI?', options: ['Write it in CSS', 'Use a massive Array entirely', 'Explicitly absolutely tell the AI: "Optimize the fierce relation for performance, placing the User ID perfectly on the Post Document instead of storing a massive array of 10000 object IDs on the User"', 'Delete the database'], answer: 2 },
    { q: 'What critical security piece must you rigorously ensure the AI includes in the User Schema specifically?', options: ['CSS styling perfectly', 'HTML tags solely', 'Deep configurations that forcefully hash passwords (like `bcrypt` pre-save hooks) and aggressively strip passwords from all raw JSON queries (`select: false`)', 'React Hooks only'], answer: 2 }
  ]
};

LESSONS['11-8'] = {
  title: 'Generating Tests with AI',
  emoji: '🧪',
  tags: ['Testing', 'Jest', 'Automation'],
  intro: `Nobody fiercely enjoys manually writing tedious Unit Tests. Fortunately, strictly writing test boilerplate is what AI is arguably the absolute best in the entire world at doing.`,
  sections: [
    {
      title: '🛡️ The Automatic Shield',
      body: `You absolutely paste an insanely complex function into the AI. You violently command it to generate a comprehensive Jest test suite that actively covers the happy path and 15 destructive edge cases.`,
      code: { lang: 'markdown', src: `The Brutal Test Prompt:

"Here is my complex 'calculateTaxes' function.
[Paste Function]

Write a complete Jest unit test file that aggressively aims for 100% coverage.
Requirements:
1. Specifically test deeply null inputs, strings instead of numbers, and massive numbers.
2. Mock out the absolutely external 'fetchTaxAPI' dependency perfectly.
3. Heavily comment the exact intent of each specific test case."` }
    }
  ],
  realLife: `Writing manual tests is like building a heavily intricate robot and then spending exactly 4 straight weeks violently hitting it with baseball bats yourself to forcefully see if pieces fall off. Using AI to generate tests is like instantly pressing a red button that brilliantly spawns 5,000 automated specialized robot-smashing machines that completely comprehensively test every square inch of armor in 4 seconds.`,
  youtube: [
    { title: 'Automated Testing Setup', channel: 'Academind', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'Why is fiercely generating heavy Unit Tests considered one of the absolute greatest use-cases for AI?', options: ['Because tests use CSS', 'Tests are highly repetitive, logically predictable, deeply syntax-heavy, and fiercely require extreme comprehensive coverage of edge-cases, which AIs brilliantly instantly compute', 'Because tests delete code', 'Because it changes HTML natively'], answer: 1 },
    { q: 'If your exact function fiercely relies on a deep API network call, what must you entirely command the AI to do in the test?', options: ['Delete the network entirely', 'Write HTML directly', 'Aggressively perfectly `mock` the exact external network API completely so the local test runs fiercely fast and entirely independently of the actual internet', 'Use a different language entirely'], answer: 2 },
    { q: 'What exact specific testing framework explicitly heavily popular in React/Node ecosystems should you instruct the AI to use commonly?', options: ['Photoshop natively', 'Bootstrap only', 'Jest strictly', 'CSS entirely'], answer: 2 },
    { q: 'What is a "Happy Path" test that the AI should absolutely cover completely first?', options: ['A deeply broken function perfectly', 'Testing the scenario powerfully where absolutely everything works flawlessly and precisely perfectly as wildly intended with perfect input data', 'Deleting the entire CSS violently', 'Closing the browser heavily'], answer: 1 },
    { q: 'What devastatingly dangerous edge-cases should you aggressively precisely instruct the AI test suite to actively attempt to break?', options: ['Only correct numbers fully', 'It should wildly test `null`, `undefined`, massive negative numbers, broken strings, and fiercely malformed deeply nested objects to actively ensure the app never crashes natively', 'Testing if CSS is blue explicitly', 'Testing if HTML is strong loudly'], answer: 1 }
  ]
};

LESSONS['11-9'] = {
  title: 'AI for Code Review',
  emoji: '👀',
  tags: ['Review', 'Security', 'Best Practices'],
  intro: `Before you ferociously push code to Production, it must flawlessly pass Code Review. Instead of waiting purely for a Senior Engineer, you can use the AI as a hyper-intelligent, absolutely sleepless Security Auditor.`,
  sections: [
    {
      title: '🕵️ The Unforgiving Auditor',
      body: `You paste the entire unified chunk of code you drastically altered. You explicitly demand the AI scan it entirely aggressively for immense Security flaws, hidden performance entirely bottlenecks, and massive unhandled deeply nested exceptions.`,
      code: { lang: 'markdown', src: `The Ultimate Review Prompt:

"I drastically wrote this massive Express Login Route entirely by hand.
Act as an absolutely elite Cybersecurity Expert purely reviewing this PR.
Scan intensely explicitly for:
1. Any hidden SQL/NoSQL Injection vulnerabilities heavily.
2. Complete catastrophic Missing Error Handling completely.
3. Massive inefficient Database N+1 Queries absolutely.
4. Brutal violations of strict REST standards completely.

Do NOT rewrite the exact code freely yet. Just violently list every flaw you profoundly find."` }
    }
  ],
  realLife: `Pushing unreviewed code purely is dramatically like writing a massive novel completely blindly and aggressively sending it straight entirely to the Publisher with zero deeply spellchecking. AI Code Review is violently hiring 15 elite Oxford professors to brutally read every single sentence of your novel purely instantly to explicitly aggressively point out every plot hole completely natively before submission.`,
  youtube: [
    { title: 'Secure Coding Practices', channel: 'NetworkChuck', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is absolutely the brilliant primary incredible advantage of aggressively deeply using AI for Code Review specifically?', options: ['It writes CSS precisely', 'It actively drastically serves as a completely utterly unforgiving, instantaneous Senior purely Security Auditor that heavily catches brutal silent bugs before you deeply push to production completely', 'It strictly formats your hard drive fully', 'It perfectly deletes Windows natively'], answer: 1 },
    { q: 'What exactly deeply specific highly profound vulnerability should you explicitly heavily demand the AI explicitly check fundamentally when profoundly reviewing Backend routing entirely?', options: ['If the CSS completely uses Flexbox purely', 'If the HTML firmly uses `<h1>` precisely', 'Absolutely intense Security flaws wildly, totally like NoSQL Injection heavily, unhashed passwords firmly, deeply missing Authorization completely, and completely insecure purely JWT handling', 'If React deeply renders perfectly'], answer: 2 },
    { q: 'Why should you entirely purposefully specifically instruct the AI totally: "Do completely NOT freely rewrite the native code purely entirely yet. Just violently critically list the flaws"?', options: ['It uses too entirely much CSS natively', 'Because immediately forcing the absolute AI to wildly heavily overwrite your profoundly complex code completely can strictly drastically introduce massive new bugs explicitly entirely. Knowing the absolute explicit exact "WHY" deeply is completely fundamentally important strictly first.', 'AI hates completely writing deeply React natively', 'Because HTML explicitly crashes heavily'], answer: 1 },
    { q: 'What specific exact brutal massive performance flaw exactly highly incredibly often explicitly heavily discovered blindly in complex databases specifically should you heavily profoundly explicitly tell the AI to furiously purely audit completely deeply?', options: ['If the DOM explicitly loads totally slowly purely', 'N+1 Database query drastically massively bottlenecks entirely strictly completely', 'If the CSS natively renders blue strongly specifically entirely', 'If the React highly completely strictly crashes purely loudly'], answer: 1 },
    { q: 'If the exact purely rigorous AI perfectly Code Review violently strictly finds natively absolutely zero profound errors effectively completely natively, what heavily deeply absolutely intensely should you strictly fully totally correctly comprehensively heavily natively still deeply completely precisely purely highly definitely actively perfectly strictly completely totally explicitly do deeply?', options: ['Delete the specific exactly code perfectly highly entirely entirely', 'Explicitly completely deeply absolutely completely format the specifically exactly completely purely drive intensely', 'Actively still exactly entirely fully profoundly rigorously manually natively test the specifically completely explicit codebase heavily entirely perfectly completely yourself heavily strictly thoroughly! AI perfectly explicitly massively fully strictly natively completely genuinely deeply misses subtle exact context purely strictly completely intensely completely purely precisely carefully strongly sometimes strictly completely.', 'Just deeply totally sleep heavily precisely explicitly'], answer: 2 }
  ]
};

// Export to global scope
// Note: We'll overwrite window.LESSONS at the very end.

LESSONS['11-10'] = {
  title: 'Building with Cursor IDE',
  emoji: '💻',
  tags: ['Cursor', 'IDE', 'Productivity'],
  intro: `VS Code is amazing, but **Cursor** is an aggressively powerful fork of VS Code built entirely from the absolute ground up specifically to be an AI-First code editor.`,
  sections: [
    {
      title: '🎯 The Context Engine',
      body: `Cursor's profound superpower is codebase indexing. If you explicitly press ` + '`' + `Cmd+K` + '`' + ` and aggressively say "Update my Checkout Flow to use Stripe", it automatically deeply reads all your folders natively to generate a perfectly integrated solution.`,
      code: { lang: 'markdown', src: `The Essential Cursor Shortcuts:

Cmd + K (Ctrl + K): The Generate command. Highlight any block of code, press Cmd+K, and tell it specifically what to rewrite.
Cmd + L (Ctrl + L): The Chat command. Opens a sidebar chat that is context-aware of your entire open file.
@ Symbols: Use \`@filename\` exclusively loudly in the Chat to physically force the AI to read an explicit distinct file before answering.` }
    }
  ],
  realLife: `Standard VS Code with an AI extension is like bolting a jet engine onto a Toyota Camry. Cursor is fundamentally designing the absolute precise F-22 Fighter Jet entirely around the brilliant engine from completely day one.`,
  youtube: [
    { title: 'Cursor IDE Complete Setup', channel: 'Fireship', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the brilliant Cursor IDE fundamentally?', options: ['A website purely', 'A massively powerful, heavily modified explicit fork of VS Code natively built entirely from the ground up to aggressively integrate deep Codebase AI', 'A new React framework', 'A CSS preprocessor'], answer: 1 },
    { q: 'What profound advantage does Cursor have over using standard ChatGPT in the browser?', options: ['It uses CSS totally', 'It physically aggressively rigorously indexes and mathematically reads your entire local codebase heavily, so it inherently fundamentally completely understands your custom architecture context', 'It uninstalls React totally', 'It formats drives heavily'], answer: 1 },
    { q: 'When using Cursor, what symbol do you intensely type to aggressively force the AI to read an explicit separate file?', options: ['The @ strictly Symbol', 'The # totally', 'The % strictly', 'The $ natively'], answer: 0 },
    { q: 'What is the intense profound shortcut to heavily seamlessly trigger the brilliantly aggressively "Generate Code" inline box?', options: ['Cmd + P', 'Cmd + K', 'Cmd + C', 'Cmd + V'], answer: 1 },
    { q: 'Is it completely safe to massively blindly deploy AI generated code directly to production seamlessly?', options: ['Yes', 'Absolutely never without rigorous aggressive review explicitly strictly locally deeply comprehensively', 'Always', 'Only natively'], answer: 1 }
  ]
};

LESSONS['11-11'] = {
  title: 'Modern Vibe Coding Workflow',
  emoji: '🌊',
  tags: ['Workflow', 'Vibe'],
  intro: `Vibe coding is the absolute pinnacle of full-stack engineering. It represents the perfect synergy of human architectural intelligence and relentless AI execution speed.`,
  sections: [
    {
      title: '🏄 The Code Surfer',
      body: `You don't fight the syntax wave; you ride perfectly on top of it. You set the exact constraints, structure the strict interfaces, prompt heavily, and let the AI furiously paddle the surfboard.`,
      code: { lang: 'markdown', src: `The Ultimate Truths of Vibe Coding:
1. AI will absolutely NOT replace developers seamlessly.
2. Developers actively using AI will seamlessly replace those who don't.
3. You must aggressively review everything the AI writes.` }
    }
  ],
  realLife: `Vibe coding is like being the brilliant charismatic Director of an incredibly high-budget blockbuster film. You brutally design the massive overarching creative vision, and your AI assistant perfectly executes the CGI and raw camera work instantly.`,
  youtube: [
    { title: 'The Vibe Coding Workflow', channel: 'Theo - t3.gg', url: 'https://youtu.be/k-0ZVUTflVE' }
  ],
  exam: [
    { q: 'What is the absolute core reality of Vibe Coding and AI development?', options: ['AI replaces the developer entirely', 'The developer acts as the Architect and Editor while the AI acts as a high-speed execution compiler', 'Vibe coding uses only CSS', 'It makes coding slower'], answer: 1 },
    { q: 'Will AI purely and flawlessly replace human developers organically tomorrow?', options: ['Yes', 'No, but developers actively rigorously using AI will gracefully replace developers who stubbornly refuse to adapt', 'AI hates React', 'AI cannot write HTML'], answer: 1 },
    { q: 'What is your absolute final, ultimate, rigorous responsibility as an Elite Full-Stack Vibe Coder?', options: ['To memorize all CSS classes correctly', 'To explicitly confidently review, deeply intuitively understand, and relentlessly test every single line of code that enters your production pipeline cleanly', 'To write raw Assembly only', 'To use SVGs uniquely'], answer: 1 },
    { q: 'Which Phase officially spectacularly marks the true end of the EduStack learning curriculum perfectly?', options: ['Phase 1', 'Phase 6', 'Phase 9', 'Phase 11: Vibe Coding Mastery'], answer: 3 },
    { q: 'What should you cleanly do exactly immediately after aggressively completely successfully graduating from EduStack seamlessly?', options: ['Stop coding automatically', 'Go forth fearlessly cleanly into the wild securely and boldly magically dynamically build the absolute next generation of flawlessly incredible internet applications successfully!', 'Format your explicitly Windows securely completely drive perfectly', 'Only write properly natively HTML fluently perfectly effectively'], answer: 1 }
  ]
};

window.LESSONS = LESSONS;
