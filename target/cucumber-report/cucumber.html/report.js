$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/walestest.feature");
formatter.feature({
  "line": 3,
  "name": "Nhs help costs test",
  "description": "\r\nAs a user I want to check if I  get help from Nhs or not",
  "id": "nhs-help-costs-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 16833756400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on start page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on start  now button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select wales as my live in country",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select yes radio button for question is your gp practice in scotland or wales",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on next button after selecting gp practice question",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select wales as my dental practice",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on next button after dental practice question",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 793072100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 998386400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectWalesAsMyLiveInCountry()"
});
formatter.result({
  "duration": 268915400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButton()"
});
formatter.result({
  "duration": 625052400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectYesRadioButtonForQuestionIsYourGpPracticeInScotlandOrWales()"
});
formatter.result({
  "duration": 292502600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterSelectingGpPracticeQuestion()"
});
formatter.result({
  "duration": 544581000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectWalesAsMyDentalPractice()"
});
formatter.result({
  "duration": 269944900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterDentalPracticeQuestion()"
});
formatter.result({
  "duration": 606828500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "As a User I want to check if I get help with nhs costs for age 18 over",
  "description": "",
  "id": "nhs-help-costs-test;as-a-user-i-want-to-check-if-i-get-help-with-nhs-costs-for-age-18-over",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I enter \"18\" birth day in birthdate field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I enter \"01\" as birth month in birthdate field",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"1985\" as my birth year in birthdate field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click next button on radio button after birth date field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on yes radio button for do you live with your partner question",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on next button after partner question",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on yes radio button for tax credit and benefits question",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on next button after tax credit question",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on yes radio button for you and your partner get paid universal credit",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on next buttton after paid universal credit question",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select yes radio button as a part of the universal credit",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I click on next button after part of the universal credit question",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select yes radio button for getting paid £935 or less on last universal credit",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click  on next button after getting paid £935",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I see the result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterBirthDayInBirthdateField(String)"
});
formatter.result({
  "duration": 162942800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsBirthMonthInBirthdateField(String)"
});
formatter.result({
  "duration": 152854700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1985",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsMyBirthYearInBirthdateField(String)"
});
formatter.result({
  "duration": 91630400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickYesOnRadioButtonAfterBirthDateField()"
});
formatter.result({
  "duration": 626042100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnYesRadioButtonforDoYouLiveWithYourPartnerQuestion()"
});
formatter.result({
  "duration": 268533800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterPartnerQuestion()"
});
formatter.result({
  "duration": 468088300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnYesRadioButtonForTaxCreditAndBenefitsQuestion()"
});
formatter.result({
  "duration": 261770700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterTaxCreditQuestion()"
});
formatter.result({
  "duration": 556088400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnYesRadioButtonForYouAndYourPartnerGetPaidUniversalCredit()"
});
formatter.result({
  "duration": 254903700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButttonAfterPaidUniversalCreditQuestion()"
});
formatter.result({
  "duration": 538333600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectYesRadioButtonAsAPartOfTheUniversalCredit()"
});
formatter.result({
  "duration": 282914300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterPartOfTheUniversalCreditQuestion()"
});
formatter.result({
  "duration": 664063400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "935",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.iSelectYesRadioButtonForGettingPaid£OrLessOnLastUniversalCredit(int)"
});
formatter.result({
  "duration": 263158000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "935",
      "offset": 44
    }
  ],
  "location": "MyStepdefs.iClickOnNextButtonAfterGettingPaid£(int)"
});
formatter.result({
  "duration": 714219900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSeeTheResult()"
});
formatter.result({
  "duration": 117924600,
  "status": "passed"
});
formatter.after({
  "duration": 2598890000,
  "status": "passed"
});
formatter.before({
  "duration": 7313489200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on start page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on start  now button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select wales as my live in country",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select yes radio button for question is your gp practice in scotland or wales",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on next button after selecting gp practice question",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select wales as my dental practice",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on next button after dental practice question",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 345079300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 754270200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectWalesAsMyLiveInCountry()"
});
formatter.result({
  "duration": 291619900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButton()"
});
formatter.result({
  "duration": 768519200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectYesRadioButtonForQuestionIsYourGpPracticeInScotlandOrWales()"
});
formatter.result({
  "duration": 255771400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterSelectingGpPracticeQuestion()"
});
formatter.result({
  "duration": 826143900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectWalesAsMyDentalPractice()"
});
formatter.result({
  "duration": 291275500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterDentalPracticeQuestion()"
});
formatter.result({
  "duration": 545478300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "As a User I want to check if I get help with nhs costs for age over 65",
  "description": "",
  "id": "nhs-help-costs-test;as-a-user-i-want-to-check-if-i-get-help-with-nhs-costs-for-age-over-65",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I enter \"18\" birth day in birthdate field",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I enter \"01\" as birth month in birthdate field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"1956\" as my birth year in birthdate field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click next button on radio button after birth date field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select no radio button for do you live with your partner question",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I click on next button after partner question",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I select no radio button for tax credit and benefits question",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on next button after tax credit question",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I select no for injury and illness caused by serving in the armed forces",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on next button after injury and illness question",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select no for do you live permanently in care home question",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on next button after living in care home questions",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I select no for savings investment or property question",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I click on next button after saving investment or property question",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I see the result you get help with nhs",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterBirthDayInBirthdateField(String)"
});
formatter.result({
  "duration": 93308600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsBirthMonthInBirthdateField(String)"
});
formatter.result({
  "duration": 70041000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1956",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsMyBirthYearInBirthdateField(String)"
});
formatter.result({
  "duration": 135647700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickYesOnRadioButtonAfterBirthDateField()"
});
formatter.result({
  "duration": 627252500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectNoRadioButtonForDoYouLiveWithYourPartnerQuestion()"
});
formatter.result({
  "duration": 326923500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterPartnerQuestion()"
});
formatter.result({
  "duration": 548606100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectNoRadioButtonForTaxCreditAndBenefitsQuestion()"
});
formatter.result({
  "duration": 303349500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterTaxCreditQuestion()"
});
formatter.result({
  "duration": 543634200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectNoForInjuryAndIllnessCausedByServingInTheArmedForces()"
});
formatter.result({
  "duration": 280260000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterInjuryAndIllnessQuestion()"
});
formatter.result({
  "duration": 555127200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectNoForDoYouLivePermanentlyInCareHomeQuestion()"
});
formatter.result({
  "duration": 308370500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterLivingInCareHomeQuestions()"
});
formatter.result({
  "duration": 467835200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectNoForSavingsInvestmentOrPropertyQuestion()"
});
formatter.result({
  "duration": 250514000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterSavingInvestmentOrPropertyQuestion()"
});
formatter.result({
  "duration": 556374700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSeeTheResultYouGetHelpWithNhs()"
});
formatter.result({
  "duration": 82839400,
  "status": "passed"
});
formatter.after({
  "duration": 2354589900,
  "status": "passed"
});
formatter.before({
  "duration": 7554638200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "I am on start page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I click on accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on start  now button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select wales as my live in country",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on next button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select yes radio button for question is your gp practice in scotland or wales",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on next button after selecting gp practice question",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select wales as my dental practice",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on next button after dental practice question",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iClickOnAcceptCookies()"
});
formatter.result({
  "duration": 360661000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnStartNowButton()"
});
formatter.result({
  "duration": 781908700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectWalesAsMyLiveInCountry()"
});
formatter.result({
  "duration": 273344800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButton()"
});
formatter.result({
  "duration": 808995000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectYesRadioButtonForQuestionIsYourGpPracticeInScotlandOrWales()"
});
formatter.result({
  "duration": 331846900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterSelectingGpPracticeQuestion()"
});
formatter.result({
  "duration": 781387800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectWalesAsMyDentalPractice()"
});
formatter.result({
  "duration": 285242500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnNextButtonAfterDentalPracticeQuestion()"
});
formatter.result({
  "duration": 556191400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "As a User I want to check if I get help with nhs costs for age under 18",
  "description": "",
  "id": "nhs-help-costs-test;as-a-user-i-want-to-check-if-i-get-help-with-nhs-costs-for-age-under-18",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "I enter \"18\" birth day in birthdate field",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I enter \"01\" as birth month in birthdate field",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I enter \"2015\" as my birth year in birthdate field",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click next button on radio button after birth date field",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I see the result you get help with nhs for under age",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterBirthDayInBirthdateField(String)"
});
formatter.result({
  "duration": 112342000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsBirthMonthInBirthdateField(String)"
});
formatter.result({
  "duration": 120256000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2015",
      "offset": 9
    }
  ],
  "location": "MyStepdefs.iEnterAsMyBirthYearInBirthdateField(String)"
});
formatter.result({
  "duration": 170411100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickYesOnRadioButtonAfterBirthDateField()"
});
formatter.result({
  "duration": 650121500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSeeTheResultYouGetHelpWithNhsForUnderAge()"
});
formatter.result({
  "duration": 128298700,
  "status": "passed"
});
formatter.after({
  "duration": 4275454500,
  "status": "passed"
});
});