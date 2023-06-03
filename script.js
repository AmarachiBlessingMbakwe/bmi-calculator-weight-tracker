const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const resInfo = document.querySelector(".resInfo");
const calBtn = document.querySelector(".calBtn");
const clrBtn = document.querySelector(".clrBtn");
const unitSelect = document.querySelector("#unitSelect");
const languageSelect = document.querySelector("#languageSelect");

let selectedLanguage = "en"; // Set a default language

function updateLanguage() {
  selectedLanguage = languageSelect.value;

  if (selectedLanguage === "en") {
    // English
    document.querySelector(".scale").textContent = "Body Mass Index Calculator";
    weight.placeholder = "Weight";
    height.placeholder = "Height";
    calBtn.textContent = "Calculate BMI";
    clrBtn.textContent = "Clear Values";
  } else if (selectedLanguage === "es") {
    // Spanish
    document.querySelector(".scale").textContent =
      "Calculadora de Índice de Masa Corporal";
    weight.placeholder = "Peso";
    height.placeholder = "Altura";
    calBtn.textContent = "Calcular IMC";
    clrBtn.textContent = "Borrar Valores";
  } else if (selectedLanguage === "zh") {
    // Chinese
    document.querySelector(".scale").textContent = "身体质量指数计算器";
    weight.placeholder = "体重";
    height.placeholder = "身高";
    calBtn.textContent = "计算 BMI";
    clrBtn.textContent = "清除数值";
  } else if (selectedLanguage === "ig") {
    // Igbo
    document.querySelector(".scale").textContent =
      "Ihe mgbako ihe nrịbama nke anụ ahụ";
    weight.placeholder = "ahu";
    height.placeholder = "ogo";
    calBtn.textContent = "gbakọọ BMI";
    clrBtn.textContent = "Wepụ ihe";
  } else if (selectedLanguage === "yo") {
    // Yoruba
    document.querySelector(".scale").textContent = "isiro ara ibi-index";
    weight.placeholder = "Iwuwọ";
    height.placeholder = "Iga";
    calBtn.textContent = "ṣe iṣiro BMI";
    clrBtn.textContent = "Awọn iye ti o mọ";
  }
}

languageSelect.addEventListener("change", updateLanguage);
unitSelect.addEventListener("change", updateLanguage);

