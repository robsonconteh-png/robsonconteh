document.addEventListener("DOMContentLoaded", function () {

  const questionBank = {
    jss1:[
          {
      question: "What do traditional beliefs mainly explain?",
      options: ["Science experiments", "How humanity began", "Modern technology", "Trade systems"],
      answer: "How humanity began"
    },
    {
      question: "The Limba people believe that Kanu Masala came from where?",
      options: ["The sea", "The forest", "The sky", "The ground"],
      answer: "The sky"
    },
    {
      question: "According to Limba belief, the first humans were created near the:",
      options: ["River Niger", "Wara Wara Mountains", "Sahara Desert", "Atlantic Ocean"],
      answer: "Wara Wara Mountains"
    },
    {
      question: "The Limba wise person was chosen to be:",
      options: ["A farmer", "A soldier", "A leader", "A hunter"],
      answer: "A leader"
    },
        {
      question: "Which group believes all people are children of God?",
      options: ["Limba only", "Mende, Temne, Sherbro, Kono", "Yoruba only", "Greeks only"],
      answer: "Mende, Temne, Sherbro, Kono"
    },
    {
      question: "In Yoruba belief, the world originally contained only:",
      options: ["Fire", "Air", "Water", "Land"],
      answer: "Water"
    },
    {
      question: "The Yoruba supreme god is called:",
      options: ["Allah", "Kanu Masala", "Olorun", "Zeus"],
      answer: "Olorun"
    },
    {
      question: "Oduduwa was sent with how many chiefs?",
      options: ["10", "12", "16", "20"],
      answer: "16"
    },
    {
      question: "What helped scatter the sand in Yoruba creation story?",
      options: ["A snake", "A bird", "A fish", "A wind spirit"],
      answer: "A bird"
    },
    {
      question: "The Yoruba creation is associated with the city of:",
      options: ["Lagos", "Kano", "Ile-Ife", "Accra"],
      answer: "Ile-Ife"
    },
    {
      question: "Christianity teaches that God created the universe in:",
      options: ["3 days", "6 days", "7 days", "10 days"],
      answer: "6 days"
    },
    {
      question: "The first man in Christianity is:",
      options: ["Noah", "Abraham", "Adam", "Moses"],
      answer: "Adam"
    },
    {
      question: "Eve was created from:",
      options: ["Dust", "Fire", "Adam's rib", "Water"],
      answer: "Adam's rib"
    },
    {
      question: "In Islam, the first woman is called:",
      options: ["Eve", "Hawwa", "Mary", "Sarah"],
      answer: "Hawwa"
    },
    {
      question: "According to religion, all humans descended from:",
      options: ["Kings", "Angels", "Adam and his wife", "Animals"],
      answer: "Adam and his wife"
    },
    {
      question: "The theory of evolution was introduced by:",
      options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo"],
      answer: "Charles Darwin"
    },
    {
      question: "Darwin published his idea in:",
      options: ["1759", "1859", "1959", "1659"],
      answer: "1859"
    },
    {
      question: "Natural selection means:",
      options: [
        "Weak animals always survive",
        "Strong animals are protected by humans",
        "Best adapted organisms survive",
        "All animals survive equally"
      ],
      answer: "Best adapted organisms survive"
    },
    {
      question: "Variation refers to:",
      options: [
        "All organisms are identical",
        "Differences among individuals",
        "No reproduction",
        "Same environment everywhere"
      ],
      answer: "Differences among individuals"
    },
    {
      question: "Overproduction means organisms produce:",
      options: [
        "Few offspring",
        "Only one offspring",
        "More offspring than can survive",
        "No offspring"
      ],
      answer: "More offspring than can survive"
    },
 {
  question: "Traditional stories about the origin of man are also called:",
  options: ["Laws", "Myths and legends", "Experiments", "Theories"],
  answer: "Myths and legends"
},
{
  question: "In Christianity, Adam was formed from:",
  options: ["Water", "Dust", "Stone", "Fire"],
  answer: "Dust"
},
{
  question: "Hawwa (Eve) was created for Adam to be his:",
  options: ["Enemy", "Sister", "Companion", "Teacher"],
  answer: "Companion"
},
{
  question: "Charles Darwin's main idea is called:",
  options: ["Gravity", "Natural selection", "Relativity", "Photosynthesis"],
  answer: "Natural selection"
},
{
  question: "Survival of the fittest means:",
  options: [
    "Weakest survive",
    "Strongest always die",
    "Best adapted survive and reproduce",
    "All survive equally"
  ],
  answer: "Best adapted survive and reproduce"
},
{
  question: "Who suggested that humans originated in Africa in 1871?",
  options: ["Isaac Newton", "Charles Darwin", "Louis Pasteur", "Albert Einstein"],
  answer: "Charles Darwin"
},
{
  question: "Africa is called the cradle of humankind because:",
  options: [
    "It is the largest continent",
    "Humans first migrated there",
    "The oldest fossils were found there",
    "It has many deserts"
  ],
  answer: "The oldest fossils were found there"
},
{
  question: "Fossils are:",
  options: [
    "Living animals",
    "Modern tools",
    "Preserved remains of ancient life",
    "Human inventions"
  ],
  answer: "Preserved remains of ancient life"
},
{
  question: "An archaeologist studies:",
  options: [
    "Weather patterns",
    "Ancient bones and tools",
    "Modern machines",
    "Plants only"
  ],
  answer: "Ancient bones and tools"
},
{
  question: "A paleoanthropologist studies:",
  options: [
    "Rocks",
    "Ancient human fossils",
    "Oceans",
    "Plants"
  ],
  answer: "Ancient human fossils"
},
{
  question: "The Lucy skeleton was discovered in:",
  options: ["Nigeria", "Ethiopia", "Kenya", "Egypt"],
  answer: "Ethiopia"
   },
   {
  question: "Homo habilis is also known as:",
  options: ["Fire man", "Handyman", "Wise man", "Toolless man"],
  answer: "Handyman"
},
{
  question: "Homo erectus means:",
  options: ["Thinking man", "Upright man", "Modern man", "Ancient man"],
  answer: "Upright man"
},
{
  question: "Homo sapiens means:",
  options: ["Wise man", "Strong man", "Tall man", "Old man"],
  answer: "Wise man"
},
{
  question: "Modern humans are called:",
  options: ["Homo habilis", "Homo erectus", "Homo sapiens sapiens", "Neanderthals"],
  answer: "Homo sapiens sapiens"
},
{
  question: "Homo erectus was the first to:",
  options: ["Write books", "Migrate out of Africa", "Build cities", "Use computers"],
  answer: "Migrate out of Africa"
},
{
  question: "Fire was first used by:",
  options: ["Homo habilis", "Homo erectus", "Homo sapiens sapiens", "Australopithecus"],
  answer: "Homo erectus"
},
{
  question: "Early humans mainly ate:",
  options: ["Fast food", "Fruits and small animals", "Cooked rice", "Bread"],
  answer: "Fruits and small animals"
},
{
  question: "The brain controls the:",
  options: ["Heart only", "Entire body", "Bones only", "Skin only"],
  answer: "Entire body"
},
{
  question: "The brain weighs about:",
  options: ["0.5 kg", "1 kg", "1.5 kg", "5 kg"],
  answer: "1.5 kg"
},
{
  question: "Neurons are:",
  options: ["Blood cells", "Nerve cells", "Skin cells", "Bone cells"],
  answer: "Nerve cells"
},
{
  question: "The cerebrum controls:",
  options: ["Balance", "Breathing only", "Thinking and senses", "Heartbeat only"],
  answer: "Thinking and senses"
},
{
  question: "The cerebellum controls:",
  options: ["Vision", "Balance and coordination", "Speech", "Digestion"],
  answer: "Balance and coordination"
},
{
  question: "The medulla controls:",
  options: ["Learning", "Automatic body functions", "Writing", "Walking only"],
  answer: "Automatic body functions"
},
{
  question: "Humans and monkeys are similar because both are:",
  options: ["Birds", "Primates", "Fish", "Reptiles"],
  answer: "Primates"
},
{
  question: "Animals with backbones are called:",
  options: ["Insects", "Vertebrates", "Amphibians", "Molluscs"],
  answer: "Vertebrates"
},
{
  question: "Mammals are animals that:",
  options: [
    "Lay eggs only",
    "Give birth and breastfeed young",
    "Live in water only",
    "Have no bones"
  ],
  answer: "Give birth and breastfeed young"
},
{
  question: "One difference between humans and animals is that humans:",
  options: ["Cannot walk", "Do not breathe", "Use complex language", "Have no brains"],
  answer: "Use complex language"
},
{
  question: "All humans belong to:",
  options: [
    "Different races",
    "One species and one human race",
    "Different planets",
    "Animal groups"
  ],
  answer: "One species and one human race"
},
{
  question: "Dark skin in Africans developed mainly to protect against:",
  options: ["Cold weather", "Sunlight", "Rain", "Wind"],
  answer: "Sunlight"
},
{
  question: "Europe experienced steady population growth from A.D. 1 until the:",
  options: ["10th century", "15th century", "18th century", "21st century"],
  answer: "18th century"
},
{
  question: "Rapid population growth in Europe began after the:",
  options: ["Stone Age", "Agricultural and Industrial Revolutions", "Ice Age", "World Wars"],
  answer: "Agricultural and Industrial Revolutions"
},
{
  question: "Thomas Robert Malthus wrote:",
  options: [
    "Wealth of Nations",
    "Origin of Species",
    "Essay on the Principle of Population",
    "Human Development"
  ],
  answer: "Essay on the Principle of Population"
},
{
  question: "Malthus believed population grows faster than:",
  options: ["Education", "Food supply", "Technology", "Trade"],
  answer: "Food supply"
},
{
  question: "Africa is said to have small populations in some areas due to:",
  options: ["High rainfall", "High birth and death rates", "Too many industries", "Too much food"],
  answer: "High birth and death rates"
},
{
  question: "Rapid urban population growth in Africa leads to pressure on:",
  options: ["Oceans", "Housing and services", "Mountains", "Animals"],
  answer: "Housing and services"
},
{
  question: "Climate affects population mainly through:",
  options: ["Language", "Food production", "Clothing", "Religion"],
  answer: "Food production"
},
{
  question: "Disease reduces population by:",
  options: ["Increasing birth rate", "Causing deaths", "Increasing migration", "Improving health"],
  answer: "Causing deaths"
},
{
  question: "Wars mainly cause:",
  options: [
    "More farming",
    "Loss of lives and displacement",
    "Better housing",
    "Population increase"
  ],
  answer: "Loss of lives and displacement"
},
{
  question: "Improved food production leads to:",
  options: ["Lower population", "Higher population", "No change", "Migration only"],
  answer: "Higher population"
},
{
  question: "Early marriage usually leads to:",
  options: ["Fewer children", "More children", "No children", "No change"],
  answer: "More children"
},
{
  question: "Population refers to:",
  options: ["Animals in a forest", "Number of people in an area", "Buildings in a city", "Land size"],
  answer: "Number of people in an area"
},
{
  question: "Underpopulation means:",
  options: [
    "Too many people",
    "Too few people for available resources",
    "Balanced population",
    "No people"
  ],
  answer: "Too few people for available resources"
     },
     {
  question: "Optimum population is when:",
  options: [
    "People exceed resources",
    "Resources exceed people",
    "People match resources",
    "No resources exist"
  ],
  answer: "People match resources"
},
{
  question: "Overpopulation occurs when:",
  options: [
    "Resources are more than people",
    "People equal resources",
    "People exceed resources",
    "No people exist"
  ],
  answer: "People exceed resources"
},
{
  question: "One cause of overpopulation is:",
  options: ["Low birth rate", "High death rate", "High birth rate", "No marriage"],
  answer: "High birth rate"
},
{
  question: "Immigration means:",
  options: ["People leaving a country", "People entering a country", "Birth of children", "Death rate"],
  answer: "People entering a country"
},
{
  question: "Improved healthcare causes:",
  options: ["More deaths", "Lower population", "More survival", "No change"],
  answer: "More survival"
},
{
  question: "Economic activities attract people because of:",
  options: ["Poor roads", "Job opportunities", "Floods", "War"],
  answer: "Job opportunities"
},
{
  question: "Illiteracy can lead to:",
  options: ["Better planning", "Family planning", "Larger families", "Lower population"],
  answer: "Larger families"
},
{
  question: "Sierra Leone's population in 1963 was about:",
  options: ["1.1 million", "2.1 million", "3.5 million", "5.0 million"],
  answer: "2.1 million"
},
{
  question: "In 2017, the population was about:",
  options: ["3.5 million", "5.0 million", "7.0 million", "10 million"],
  answer: "7.0 million"
},
{
  question: "A densely populated area in Sierra Leone is:",
  options: ["Koinadugu", "Freetown", "Bonthe", "Pujehun"],
  answer: "Freetown"
},
{
  question: "Mining attracts people because of:",
  options: ["Poor roads", "Job opportunities", "Lack of water", "Cold weather"],
  answer: "Job opportunities"
},
{
  question: "One problem of densely populated areas is:",
  options: ["Too much land", "Unemployment", "No people", "Too many jobs"],
  answer: "Unemployment"
},
{
  question: "Overcrowding leads to:",
  options: ["Better health", "Disease spread", "No problems", "More land"],
  answer: "Disease spread"
},
{
  question: "Sparsely populated areas have:",
  options: ["Many industries", "Few people", "High population", "Many cities"],
  answer: "Few people"
},
{
  question: "One reason for sparse population is:",
  options: ["Good roads", "Few jobs", "High industry", "Good hospitals"],
  answer: "Few jobs"
},
{
  question: "Poor social services lead to:",
  options: ["More population", "Less population", "No change", "Urban growth"],
  answer: "Less population"
},
{
  question: "Population structure includes:",
  options: ["Rivers only", "Age, sex, occupation", "Roads only", "Weather"],
  answer: "Age, sex, occupation"
},
{
  question: "The largest age group in Sierra Leone population is:",
  options: ["Under 18", "18–59", "Above 60", "None"],
  answer: "Under 18"
},
{
  question: "A census is:",
  options: ["A guess of population", "Official counting of people", "A survey of animals", "A map study"],
  answer: "Official counting of people"
},
{
  question: "One importance of census is:",
  options: ["Entertainment", "Planning development", "Sports", "Farming only"],
  answer: "Planning development"
},
{
  question: "Census helps in:",
  options: ["Reducing population", "Resource distribution", "Creating weather", "Building animals"],
  answer: "Resource distribution"
},
{
  question: "One problem of census is:",
  options: ["Too easy", "High cost", "No data", "Too fast"],
  answer: "High cost"
},
{
  question: "De facto census counts people based on:",
  options: ["Birth place", "Where they are found", "Age", "Income"],
  answer: "Where they are found"
},
{
  question: "De jure census counts people based on:",
  options: ["Usual residence", "Temporary location", "Job type", "Gender"],
  answer: "Usual residence"
},
{
  question: "Sample surveys are:",
  options: ["Full population count", "Selected group study", "Only hospitals data", "Only census data"],
  answer: "Selected group study"
},
{
  question: "Statistics Sierra Leone is responsible for:",
  options: ["Farming", "Population statistics", "War planning", "School teaching"],
  answer: "Population statistics"
},
{
  question: "Immigration Department records:",
  options: [
    "Births only",
    "Deaths only",
    "People entering and leaving the country",
    "Farming data"
  ],
  answer: "People entering and leaving the country"
},
{
  question: "Communication is the exchange of:",
  options: ["Money and goods", "Thoughts, ideas and feelings", "Roads and buildings", "Food and water"],
  answer: "Thoughts, ideas and feelings"
},
{
  question: "Communication has how many main forms?",
  options: ["1", "2", "3", "4"],
  answer: "2"
},
{
  question: "Verbal communication uses:",
  options: ["Signs", "Speech", "Pictures", "Gestures only"],
  answer: "Speech"
},
{
  question: "Non-verbal communication includes:",
  options: ["Writing and gestures", "Only speech", "Only radio", "Only telephone"],
  answer: "Writing and gestures"
},
{
  question: "Which is verbal communication?",
  options: ["Newspaper", "Face to face speaking", "Sign language", "Pictures"],
  answer: "Face to face speaking"
},
{
  question: "Which is NOT verbal communication?",
  options: ["Radio", "Telephone", "Body gestures", "Television"],
  answer: "Body gestures"
},
{
  question: "Non-verbal communication includes:",
  options: ["Talking", "Writing and symbols", "Speaking loudly", "Singing"],
  answer: "Writing and symbols"
},
{
  question: "A newspaper is an example of:",
  options: ["Verbal communication", "Non-verbal communication", "Transport", "Trade"],
  answer: "Non-verbal communication"
},
{
  question: "Communication promotes education through:",
  options: ["Farming", "Radio and TV lessons", "Mining", "Fishing"],
  answer: "Radio and TV lessons"
},
{
  question: "Town criers belong to:",
  options: ["Modern communication", "Traditional communication", "Air transport", "Postal service"],
  answer: "Traditional communication"
},
{
  question: "Mass media is used to:",
  options: ["Build houses", "Inform many people", "Grow crops", "Repair roads"],
  answer: "Inform many people"
},
{
  question: "Which is print media?",
  options: ["Radio", "Television", "Magazine", "Telephone"],
  answer: "Magazine"
},
{
  question: "Electronic media includes:",
  options: ["Books", "Newspapers", "Radio", "Posters"],
  answer: "Radio"
},
{
  question: "Telecommunication means communication at a:",
  options: ["Short distance", "Distance", "Farm", "Market"],
  answer: "Distance"
},
{
  question: "Which is telecommunication?",
  options: ["Bicycle", "Telegraph", "Cart", "Boat"],
  answer: "Telegraph"
},
{
  question: "Mass media provides:",
  options: ["Entertainment only", "Information and entertainment", "Food", "Clothing"],
  answer: "Information and entertainment"
},
{
  question: "SALPOST is responsible for:",
  options: ["Roads", "Postal services", "Hospitals", "Schools"],
  answer: "Postal services"
},
{
  question: "Postal services deal with:",
  options: ["Building bridges", "Sending letters and parcels", "Farming", "Mining"],
  answer: "Sending letters and parcels"
},
{
  question: "One function of postal services is:",
  options: ["Selling food", "Sending telegrams", "Building houses", "Growing crops"],
  answer: "Sending telegrams"
},
{
  question: "Braille is used by the:",
  options: ["Deaf", "Blind", "Drivers", "Farmers"],
  answer: "Blind"
},

{
  question: "Transportation is the movement of:",
  options: ["Only goods", "Only people", "People, goods and services", "Only animals"],
  answer: "People, goods and services"
},
{
  question: "One importance of transportation is:",
  options: ["Stops trade", "Promotes trade", "Reduces population", "Stops movement"],
  answer: "Promotes trade"
},
{
  question: "Forms of transport are:",
  options: ["2", "3", "4", "5"],
  answer: "3"
},
{
  question: "Which is NOT a form of transport?",
  options: ["Land", "Water", "Air", "Communication"],
  answer: "Communication"
},
{
  question: "Walking is an example of:",
  options: ["Air transport", "Human power transport", "Water transport", "Rail transport"],
  answer: "Human power transport"
},
{
  question: "Beasts of burden include:",
  options: ["Cars", "Camels and horses", "Airplanes", "Trains"],
  answer: "Camels and horses"
},
{
  question: "Motor vehicles include:",
  options: ["Boats", "Cars and buses", "Canoes", "Ships"],
  answer: "Cars and buses"
},
{
  question: "A poda-poda is a:",
  options: ["Train", "Minibus", "Boat", "Bicycle"],
  answer: "Minibus"
},
{
  question: "Omolankay is a:",
  options: ["Push cart", "Plane", "Ship", "Taxi"],
  answer: "Push cart"
},
{
  question: "Motorcycles are used for:",
  options: ["Slow transport", "Quick transport", "Sea transport", "Rail transport"],
  answer: "Quick transport"
},
{
  question: "A major advantage of rail transport is:",
  options: ["Very expensive", "Carries large loads efficiently", "Very slow always", "Only for animals"],
  answer: "Carries large loads efficiently"
},
{
  question: "One disadvantage of rail transport is:",
  options: ["No rails needed", "Limited routes", "Very cheap always", "Can fly"],
  answer: "Limited routes"
},
{
  question: "Modern transport systems include:",
  options: ["Walking only", "Air, rail, road and water transport", "Only animals", "Only bicycles"],
  answer: "Air, rail, road and water transport"
},
{
  question: "Transportation reduces:",
  options: ["Trade", "Distance barriers", "Communication", "Population only"],
  answer: "Distance barriers"
},
{
  question: "A major problem of transport in Sierra Leone is:",
  options: ["Good roads everywhere", "Poor road conditions", "Too many airports", "Too many trains"],
  answer: "Poor road conditions"
},
{
  question: "Transport helps farmers by:",
  options: ["Destroying crops", "Moving goods to markets", "Reducing production", "Stopping farming"],
  answer: "Moving goods to markets"
},
{
  question: "One example of water transport in Sierra Leone is:",
  options: ["Canoes", "Motorcycles", "Trains", "Cars"],
  answer: "Canoes"
},
{
  question: "Air transport is commonly used for:",
  options: ["Very long distances", "Short village trips", "Walking distances", "Farming only"],
  answer: "Very long distances"
},
{
  question: "Communication and transport are important because they:",
  options: ["Slow down development", "Promote national development", "Stop movement", "Reduce education"],
  answer: "Promote national development"
},
{
  question: "The cheapest means of transport is often:",
  options: ["Air transport", "Water transport", "Walking (human transport)", "Rail transport"],
  answer: "Walking (human transport)"
   },
      ]
  };


  const level = document.body.getAttribute("data-level");
  let questions = questionBank[level];

  let time = 2400;
  let timer;

  if (!questions) return;

  loadQuiz();
  startTimer();

  // LOAD QUESTIONS
  function loadQuiz() {
    let output = "";

    questions.forEach((q, i) => {
      output += `<h3>${i + 1}. ${q.question}</h3>`;

      q.options.forEach(opt => {
        output += `
          <label>
            <input type="radio" name="q${i}" value="${opt}">
            ${opt}
          </label><br>
        `;
      });

      output += "<hr>";
    });

    document.getElementById("quiz").innerHTML = output;
  }

  // SUBMIT + MARK
  window.submitQuiz = function () {

  let score = 0;

  questions.forEach((q, i) => {
    const options = document.querySelectorAll(`input[name="q${i}"]`);
    const selected = document.querySelector(`input[name="q${i}"]:checked`);

    options.forEach(option => {
      const label = option.parentElement;

      // reset colors first
      label.style.color = "black";

      // correct answer = green
      if (option.value === q.answer) {
        label.style.color = "green";
      }
    });

    // user selection check
    if (selected) {
      if (selected.value === q.answer) {
        score++;
      } else {
        selected.parentElement.style.color = "red";
      }
    }
  });

  let percent = (score / questions.length) * 100;
  let status = percent >= 50 ? "PASS" : "FAIL";

  document.getElementById("result").innerHTML = `
    <h2>RESULT</h2>
    <p>Score: ${score} / ${questions.length}</p>
    <p>Percentage: ${percent.toFixed(1)}%</p>
    <h3>${status}</h3>
  `;

  clearInterval(timer);
};
  // TIMER
  function startTimer() {
    let display = document.getElementById("timer");

    timer = setInterval(() => {

      let minutes = Math.floor(time / 60);
      let seconds = time % 60;

      display.innerHTML = `Time: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

      time--;

      if (time < 0) {
        clearInterval(timer);
        submitQuiz();
      }

    }, 1000);
  }
});
   ///////////////////////////////
   /////////
   
   document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("submitBtn");
    const display = document.getElementById("timer");
    const quizContainer = document.querySelector(".quiz-container");

    let time = 5400; // 1h 30min

    function normalize(text) {
        return (text || "")
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    // ---------------- SUBMIT SYSTEM ----------------
    btn.addEventListener("click", function () {

        const textareas = document.querySelectorAll("textarea");

        let totalScore = 0;

        textareas.forEach((textarea) => {

            const feedback = textarea.nextElementSibling;
            if (!feedback || !feedback.classList.contains("result-feedback")) return;

            const keywords = (textarea.dataset.keywords || "")
                .split(",")
                .map(k => normalize(k))
                .filter(Boolean);

            const answer = normalize(textarea.value);

            let matchedCount = 0;

            keywords.forEach(k => {
                if (answer.includes(k)) matchedCount++;
            });

            const score = Math.min(matchedCount, );
            totalScore += score;

            feedback.innerHTML = `
                <b>Score:</b> ${score}/5<br>
                <small>Matched: ${matchedCount}</small><br>
                <div class="keywords">
                    Keywords: ${keywords.join(", ")}
                </div>
            `;

            const preview = document.createElement("div");
            preview.className = "highlight-box";

            let highlightedText = textarea.value;

            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, "gi");
                highlightedText = highlightedText.replace(
                    regex,
                    match => `<span class="match">${match}</span>`
                );
            });

            preview.innerHTML = highlightedText || "(No answer)";

            textarea.style.display = "none";
            textarea.parentNode.insertBefore(preview, feedback);
        });

        let resultBox = document.getElementById("totalResult");

        if (!resultBox) {
            resultBox = document.createElement("div");
            resultBox.id = "totalResult";
            resultBox.style.marginTop = "20px";
            resultBox.style.fontSize = "22px";
            resultBox.style.fontWeight = "bold";
            quizContainer.appendChild(resultBox);
        }

        resultBox.innerHTML = `TOTAL SCORE: ${totalScore}`;
    });

    // ---------------- TIMER ----------------
    function startTimer() {

        if (!display) return;

        const timer = setInterval(() => {

            let hours = Math.floor(time / 3600);
            let minutes = Math.floor((time % 3600) / 60);
            let seconds = time % 60;

            display.innerHTML =
                `Time Left: ${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

            if (time <= 300) {
                display.style.color = "red";
            }

            if (time <= 0) {
                clearInterval(timer);
                alert("Time is up!");
                btn.click();
            }

            time--;

        }, 1000);
    }

    startTimer();
});