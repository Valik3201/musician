const context = {
  prefix1: "Let's",
  mainTitle: "Explore",
  prefix2: "Unique",
  subTitle: "Melodies.",
  buttonText: "Shop Now",
  imgAlt: "Guitars",
  body: "Join us in delivering the euphoric vibrations of melodia to the citizens of the world!",
  text: "Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. ",
  instruments: [
    {
      image: "assets/electronic-keyboard.jpg",
      name: "Electronic Keyboard",
      description:
        "A piano welcomed to the 21th century. Pianists celebrate the compact form factor and the diversity of synthesized rhythms all in one masterful musical machine.",
      price: "$1,999.00",
      sale: "$1,699.89",
    },
    {
      image: "assets/electric-guitar.jpg",
      name: "Electric Guitar",
      description:
        "Join the legends of the '50s and '60s when the marriage of guitar and electricity created the most influential instrument of a generation. Note: picks sold separately.",
      price: "$599.99",
    },
    {
      image: "assets/bass-guitar.jpg",
      name: "Bass Guitar",
      description:
        "Experience the embodiment of funkadelic frequencies that is the bass guitar. Let the deep low notes of the bass guitar resonate with heartbeats everywhere.",
      price: "$624.99",
    },
    {
      image: "assets/drum-kit.jpg",
      name: "Drum Kit",
      description:
        'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. Coordinate a collections of drums and cymbals to dictate the rhythm of musical masterpiece.',
      price: "$649.00",
      sale: "$349.00",
    },
    {
      image: "assets/violin.jpg",
      name: "Violin",
      description:
        "A versatile instrument that is suited for any and all occasions. Those wearing tuxedos can strum together a classic. Others who prefer overalls can call it a fiddle and play some folk songs.",
      price: "$245.00",
    },
  ],
};

const templateElement = document.getElementById("templateHB");
const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById("information").innerHTML = compiledHtml;