function bmiCalculation() {
  const selectedUnit = unitSelect.value;

  if (selectedUnit === "us-metric") {
    // Convert height to meters
    const heightInMeters = (height.value * 12 * 2.54) / 100;
    // Convert weight to kilograms
    const weightInKg = weight.value * 0.45359237;
    const bmi = weightInKg / heightInMeters ** 2;

    if (bmi < 18.5) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(
          1
        )} and you are underweight, please try and add weight.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} y estás bajo de peso, por favor intenta aumentar tu peso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )}，你的体重过轻，请尝试增加体重。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} ma gị na-agba ụgwọ, biko tinye aka ụgwọ gị.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} ati ojulowo, jọwọ jẹ ki ojulowo rẹ jẹ pẹlu.`;
      }
      resInfo.style.color = "blue";
    } else if (bmi <= 24.9) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(
          1
        )} Congratulations! you have a normal weight.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} ¡Felicitaciones! tienes un peso normal.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )} 恭喜！你的体重正常。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} Ekele! ụgwọ gị na-ezọla ahụ.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} E ku ojo ibi! ojulowo rẹ jẹ ti nkan iṣọtun.`;
      }
      resInfo.style.color = "green";
    } else if (bmi <= 29.9) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(
          1
        )} and you are overweight, please try exercising and eat healthy to lose weight.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} y tienes sobrepeso, por favor intenta hacer ejercicio y comer saludable para perder peso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )}，你超重了，请尝试锻炼和健康饮食来减肥。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} ma gị na-ajụjụọ, biko tinye aka ịrụ ejịm ejị na-amụ ama ụgwọ.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} ati ojulowo, jọwọ jẹ ki ojulowo rẹ jẹ pẹlu iṣọtun ati jẹun titi daju fun ojulowo.`;
      }
      resInfo.style.color = "yellow";
    } else if (bmi <= 34.9) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello your BMI is ${bmi.toFixed(
          1
        )} Please visit a doctor for advice because you are actually obese.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} Por favor visita a un médico para recibir consejo porque en realidad estás obeso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )} 请咨询医生的建议，因为你实际上是肥胖的。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} Biko tinye ka eji eme ihe na-eme na-enye otutu. Ọ bụrụ na gị na-achọụzọ ọgwụgwọ.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} Jọwọ ṣẹ iduro si dokita fun iṣẹ irawọ nitori o jẹ obìnrin to wuwo. `;
      }
      resInfo.style.color = "orange";
    } else if (bmi >= 35) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello your BMI is ${bmi.toFixed(
          1
        )} Please visit a doctor for advice because you are extremely obese.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} Por favor visita a un médico para recibir consejo porque estás extremadamente obeso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )} 请咨询医生的建议，因为你极度肥胖。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} Biko tinye ka eji eme ihe na-eme na-enye otutu. Ọ bụrụ na gị na-agba ọgwụgwọ n'efu.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} Jọwọ ṣẹ iduro si dokita fun iṣẹ irawọ nitori o jẹ obìnrin ti o pẹlu.`;
      }
      resInfo.style.color = "red";
    } else {
      resInfo.textContent = "Invalid values!!!";
      resInfo.style.color = "#7F0B07";
    }
  } else if (selectedUnit === "metric") {
    const heightInMeters = height.value / 100;
    const weightInKg = weight.value;
    const bmi = weightInKg / heightInMeters ** 2;

    if (bmi < 18.5) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(
          1
        )} and you are underweight, please try and add weight.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} y estás bajo de peso, por favor intenta aumentar tu peso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )}，你的体重过轻，请尝试增加体重。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} ma gị na-agba ụgwọ, biko tinye aka ụgwọ gị.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} ati ojulowo, jọwọ jẹ ki ojulowo rẹ jẹ pẹlu.`;
      }
      resInfo.style.color = "blue";
    } else if (bmi <= 24.9) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(
          1
        )} Congratulations! you have a normal weight.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} ¡Felicitaciones! tienes un peso normal.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )} 恭喜！你的体重正常。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} Ekele! ụgwọ gị na-ezọla ahụ.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} E ku ojo ibi! ojulowo rẹ jẹ ti nkan iṣọtun.`;
      }
      resInfo.style.color = "green";
    } else if (bmi <= 29.9) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello, your BMI is ${bmi.toFixed(
          1
        )} and you are overweight, please try exercising and eat healthy to lose weight.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} y tienes sobrepeso, por favor intenta hacer ejercicio y comer saludable para perder peso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )}，你超重了，请尝试锻炼和健康饮食来减肥。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} ma gị na-ajụjụọ, biko tinye aka ịrụ ejịm ejị na-amụ ama ụgwọ.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} ati ojulowo, jọwọ jẹ ki ojulowo rẹ jẹ pẹlu iṣọtun ati jẹun titi daju fun ojulowo.`;
      }
      resInfo.style.color = "yellow";
    } else if (bmi <= 34.9) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello your BMI is ${bmi.toFixed(
          1
        )} Please visit a doctor for advice because you are actually obese.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} Por favor visita a un médico para recibir consejo porque en realidad estás obeso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )} 请咨询医生的建议，因为你实际上是肥胖的。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} Biko tinye ka eji eme ihe na-eme na-enye otutu. Ọ bụrụ na gị na-achọụzọ ọgwụgwọ.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} Jọwọ ṣẹ iduro si dokita fun iṣẹ irawọ nitori o jẹ obìnrin to wuwo. `;
      }
      resInfo.style.color = "orange";
    } else if (bmi >= 35) {
      if (selectedLanguage === "en") {
        resInfo.textContent = `Hello your BMI is ${bmi.toFixed(
          1
        )} Please visit a doctor for advice because you are extremely obese.`;
      } else if (selectedLanguage === "es") {
        resInfo.textContent = `Hola, tu IMC es ${bmi.toFixed(
          1
        )} Por favor visita a un médico para recibir consejo porque estás extremadamente obeso.`;
      } else if (selectedLanguage === "zh") {
        resInfo.textContent = `你好，你的BMI为${bmi.toFixed(
          1
        )} 请咨询医生的建议，因为你极度肥胖。`;
      } else if (selectedLanguage === "ig") {
        resInfo.textContent = `Ndeewo, IMC gị bụ ${bmi.toFixed(
          1
        )} Biko tinye ka eji eme ihe na-eme na-enye otutu. Ọ bụrụ na gị na-agba ọgwụgwọ n'efu.`;
      } else if (selectedLanguage === "yo") {
        resInfo.textContent = `Bawo ni, BMI rẹ jẹ ${bmi.toFixed(
          1
        )} Jọwọ ṣẹ iduro si dokita fun iṣẹ irawọ nitori o jẹ obìnrin ti o pẹlu.`;
      }
      resInfo.style.color = "red";
    } else {
      resInfo.textContent = "Invalid values!!!";
      resInfo.style.color = "#7F0B07";
    }
  }
}

calBtn.addEventListener("click", bmiCalculation);

function clearValues() {
  weight.value = "";
  height.value = "";
  resInfo.textContent = "";
}

clrBtn.addEventListener("click", clearValues);
