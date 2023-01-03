const counter = document.querySelector(".main");

counter.innerHTML = 10;

setTimeout(() => {
  counter.innerHTML = 9;
  setTimeout(() => {
    counter.innerHTML = 8;
    setTimeout(() => {
      counter.innerHTML = 7;
      setTimeout(() => {
        counter.innerHTML = 6;
        setTimeout(() => {
          counter.innerHTML = 5;
          setTimeout(() => {
            counter.innerHTML = 4;
            setTimeout(() => {
              counter.innerHTML = 3;
              setTimeout(() => {
                counter.innerHTML = 2;
                setTimeout(() => {
                  counter.innerHTML = 1;
                  setTimeout(() => {
                    counter.innerHTML = "HAPPY INDEPENDENCE DAY";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);