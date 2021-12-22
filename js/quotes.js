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
    quote: "Yoga is the perfect opportunity to be curious about who you are.",
    author: "Jason Crandell",
  },
  {
    quote:
      "The very heart of yoga practice is ‘abyhasa’ – steady effort in the direction you want to go.",
    author: "Sally Kempton",
  },
  {
    quote:
      "In asana practice we learn to cherish each breath, to cherish every cell in our bodies. The time we spend on the mat is love in action",
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
      "Remember, it doesn’t matter how deep into a posture you go – what does matter is who you are when you get there.",
    author: "Max Strom",
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
