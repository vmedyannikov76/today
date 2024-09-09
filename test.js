function startCode() {
    function getSummUrok() {
      let allActiveUrok = document.querySelectorAll(
        '[data-tilda-page-id="52005665"] input.t-inputquantity:not( [style*="display: none;"] input.t-inputquantity)'
      ); //только активные уроки в классе
      let summ = 0;
      allActiveUrok.forEach((e) => (summ += +e.value));
      return summ;
    }
  
    function bonusHidden() {
      // бонусный блок
      const presents = document.querySelectorAll(
          '[data-elem-id="1725561412237"],' +
          '[data-elem-id="1725561687058"],' +
          '[data-elem-id="1725560272317"],' +
          '[data-elem-id="1725560291345"],' +
          '[data-elem-id="1725561108138"],' +
          '[data-elem-id="1725561412237"],' +
          '[data-elem-id="1725561344449"],' +
          '[data-elem-id="1725561344453"],' +
          '[data-elem-id="1725562728511"],' +
          '[data-elem-id="1725562728517"],' +
          '[data-elem-id="1725562728521"],' +
          '[data-elem-id="1725562728504"]'
      );
      if (getSummUrok() >= 4) {
        presents.forEach((e) => (e.style.display = ""));
      } else {
        presents.forEach((e) => (e.style.display = "none"));
      }
    }
    bonusHidden();
    document.addEventListener("click", () => {
      setTimeout(() => {
        bonusHidden();
      }, 200);
    });
  }
//   startCode();

function setInfoBlock(){//правим блок с информацией
    const text_150 = document.querySelector('[field="tn_text_1725624460217"]')//150 грн - 1 заняття
    const countUrok = document.querySelector('[data-elem-id="1725624524435"] div')//весь блоб текста где ще 1 урок

    if (getSummUrok() < 4){
        text_150.style.textDecoration = '';
        countUrok.innerHTML = `
        <a href="#zeropopup" style="color: inherit" role="button" aria-haspopup="dialog">додайте <u>ще ${4-getSummUrok()} урок</u>,
         щоб відвідувати групові заняття <strong>
         <u>БЕЗКОШТОВНО</u>
         </strong>
         </a>
        `
    }
    if (getSummUrok() >= 4){
        text_150.style.textDecoration = 'line-through 5px #8e8e8e';
        countUrok.innerHTML = `
        <a href="#zeropopup" style="color: inherit" role="button" aria-haspopup="dialog">Для вас доступні всі </u>,
         перелічені групові заняття по вартості<strong>
         <u>0 гривень</u>
         </strong>
         </a>
        `
    }
}
setInfoBlock()


  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("сработка");
    setTimeout(() => {
      startCode();
    }, 1000);
  });
  
//   Когда родители в калькуляторе выбирают от 1 до 3 занятий, то видят перечень групповых занятий (социализаций) с указанием цены (150 грн/1 занятие), + текст "додайте ще 1/2/3 уроки, щоб відвідувати групові заняття безкоштовно", где "1/2/3" меняется в зависимости от количества выбранных уроков в калькуляторе  
 
// Когда пользователем выбрано 4 и более уроков в калькуляторе, то меняется текст - "Для вас доступні всі перелічені групові заняття по вартості 150 гривень (зачеркнуто) - написано "0 гривень" 
// Можно еще добавить куда-то "Знижка 100%", если не наляписто будет
