function numbers() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerHTML = "0";

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;
      let time;
      if (target < 100000) {
        time = 100;
      } else {
        time = 0.00001;
      }

      if (c < target) {
        counter.innerText = c + 1000;
        setTimeout(updateCounter, time);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

numbers();
