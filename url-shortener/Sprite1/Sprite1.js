/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./Sprite1/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "stop" }, this.whenIReceiveStop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start number" },
        this.whenIReceiveStartNumber
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.character = "";
    this.stage.vars.number = 0;
    this.stage.vars.shortenToLimit = 0;
    this.stage.vars.fullUnshortedUrl = [];
    this.stage.vars.urlBreakdown = [];
    yield* this.askAndWait("Enter your URL here.");
    this.stage.vars.fullUnshortedUrl.push(this.answer);
    this.stage.vars.number = 0;
    this.stage.vars.urlLengthBefore = this.stage.vars.fullUnshortedUrl.join(
      " "
    ).length;
    yield* this.wait(0.5);
    for (let i = 0; i < this.toNumber(this.stage.vars.urlLengthBefore); i++) {
      this.stage.vars.number++;
      this.stage.vars.urlBreakdown.push(
        this.letterOf(
          this.stage.vars.fullUnshortedUrl.join(" "),
          this.stage.vars.number - 1
        )
      );
      yield;
    }
    this.stage.vars.number = 0;
    this.broadcast("start");
    this.broadcast("start start");
  }

  *whenIReceiveStart() {}

  *whenIReceiveStop() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStartNumber() {
    while (true) {
      if (this.toString(this.stage.vars.character) === ".") {
        this.stage.vars.number++;
        this.stage.vars.character = this.itemOf(
          this.stage.vars.urlBreakdown,
          this.stage.vars.number - 1
        );
        if (this.toNumber(this.stage.vars.character) === 0) {
          this.stage.vars.number++;
          this.stage.vars.character = this.itemOf(
            this.stage.vars.urlBreakdown,
            this.stage.vars.number - 1
          );
          if (this.toNumber(this.stage.vars.character) === 0) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 7) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
          }
          if (this.toNumber(this.stage.vars.character) === 1) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 4) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
          }
          if (this.toNumber(this.stage.vars.character) === 2) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 1) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
            if (this.toNumber(this.stage.vars.character) === 8) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
          }
          if (this.toNumber(this.stage.vars.character) === 3) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 5) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
          }
          if (this.toNumber(this.stage.vars.character) === 4) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 2) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
            if (this.toNumber(this.stage.vars.character) === 9) {
              /* TODO: Implement stop other scripts in sprite */ null;
              for (let i = 0; i < 4; i++) {
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 4,
                  1
                );
                yield;
              }
              this.stage.vars.number =
                this.toNumber(this.stage.vars.number) - 10;
              this.broadcast("start number");
              return;
            }
          }
        }
        if (this.toNumber(this.stage.vars.character) === 9) {
          this.stage.vars.number++;
          this.stage.vars.character = this.itemOf(
            this.stage.vars.urlBreakdown,
            this.stage.vars.number - 1
          );
          if (this.toNumber(this.stage.vars.character) === 5) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 1) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                0;
              }
            }
            if (this.toNumber(this.stage.vars.character) === 8) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                null;
              }
            }
          }
          if (this.toNumber(this.stage.vars.character) === 6) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 5) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                null;
              }
            }
          }
          if (this.toNumber(this.stage.vars.character) === 7) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 2) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                null;
              }
            }
            if (this.toNumber(this.stage.vars.character) === 9) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                null;
              }
            }
          }
          if (this.toNumber(this.stage.vars.character) === 8) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 6) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                null;
              }
            }
          }
          if (this.toNumber(this.stage.vars.character) === 9) {
            this.stage.vars.number++;
            this.stage.vars.character = this.itemOf(
              this.stage.vars.urlBreakdown,
              this.stage.vars.number - 1
            );
            if (this.toNumber(this.stage.vars.character) === 3) {
              this.stage.vars.nine1stNumber = this.itemOf(
                this.stage.vars.urlBreakdown,
                this.toNumber(this.stage.vars.number) - 5
              );
              if (!(this.toNumber(this.stage.vars.nine1stNumber) === 9)) {
                /* TODO: Implement stop other scripts in sprite */ null;
                this.stage.vars.urlBreakdown.splice(
                  this.toNumber(this.stage.vars.number) - 5,
                  0,
                  this.toNumber(this.stage.vars.nine1stNumber) + 1
                );
                for (let i = 0; i < 5; i++) {
                  this.stage.vars.urlBreakdown.splice(
                    this.toNumber(this.stage.vars.number) - 4,
                    1
                  );
                  yield;
                }
                this.stage.vars.number =
                  this.toNumber(this.stage.vars.number) - 10;
                this.broadcast("start number");
                return;
              } else {
                null;
              }
            }
          }
        }
      }
      this.stage.vars.number++;
      this.stage.vars.character = this.itemOf(
        this.stage.vars.urlBreakdown,
        this.stage.vars.number - 1
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(0.1);
  }

  *whenIReceiveStart2() {
    yield* this.wait(1);
    this.broadcast("start number");
  }
}
