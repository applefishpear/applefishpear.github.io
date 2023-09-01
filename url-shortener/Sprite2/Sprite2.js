/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start start" },
        this.whenIReceiveStartStart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.BROADCAST, { name: "stop" }, this.whenIReceiveStop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start start" },
        this.whenIReceiveStartStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start start" },
        this.whenIReceiveStartStart3
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.stage.vars.urlPercentComplete =
        this.toString(this.stage.vars.urlPercentWOPercent) + "%";
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.vars.urlLength = this.stage.vars.urlBreakdown.length;
      yield;
    }
  }

  *whenIReceiveStartStart() {
    this.restartTimer();
    while (true) {
      this.stage.vars.timeElapsed = this.timer;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.timeElapsed = 0;
    while (true) {
      this.stage.vars.estimatedTimeRemaining =
        this.toString(
          Math.round(
            this.toNumber(this.stage.vars.percentLeft) /
              (((this.toNumber(this.stage.vars.number) /
                this.toNumber(this.stage.vars.urlLength)) *
                100) /
                this.toNumber(this.stage.vars.timeElapsed))
          )
        ) + " seconds";
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      this.stage.vars.urlPercentWOPercent = Math.round(
        (this.toNumber(this.stage.vars.number) /
          this.toNumber(this.stage.vars.urlLength)) *
          100
      );
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.stage.vars.percentLeft =
        100 - this.toNumber(this.stage.vars.urlPercentWOPercent);
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.stage.watchers.number.visible = false;
    this.stage.watchers.urlLengthBefore.visible = false;
    this.stage.watchers.urlLength.visible = false;
    this.stage.watchers.urlPercentComplete.visible = false;
    this.stage.watchers.estimatedTimeRemaining.visible = false;
    this.stage.watchers.timeElapsed.visible = false;
    this.stage.vars.urlLengthBefore = 0;
    this.stage.watchers.fullUnshortedUrl.visible = true;
    this.stage.watchers.urlBreakdown.visible = true;
    this.stage.vars.finalUrl = [];
    this.stage.vars.url10s = [];
    this.stage.vars.url10sX2 = [];
    this.stage.vars.url10sX3 = [];
    this.stage.vars.url10sX4 = [];
    this.stage.watchers.fullUnshortedUrl.visible = false;
    this.stage.watchers.urlBreakdown.visible = false;
    this.stage.watchers.url10s.visible = false;
    this.stage.watchers.url10sX2.visible = false;
    this.stage.watchers.url10sX3.visible = false;
    this.stage.watchers.url10sX4.visible = false;
    this.stage.watchers.finalUrl.visible = false;
  }

  *whenIReceiveStop() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.watchers.number.visible = false;
    this.stage.watchers.urlPercentComplete.visible = false;
    this.stage.watchers.estimatedTimeRemaining.visible = false;
    this.stage.watchers.fullUnshortedUrl.visible = false;
    this.stage.watchers.urlBreakdown.visible = false;
    for (
      let i = 0;
      i < Math.round(this.stage.vars.urlBreakdown.length / 10) + 1;
      i++
    ) {
      this.stage.vars.url10s.push(
        this.toString(this.itemOf(this.stage.vars.urlBreakdown, 0)) +
          (this.toString(this.itemOf(this.stage.vars.urlBreakdown, 1)) +
            (this.toString(this.itemOf(this.stage.vars.urlBreakdown, 2)) +
              (this.toString(this.itemOf(this.stage.vars.urlBreakdown, 3)) +
                (this.toString(this.itemOf(this.stage.vars.urlBreakdown, 4)) +
                  (this.toString(this.itemOf(this.stage.vars.urlBreakdown, 5)) +
                    (this.toString(
                      this.itemOf(this.stage.vars.urlBreakdown, 6)
                    ) +
                      (this.toString(
                        this.itemOf(this.stage.vars.urlBreakdown, 7)
                      ) +
                        (this.toString(
                          this.itemOf(this.stage.vars.urlBreakdown, 8)
                        ) +
                          this.toString(
                            this.itemOf(this.stage.vars.urlBreakdown, 9)
                          )))))))))
      );
      for (let i = 0; i < 10; i++) {
        this.stage.vars.urlBreakdown.splice(0, 1);
        yield;
      }
      yield;
    }
    yield* this.wait(0.1);
    for (
      let i = 0;
      i < Math.round(this.stage.vars.url10s.length / 10) + 1;
      i++
    ) {
      this.stage.vars.url10sX2.push(
        this.toString(this.itemOf(this.stage.vars.url10s, 0)) +
          (this.toString(this.itemOf(this.stage.vars.url10s, 1)) +
            (this.toString(this.itemOf(this.stage.vars.url10s, 2)) +
              (this.toString(this.itemOf(this.stage.vars.url10s, 3)) +
                (this.toString(this.itemOf(this.stage.vars.url10s, 4)) +
                  (this.toString(this.itemOf(this.stage.vars.url10s, 5)) +
                    (this.toString(this.itemOf(this.stage.vars.url10s, 6)) +
                      (this.toString(this.itemOf(this.stage.vars.url10s, 7)) +
                        (this.toString(this.itemOf(this.stage.vars.url10s, 8)) +
                          this.toString(
                            this.itemOf(this.stage.vars.url10s, 9)
                          )))))))))
      );
      for (let i = 0; i < 10; i++) {
        this.stage.vars.url10s.splice(0, 1);
        yield;
      }
      yield;
    }
    yield* this.wait(0.1);
    for (
      let i = 0;
      i < Math.round(this.stage.vars.url10sX2.length / 10) + 1;
      i++
    ) {
      this.stage.vars.url10sX3.push(
        this.toString(this.itemOf(this.stage.vars.url10sX2, 0)) +
          (this.toString(this.itemOf(this.stage.vars.url10sX2, 1)) +
            (this.toString(this.itemOf(this.stage.vars.url10sX2, 2)) +
              (this.toString(this.itemOf(this.stage.vars.url10sX2, 3)) +
                (this.toString(this.itemOf(this.stage.vars.url10sX2, 4)) +
                  (this.toString(this.itemOf(this.stage.vars.url10sX2, 5)) +
                    (this.toString(this.itemOf(this.stage.vars.url10sX2, 6)) +
                      (this.toString(this.itemOf(this.stage.vars.url10sX2, 7)) +
                        (this.toString(
                          this.itemOf(this.stage.vars.url10sX2, 8)
                        ) +
                          this.toString(
                            this.itemOf(this.stage.vars.url10sX2, 9)
                          )))))))))
      );
      for (let i = 0; i < 10; i++) {
        this.stage.vars.url10sX2.splice(0, 1);
        yield;
      }
      yield;
    }
    yield* this.wait(0.1);
    for (
      let i = 0;
      i < Math.round(this.stage.vars.url10sX3.length / 10) + 1;
      i++
    ) {
      this.stage.vars.url10sX4.push(
        this.toString(this.itemOf(this.stage.vars.url10sX3, 0)) +
          (this.toString(this.itemOf(this.stage.vars.url10sX3, 1)) +
            (this.toString(this.itemOf(this.stage.vars.url10sX3, 2)) +
              (this.toString(this.itemOf(this.stage.vars.url10sX3, 3)) +
                (this.toString(this.itemOf(this.stage.vars.url10sX3, 4)) +
                  (this.toString(this.itemOf(this.stage.vars.url10sX3, 5)) +
                    (this.toString(this.itemOf(this.stage.vars.url10sX3, 6)) +
                      (this.toString(this.itemOf(this.stage.vars.url10sX3, 7)) +
                        (this.toString(
                          this.itemOf(this.stage.vars.url10sX3, 8)
                        ) +
                          this.toString(
                            this.itemOf(this.stage.vars.url10sX3, 9)
                          )))))))))
      );
      for (let i = 0; i < 10; i++) {
        this.stage.vars.url10sX3.splice(0, 1);
        yield;
      }
      yield;
    }
    this.stage.vars.finalUrl.push(this.itemOf(this.stage.vars.url10sX4, 0));
    this.stage.watchers.finalUrl.visible = true;
    this.say("Double click your URL and copy it!");
  }

  *whenIReceiveStartStart2() {
    yield* this.wait(2);
    while (
      !(
        this.toNumber(this.stage.vars.percentLeft) === 0 ||
        this.compare(this.stage.vars.percentLeft, 0) < 0
      )
    ) {
      yield;
    }
    this.broadcast("stop");
  }

  *whenIReceiveStartStart3() {
    this.stage.watchers.number.visible = true;
    this.stage.watchers.urlLengthBefore.visible = true;
    this.stage.watchers.urlLength.visible = true;
    this.stage.watchers.urlPercentComplete.visible = true;
    this.stage.watchers.estimatedTimeRemaining.visible = true;
    this.stage.watchers.timeElapsed.visible = true;
  }
}
