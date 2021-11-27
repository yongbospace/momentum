const quotes = [
  {
    quote:
      "Yoga is a light, which once lit will never dim.The better your practice, the brighter your flame.",
    author: "B.K.S. Iyengar",
  },
  {
    quote:
      "Move your joints every day. You have to find your own tricks. Bury your mind deep in your heart, and watch the body move by itself.",
    author: "Sri Dharma Mittra",
  },
  {
    quote:
      "The nature of yoga is to shine the light of awareness into the darkest corners of the body.",
    author: "Jason Crandell",
  },
  {
    quote:
      "True yoga is not about the shape of your body, but the shape of your life. Yoga is not to be performed; yoga is to be lived. Yoga doesn’t care about what you have been; yoga cares about the person you are becoming. Yoga is designed for a vast and profound purpose, and for it to be truly called yoga, its essence must be embodied.",
    author: "Aadil Palkhivala",
  },
  {
    quote:
      "I had discovered something; there was a pleasure in becoming something new. You could will yourself into a fresh shape. Now all I had to do was figure out how to do it out there, in my life.",
    author: "Claire Dederer",
  },
  {
    quote:
      "Yoga is not a work-out, it is a work-in. And this is the point of spiritual practice to make us teachable; to open up our hearts and focus our awareness so that we can know what we already know and be who we already are.",
    author: "Rolf Gates",
  },
  {
    quote:
      "Change only happens in the present moment. The past is already done. The future is just energy and intention.",
    author: "Kino MacGregor",
  },
  {
    quote:
      "I think it’s interesting that the opposite of being active in yoga is not being passive. It’s being receptive.",
    author: "Cyndi Lee",
  },
  {
    quote:
      "Learning to be present with yourself and to abide in that which is steady and comfortable does not allow space for self-judgment. When you live this way, you are practicing yoga: you are living fully.",
    author: "Judith Hanson Lasater",
  },
  {
    quote:
      "Yoga begins with listening. When we listen, we are giving space to what is.",
    author: "Richard Freeman",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;
