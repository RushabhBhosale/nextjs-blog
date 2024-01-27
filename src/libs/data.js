const users = [
   { id: 1, name: "Rushabh" },
   { id: 2, name: "Rohan" },
   { id: 3, name: "John" },
   { id: 4, name: "James" },
   { id: 5, name: "Raj" },
   { id: 6, name: "Sunny" },
   { id: 7, name: "Sunny" },
   { id: 8, name: "Sunny" },
   { id: 9, name: "Sunny" },
   { id: 10, name: "Sunny" },
];

const posts = [
   {
      id: 1,
      title: "Introduction to Front-End Web Development",
      body: "Front-end web development is the art of creating a user interface and experience that captivates visitors. This blog delves into the basics of front-end development, highlighting the essential technologies like HTML, CSS, and JavaScript. Learn how these languages work together to shape the visual aspects of a website and enhance user interaction.Front-end web development is the art of creating a user interface and experience that captivates visitors. This blog delves into the basics of front-end development, highlighting the essential technologies like HTML, CSS, and JavaScript. Learn how these languages work together to shape the visual aspects of a website and enhance user interaction.Front-end web development is the art of creating a user interface and experience that captivates visitors. This blog delves into the basics of front-end development, highlighting the essential technologies like HTML, CSS, and JavaScript. Learn how these languages work together to shape the visual aspects of a website and enhance user interaction.Front-end web development is the art of creating a user interface and experience that captivates visitors. This blog delves into the basics of front-end development, highlighting the essential technologies like HTML, CSS, and JavaScript. Learn how these languages work together to shape the visual aspects of a website and enhance user interaction.",
      img: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=996&t=st=1706283910~exp=1706284510~hmac=2f3aa149a478e77bb638a1f385790ff91874ac354d3f676813352913c32bd127"
   },
   {
      id: 2,
      title: "Responsive Design: Crafting Websites for Every Device",
      body: "In this blog, explore the significance of responsive design in front-end development. Learn how to create websites that adapt seamlessly to various screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones. Discover the importance of media queries and flexible grids to achieve a responsive layout.In this blog, explore the significance of responsive design in front-end development. Learn how to create websites that adapt seamlessly to various screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones. Discover the importance of media queries and flexible grids to achieve a responsive layout.In this blog, explore the significance of responsive design in front-end development. Learn how to create websites that adapt seamlessly to various screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones. Discover the importance of media queries and flexible grids to achieve a responsive layout.",
      img: "https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149488184.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=ais"
   },
   {
      id: 3,
      title: "CSS Flexbox and Grid: A Comprehensive Guide",
      body: "Dive into the world of layout design with this comprehensive guide on CSS Flexbox and Grid. Understand how these powerful layout systems can simplify the structure of your web pages, providing flexibility and control over the placement of elements. Learn to create sophisticated, responsive layouts with ease.Dive into the world of layout design with this comprehensive guide on CSS Flexbox and Grid. Understand how these powerful layout systems can simplify the structure of your web pages, providing flexibility and control over the placement of elements. Learn to create sophisticated, responsive layouts with ease.Dive into the world of layout design with this comprehensive guide on CSS Flexbox and Grid. Understand how these powerful layout systems can simplify the structure of your web pages, providing flexibility and control over the placement of elements. Learn to create sophisticated, responsive layouts with ease.",
      img: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=sph"
   },
   {
      id: 4,
      title: "JavaScript Fundamentals: Bringing Websites to Life",
      body: "Uncover the magic behind interactive websites by exploring the fundamentals of JavaScript. This blog covers the basics of variables, data types, and control structures, empowering you to add dynamic features to your web pages. Get ready to enhance user engagement with client-side scripting.Uncover the magic behind interactive websites by exploring the fundamentals of JavaScript. This blog covers the basics of variables, data types, and control structures, empowering you to add dynamic features to your web pages. Get ready to enhance user engagement with client-side scripting.Uncover the magic behind interactive websites by exploring the fundamentals of JavaScript. This blog covers the basics of variables, data types, and control structures, empowering you to add dynamic features to your web pages. Get ready to enhance user engagement with client-side scripting.",
      img: "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=sph"
   },
   {
      id: 5,
      title: "Optimizing Front-End Performance for Speedy Websites",
      body: "Speed matters in the digital world. This blog delves into techniques for optimizing front-end performance to ensure your website loads quickly. Explore strategies such as code minification, image optimization, and lazy loading to create a snappy and efficient user experience.Speed matters in the digital world. This blog delves into techniques for optimizing front-end performance to ensure your website loads quickly. Explore strategies such as code minification, image optimization, and lazy loading to create a snappy and efficient user experience.Speed matters in the digital world. This blog delves into techniques for optimizing front-end performance to ensure your website loads quickly. Explore strategies such as code minification, image optimization, and lazy loading to create a snappy and efficient user experience.Speed matters in the digital world. This blog delves into techniques for optimizing front-end performance to ensure your website loads quickly. Explore strategies such as code minification, image optimization, and lazy loading to create a snappy and efficient user experience.",
      img: "https://img.freepik.com/free-vector/laptop-with-rocket-illustration_1107-8.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=ais"
   },
   {
      id: 6,
      title: "The Power of CSS Preprocessors: SASS and LESS",
      body: "Take your styling skills to the next level with CSS preprocessors. This blog introduces SASS and LESS, powerful tools that extend the capabilities of standard CSS. Discover the advantages of variables, mixins, and nesting, and learn how these preprocessors can streamline your front-end development workflow.Take your styling skills to the next level with CSS preprocessors. This blog introduces SASS and LESS, powerful tools that extend the capabilities of standard CSS. Discover the advantages of variables, mixins, and nesting, and learn how these preprocessors can streamline your front-end development workflow.Take your styling skills to the next level with CSS preprocessors. This blog introduces SASS and LESS, powerful tools that extend the capabilities of standard CSS. Discover the advantages of variables, mixins, and nesting, and learn how these preprocessors can streamline your front-end development workflow.Take your styling skills to the next level with CSS preprocessors. This blog introduces SASS and LESS, powerful tools that extend the capabilities of standard CSS. Discover the advantages of variables, mixins, and nesting, and learn how these preprocessors can streamline your front-end development workflow.",
      img: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399292.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=ais"
   },
   {
      id: 7,
      title: "Web Accessibility: Designing for Everyone",
      body: "Learn about the importance of web accessibility in this blog. Understand the principles of inclusive design and discover techniques for creating websites that are usable by people of all abilities. Explore ARIA roles, semantic HTML, and other best practices to ensure your front-end code is accessible to everyone.Learn about the importance of web accessibility in this blog. Understand the principles of inclusive design and discover techniques for creating websites that are usable by people of all abilities. Explore ARIA roles, semantic HTML, and other best practices to ensure your front-end code is accessible to everyone.Learn about the importance of web accessibility in this blog. Understand the principles of inclusive design and discover techniques for creating websites that are usable by people of all abilities. Explore ARIA roles, semantic HTML, and other best practices to ensure your front-end code is accessible to everyone.Learn about the importance of web accessibility in this blog. Understand the principles of inclusive design and discover techniques for creating websites that are usable by people of all abilities. Explore ARIA roles, semantic HTML, and other best practices to ensure your front-end code is accessible to everyone.",
      img: "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040433.jpg?size=626&ext=jpg"
   },
   {
      id: 8,
      title: "Cross-Browser Compatibility & Consistent User Experience",
      body: "Achieve consistency across different web browsers with this blog on cross-browser compatibility. Explore common challenges developers face and learn strategies to write code that works seamlessly across various browsers. Discover the importance of testing and fallbacks to create a robust user experience.Achieve consistency across different web browsers with this blog on cross-browser compatibility. Explore common challenges developers face and learn strategies to write code that works seamlessly across various browsers. Discover the importance of testing and fallbacks to create a robust user experience.Achieve consistency across different web browsers with this blog on cross-browser compatibility. Explore common challenges developers face and learn strategies to write code that works seamlessly across various browsers. Discover the importance of testing and fallbacks to create a robust user experience.",
      img: "https://img.freepik.com/free-vector/flat-design-minimalistic-pop-up-set_23-2149128278.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=ais"
   },
   {
      id: 9,
      title: "Version Control in Front-End Development: A Git Primer",
      body: "Understand the importance of version control in collaborative development with this blog on Git. Learn the basics of Git and how it can revolutionize your front-end development workflow. Explore concepts like branching, merging, and pull requests to collaborate effectively with other developers.Understand the importance of version control in collaborative development with this blog on Git. Learn the basics of Git and how it can revolutionize your front-end development workflow. Explore concepts like branching, merging, and pull requests to collaborate effectively with other developers.Understand the importance of version control in collaborative development with this blog on Git. Learn the basics of Git and how it can revolutionize your front-end development workflow. Explore concepts like branching, merging, and pull requests to collaborate effectively with other developers.Understand the importance of version control in collaborative development with this blog on Git. Learn the basics of Git and how it can revolutionize your front-end development workflow. Explore concepts like branching, merging, and pull requests to collaborate effectively with other developers.",
      img: "https://img.freepik.com/free-vector/game-development-concept-creative-process-computer-video-game-design-digital-technology-programming-codding-testing-isolated-flat-vector-illustration_613284-3265.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=ais"
   },
   {
      id: 10,
      title: "Staying Current in Front-End: Trends and Technologies",
      body: "Wrap up your front-end journey with a look at the latest trends and technologies shaping the industry. From Progressive Web Apps (PWAs) to the rise of JavaScript frameworks like React, stay informed about the tools and practices that can elevate your front-end development skills in today's dynamic digital landscape.Wrap up your front-end journey with a look at the latest trends and technologies shaping the industry. From Progressive Web Apps (PWAs) to the rise of JavaScript frameworks like React, stay informed about the tools and practices that can elevate your front-end development skills in today's dynamic digital landscape.Wrap up your front-end journey with a look at the latest trends and technologies shaping the industry. From Progressive Web Apps (PWAs) to the rise of JavaScript frameworks like React, stay informed about the tools and practices that can elevate your front-end development skills in today's dynamic digital landscape.Wrap up your front-end journey with a look at the latest trends and technologies shaping the industry. From Progressive Web Apps (PWAs) to the rise of JavaScript frameworks like React, stay informed about the tools and practices that can elevate your front-end development skills in today's dynamic digital landscape.",
      img: "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg&uid=R90699410&ga=GA1.1.1852893792.1706184551&semt=sph"
   },
];

export const getPosts = async () => {
   return posts;
};

export const getPost = async (id) => {
   return posts.find((post) => post.id === parseInt(id));
}

export const getUser = async (id) => {
   return users.find((user) => user.id === parseInt(id));
}