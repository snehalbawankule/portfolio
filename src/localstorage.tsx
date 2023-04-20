export function Posts() {
  var Experience = [
    {
      id: "1",
      projectName: "Kingdom maker web portal",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing",
      date: "1, Oct. 2022",
      content:
        "I am excited to continue growing my skills as a Full-Stack Web Developer and contribute to a dynamic team that values creativity, collaboration, and innovation.In brief, te mummification process may be summarized as follows: extract, sterilize, dehydrate, perfume, seal, tag, and stock. All were done ceremoniously and with due respect to the dead body. The viscera were extracted through an incision about 10 inches long, usually made in the left side of the abdomen. Through this incision, all the “floating” contents of the abdominal cavity, namely, the stomach, the liver, the spleen, and the intestines, were removed but the kidneys were left in place. The diaphragm was then cut and the thoracic contents removed through the abdominal incision. The heart, which was considered the center of emotions and the seat of conscience, was left in place. The ancient Egyptians seem to have attached no importance to the brain, which was removed through the ethmoid bone. Following these extractions began the slow process of sterilization and dehydration of the body, accomplished by osmosis with dry natron. Resterilization of the cavities, perfuming, closing the incision, and wrapping the body with linen and with beeswax completed the process. Molten resin was used to seal the body and its wrappings, providing a barrier against insects and anaerobes.",
      url: "https://www.shutterstock.com/image-photo/picnic-blanket-delicious-food-juice-600w-1892753392.jpg",
    },
    {
      id: "2",
      projectName: "Article Blog",
      description:
        "I have created Article Blog using React TypeScript, Redux store, Node.js Express and MYSQL. In front-end I have created multiple functional components registration, login, Home page containes articles and each article can be like, comment and update by respective users. For Back-end I have used express.js and saving data in MySQL database",
      date: "1, Oct. 2022",

      url: "https://www.shutterstock.com/image-photo/picnic-blanket-delicious-food-juice-600w-1892753392.jpg",
      content:
        "I am excited to share that I have recently created an Article Blog using a combination of React, TypeScript, Redux store, Node.js Express, and MYSQL. This project showcases my skills in creating a full-stack web application with a modern tech stack. On the front-end, I have used React to create multiple functional components, including registration, login, and a home page that contains articles. Each article can be liked, commented on, and updated by respective users. The use of TypeScript has helped me ensure type safety and improve the maintainability of the codebase. Additionally, I have used Redux to manage the application state and improve its performance. On the back-end, I have used Express.js to handle server requests and interact with the MYSQL database. The database is used to store user data, article data, and any associated comments or likes. Using MYSQL has allowed me to store data in a structured manner and retrieve it efficiently when needed. Overall, this project has been a great opportunity for me to showcase my skills in creating a full-stack web application. I am proud of the end result and excited to continue building on it in the future.",
    },
    {
      id: "3",
      projectName: "Accusamus beatae ad facilis cum similique qui sunt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis urna imperdiet netus nibh at fermentum mattis. Amet adipiscing",
      date: "1, Oct. 2022",
      content:
        "In brief, the mummification process may be summarized as follows: extract, sterilize, dehydrate, perfume, seal, tag, and stock. All were done ceremoniously and with due respect to the dead body. The viscera were extracted through an incision about 10 inches long, usually made in the left side of the abdomen. Through this incision, all the “floating” contents of the abdominal cavity, namely, the stomach, the liver, the spleen, and the intestines, were removed but the kidneys were left in place. The diaphragm was then cut and the thoracic contents removed through the abdominal incision. The heart, which was considered the center of emotions and the seat of conscience, was left in place. The ancient Egyptians seem to have attached no importance to the brain, which was removed through the ethmoid bone. Following these extractions began the slow process of sterilization and dehydration of the body, accomplished by osmosis with dry natron. Resterilization of the cavities, perfuming, closing the incision, and wrapping the body with linen and with beeswax completed the process. Molten resin was used to seal the body and its wrappings, providing a barrier against insects and anaerobes.",
      url: "https://www.shutterstock.com/image-photo/picnic-blanket-delicious-food-juice-600w-1892753392.jpg",
    },
  ];

  const experience = localStorage.getItem("experience");
  if (!experience) {
    localStorage.setItem("experience", JSON.stringify(Experience));
  }

  return <></>;
}
