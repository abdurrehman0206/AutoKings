function initArticles() {
  const articlesContainer = document.querySelector(".articles");

  const articlesData = [
    {
      title: "Importance of Regular Car Maintenance",
      date: "September 15, 2023",
      author: "John Doe",
      content: `Regular car maintenance is essential to ensure that your vehicle is running efficiently, safely, and reliably. By keeping your car in good condition, you can save money in the long run by avoiding costly repairs and extending the lifespan of your vehicle. Here are some reasons why regular car maintenance is important: Increases Safety Regular car maintenance helps to keep you and your passengers safe on the road. Faulty brakes, worn tires, and other mechanical problems can lead to accidents, putting you and others at risk. By having your car regularly serviced and maintained, you can identify and fix potential issues before they become major problems. Saves Money Preventative maintenance is more cost-effective than repairing major issues that could have been prevented with regular maintenance. Regular oil changes, for example, can prevent engine damage and prolong the life of your vehicle. Additionally, identifying and repairing small issues early on can prevent them from turning into larger, more expensive problems. Improves Performance Regular car maintenance can improve the performance of your vehicle, including fuel efficiency, acceleration, and handling. Simple tasks like replacing air filters and checking tire pressure can make a big difference in the overall performance of your car. Maintains Resale Value If you plan on selling your car in the future, regular maintenance can help maintain its resale value. A well-maintained vehicle will be more attractive to potential buyers, and they will be more likely to pay a higher price for a car that has been properly cared for. Extends the Life of Your Vehicle - Regular maintenance can help extend the life of your car, reducing the need for costly repairs and replacement parts. By keeping your car well-maintained, you can avoid the need for a new car and save money in the long run. In conclusion, regular car maintenance is essential to keep your car running smoothly, safely, and efficiently. By investing in regular maintenance, you can save money, improve the performance of your vehicle, and ensure that your car lasts for years to come.`,
    },
    {
      title: "7 Signs of Car Trouble",
      date: "August 25, 2023",
      author: "Jane Smith",
      content: `Car trouble can be frustrating and costly. It's essential to recognize the signs of potential issues early on to avoid breakdowns and expensive repairs. Here are seven common signs of car trouble to watch out for: Strange Noises: Unusual noises such as grinding, squealing, or knocking can indicate problems with various car components. Pay attention to these sounds and have them checked promptly. Warning Lights: Dashboard warning lights, such as the check engine light or ABS light, are signals that something may be wrong. Don't ignore them; get a diagnostic check. Difficulty Starting: If your car struggles to start or won't start at all, it could be due to issues with the battery, starter, or ignition system. Poor Fuel Efficiency: A sudden drop in fuel efficiency can indicate problems with the fuel system, air filters, or spark plugs. Vibrations: Excessive vibrations while driving can point to issues with the tires, wheels, or suspension system. Leaks: Fluid leaks, such as oil or coolant, are signs of potential problems. Address these leaks to prevent further damage. Overheating: An overheating engine can lead to severe damage. If your temperature gauge rises into the red zone, pull over and have it towed. Regular car maintenance and inspections can help identify and address these issues early, preventing more extensive damage and costly repairs. Don't ignore the signs; keep your car in good condition.`,
    },
    {
      title: "What to Do If Brakes Fail",
      date: "July 12, 2023",
      author: "David Wilson",
      content: `Brake failure can be a terrifying experience, but knowing how to react can save lives. If you ever find yourself in a situation where your brakes fail while driving, follow these steps: Stay Calm: Panicking won't help. Take a deep breath and stay as calm as possible. Pump the Brakes: Quickly pump the brake pedal to build up brake pressure. In some cases, this can restore partial braking power. Downshift: If you have a manual transmission, downshift to lower gears to slow down the vehicle. Use the Emergency Brake: Engage the emergency or parking brake slowly and steadily. This can provide some braking power. Steer Safely: Steer to a safe location away from traffic, if possible. Use your horn and flash hazard lights to alert other drivers. Call for Help: Dial 911 or the emergency services number in your area to report the situation. Brake failure is a severe emergency, and you'll need professional assistance. The best way to avoid brake failure is through regular brake maintenance and inspections. Have your brakes checked by a qualified technician regularly, and address any issues promptly to ensure your safety on the road.`,
    },
    {
      title: "Long Trips: Safety Tips for Holiday Travel",
      date: "June 5, 2023",
      author: "Emily Davis",
      content: `Holiday travel often involves long road trips to visit family and friends. Ensure your journey is safe and enjoyable with these holiday travel safety tips: Vehicle Check: Before hitting the road, have your vehicle inspected for any issues. Check tires, brakes, lights, and fluid levels. Pack Essentials: Carry essentials like a first-aid kit, flashlight, blankets, and emergency tools. Plan Stops: Plan rest stops along your route to avoid driver fatigue. Stay Hydrated: Dehydration can affect your focus and alertness. Drink water regularly. Follow Traffic Rules: Observe speed limits, use seat belts, and avoid distractions while driving. Prepare for Emergencies: Have a car charger for your phone, a spare tire, and jumper cables on hand. Secure Valuables: Don't leave valuables in your car, and keep your vehicle locked when parked. Stay Informed: Check weather and road conditions before your trip, and stay updated during the journey. Be Patient: Traffic and delays can be frustrating. Stay patient and focus on safe driving. Enjoy the Journey: Long trips can be an opportunity to bond with family and enjoy scenic routes. Make the most of it. Safe travels!`,
    },
    {
      title: "Car Facts You Should Know",
      date: "May 20, 2023",
      author: "Michael Johnson",
      content: `Cars are an integral part of modern life, but how much do you really know about them? Here are some interesting car facts: Invention Date: The first gasoline-powered car was built in 1885 by Karl Benz. Airbags: The first commercial car with airbags was the Oldsmobile Toronado in 1973. Traffic Jam: The longest traffic jam in history lasted for 12 days and stretched for over 62 miles in China. Speed Record: The Bugatti Chiron Super Sport 300+ holds the record for the fastest speed by a production car at 304 mph. Most Popular Color: White is the most popular car color globally. Recycling: About 80% of a car is recyclable. Autonomous Vehicles: Self-driving cars are becoming more common and may revolutionize the automotive industry. Electric Cars: Electric cars are growing in popularity due to their environmental benefits. Hopefully, these car facts add a little more fascination to your daily commute!`,
    },
    {
      title: "Do You Know Your Tyres?",
      date: "April 8, 2023",
      author: "Sarah Lee",
      content: `Your car's tires play a crucial role in safety and performance. Here are some essential things to know about your car's tires: Tire Types: There are various types of tires, including summer, winter, all-season, and performance tires. Choose the right type for your needs. Tire Tread: Check your tire tread depth regularly. Worn-out treads reduce traction and can be dangerous. Tire Pressure: Maintain proper tire pressure for optimal fuel efficiency and safety. Over-inflated or under-inflated tires can affect handling. Rotation: Regular tire rotation promotes even wear and extends tire life. Alignment: Proper wheel alignment prevents uneven tire wear and ensures straight steering. Sidewall Damage: Inspect tire sidewalls for cuts, bulges, or other damage. Such damage can lead to blowouts. Replacement: Replace tires when the tread is worn down to the wear bars, or if you notice damage or irregular wear. By taking care of your tires, you can enhance your car's safety and performance on the road. Don't forget to perform regular tire maintenance!`,
    },
  ];

  function generateArticleCards() {
    articlesData.forEach((article, index) => {
      const articleCard = document.createElement("div");
      articleCard.classList.add("article-card");

      const title = document.createElement("h3");
      title.textContent = article.title;

      const dateAuthor = document.createElement("p");
      dateAuthor.textContent = `${article.date} by ${article.author}`;

      const readArticleBtn = document.createElement("button");
      readArticleBtn.classList.add("read-article");
      readArticleBtn.textContent = "Read Article";

      readArticleBtn.addEventListener("click", () => {
        openArticlePopup(article);
      });

      articleCard.appendChild(title);
      articleCard.appendChild(dateAuthor);
      articleCard.appendChild(readArticleBtn);

      articlesContainer.appendChild(articleCard);
    });
  }

  function openArticlePopup(article) {
    const popup = document.getElementById("article-popup");
    const popupTitle = document.getElementById("popup-title");
    const popupDateAuthor = document.getElementById("popup-date-author");
    const popupContent = document.getElementById("popup-content");

    popupTitle.textContent = article.title;
    popupDateAuthor.textContent = `${article.date} by ${article.author}`;
    popupContent.textContent = article.content;

    popup.style.display = "flex";

    document.getElementById("close-popup").addEventListener("click", () => {
      popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  }

  generateArticleCards();
}

initArticles();
