let Mobile = function (name, battery, inbox, outbox, power) {
    this.name = name;
    this.battery = battery;
    this.inbox = inbox;
    this.outbox = outbox;
    this.power = power;

    this.onOff = function () {
        let powerMoblie = document.getElementById('power' + this.name);
        if (this.power == 'on') {
            this.power = 'off';
        } else {
            this.power = 'on';
        }
        if (this.power == 'on') {
            powerMoblie.innerHTML = 'on';
        } else {
            powerMoblie.innerHTML = 'off';
        }
    };

    let screenMobile = document.getElementById('screen' + this.name);
    this.checkStatus = function () {
        if (this.power == 'on') {
            screenMobile.value = 'Phone is On - ' + this.battery + ' % ';
            this.battery--;
        } else {
            screenMobile.value = 'Phone is Off';
        }
    };

    this.typingMessage = function () {
        if (this.power == "on") {
            if (this.battery > 0) {
                screenMobile.value = "";
                screenMobile.setAttribute("placeholder", "texting");
                screenMobile.removeAttribute("readonly");
                this.battery--;
            } else {
                screenMobile.value = ("Battery is over.");
            }
        } else {
            screenMobile.value = ("Phone is OFF!!!!!");
        }
    };

    this.back = function () {
        screenMobile.value = "";
        screenMobile.setAttribute('placeholder', 'screen');
        screenMobile.setAttribute('readonly', 'true');
    }
    this.sendMessager = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                if (screenMobile.value != "") {
                    this.outbox.push(screenMobile.value);
                    screenMobile.value = "";
                    this.battery--;
                }
            } else {
                screenMobile.value = ('Phone is OFF')
            }
        } else {
            screenMobile.value = ('Phone is OFF. Turn on!!')
        }
    };

    this.checkOutBox = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                screenMobile.value = "";
                screenMobile.setAttribute('placeholder', 'Inbox');
                screenMobile.setAttribute('readonly', 'true');
                for (let i = 0; i < this.outbox.length; i++) {
                    screenMobile.value += this.outbox[i] + '\n';
                }
                this.battery--;
            } else {
                screenMobile.value = ('Battery is over.');
            }
        } else {
            screenMobile.value = ('Phone is OFF');
        }
    };

    this.checkInbox = function () {
        if (this.power == 'on') {
            if (this.battery > 0) {
                screenMobile.value = "";
                screenMobile.setAttribute('placehoder', 'Inbox');
                screenMobile.setAttribute('readonly', 'true');
                for (let i = 0; i < this.inbox.length; i++) {
                    screenMobile.value += this.inbox[i] + '\n';
                }
                this.battery--;
            } else {
                screenMobile.value = ('Battery is over.');
            }
        } else {
            screenMobile.value =  ('Phone is OFF');
        }

    }
}
let nokiaName = "Nokia";
let batteryNokia = 100;
let inboxNokia = [];
let outboxNokia = [];
let powerNokia = "on";
let Nokia = new Mobile(nokiaName, batteryNokia, inboxNokia, outboxNokia, powerNokia);

let iphoneName = 'Iphone';
let batteryIphone = 100;
let inboxIphone = [];
let outboxIphone = [];
let powerIphone = 'on';
let Iphone = new Mobile(iphoneName, batteryIphone, inboxIphone, outboxIphone, powerIphone);

function setOnOff(mobile) {
    mobile.onOff();
}

function getCheckStatus(mobile) {
    mobile.checkStatus();
}

function setTypingMessager(mobile) {
    mobile.typingMessage();
}

function setSendMessager(mobile) {
    mobile.sendMessager();
    switch (mobile) {
        case Nokia :
            Iphone.inbox = outboxNokia;
            break;
        case Iphone:
            Nokia.inbox = outboxIphone;
            break;
    }
}

function getInbox(mobile) {
    mobile.checkInbox();
}

function getOutBox(mobile) {
    mobile.checkOutBox();
}

function getBack(mobile) {
    mobile.back();
}

