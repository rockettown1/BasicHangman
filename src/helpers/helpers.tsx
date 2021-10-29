import React from "react";

export const showNotification = (
  setter: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
};

export const checkWin = (correct: string[], wrong: string[], word: string) => {
  let status = "win";
  //check for win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //check for lose
  if (wrong.length === 6) {
    status = "lose";
  }

  return status;
};
