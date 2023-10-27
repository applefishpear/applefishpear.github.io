var map = {
    title: "Orbit",
    song: "env2",
    maker: "applepear",
    spawn: [0, 0.5, 0],
    init: function () {
        rememberskybox = settings.skyboxEnabled;
        settings.skyboxEnabled = "off";
        cleanup.run = this.run;

        a.s([0.37007, 0.50007, -1298.91993], 21.74, "1a1a1a, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37014, 0.50014, -1114.79986], 25.76, "2f6a69, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37021, 6.60021, -367.64979], 79.04, "366896, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37028, 6.60028, -540.82972], 83.96, "5580aa, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37035, 0.50035, -1044.15965], 19.02, "993d00, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37042, 6.80042, -938.68958], 123.62, "b07f35, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37049, 6.05049, -747.11951], 69.3, "b08f36, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37, 0.5, -1195.09], 45.9, "e6e6e6, 0.99", 0, 0, 0.6, true, false);
        a.s([-17.17993, 0.50007, -1612.04993], 406.8, "fdb813, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37014, 0.50014, -200.74986], 24.42, "fff1d5, 0.99", 0, 0, 0.6, true, false);
        a.s([0.37049, 6.05049, -747.11951], 1, -1, 0, 0, 0.6, true, false);

        a.s([-17.17993, 0.50007, -1612.04993], 300, "fdb813, 0.99", 0, 0, 0.6, true, false);
        a.s([0, 0, 0], 200, -1, 0, 0, 0.6, true, false);
        
        a.p([81.3, 1.15, -700.6], [-2.1, 0.01, 0.3], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-4.37, -23.6, -838.72], [-6.25, -0.26, -0.16], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([14.62, -25.92, -836.63], [-0.15, -0.28, -0.11], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([32.42, -27.32, -831.83], [-0.36, -0.3, -0.05], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([47.83, -27.42, -823.62], [-0.53, -0.3, 0.01], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([61.89, -26.68, -813.09], [-0.71, -0.3, 0.06], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([75.32, -24.87, -798.99], [-0.89, -0.28, 0.12], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([84.68, -21.98, -783.2], [-1.1, -0.25, 0.17], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([91.13, -18, -765.08], [-1.3, -0.21, 0.22], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([93.21, -13.56, -747.68], [-1.5, -0.16, 0.26], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([92.32, -8.37, -729.22], [-1.68, -0.12, 0.28], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([88.49, -4.05, -715.57], [-1.93, -0.04, 0.3], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([74.19, 4.97, -690.59], [-2.24, 0.05, 0.3], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([61.27, 10.57, -677.3], [-2.42, 0.1, 0.29], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([43.9, 16.22, -666.33], [-2.59, 0.15, 0.27], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([28.83, 20.35, -659.64], [-2.82, 0.2, 0.23], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([11.14, 23.85, -656.7], [-3.03, 0.25, 0.18], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-5.6, 26.25, -657.23], [-3.29, 0.28, 0.11], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-23.62, 27.68, -662.05], [-3.5, 0.3, 0.05], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-43.43, 28.28, -670.88], [-3.59, 0.3, 0.02], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-59.78, 27.77, -681.85], [-3.77, 0.3, -0.04], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-70.4, 26.17, -693.63], [-3.97, 0.29, -0.1], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-80.87, 23.66, -708.61], [-4.24, 0.25, -0.17], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-89.08, 19.49, -728.42], [-4.36, 0.23, -0.2], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-92.19, 15.65, -744.21], [-4.62, 0.17, -0.25], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-92.09, 10.8, -761.87], [-4.82, 0.12, -0.28], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-88.37, 5.76, -778.19], [-5.03, 0.06, -0.3], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-81.06, 0.33, -793.98], [-5.28, -0.02, -0.3], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-70.44, -5.39, -808.97], [-5.43, -0.06, -0.3], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-56.7, -10.93, -821.54], [-5.62, -0.12, -0.28], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-40.89, -15.75, -830.38], [-5.87, -0.18, -0.24], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
        a.p([-23.45, -20.02, -836.26], [-6.07, -0.23, -0.2], [24.06, 0.12, 43.42], "ffffff", 0, 0, 0.6, false, true, false, false);
       
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);
        a.p([-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, false, true, false, false);

        a.p([0, 0.5, 0], [0, 0, 0], [1, 1, 1], -1, 0, 0, 0.6, true, true, false, false);

        a.e([0, 0.50042, -1612.04958]);

        light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(-17.17993, 0.50007, -1612.04993), scene);
	    light1.intensity = 3.0;
        light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(-17.17993, 0.50007, -1612.04993), scene);
        light2.includedOnlyMeshes.push(a.m('S8'));
	    light2.intensity = 50.0;

        player.actionManager = new BABYLON.ActionManager(scene);

        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S0') // trigger mesh
                },
                function () {
                    map.on_planet_death("Mercury", "S0", "1a1a1a, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S1') // trigger mesh
                },
                function () {
                    map.on_planet_death("Earth", "S1", "2f6a69, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S2') // trigger mesh
                },
                function () {
                    map.on_planet_death("Neptune", "S2", "366896, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S3') // trigger mesh
                },
                function () {
                    map.on_planet_death("Uranus", "S3", "5580aa, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S4') // trigger mesh
                },
                function () {
                    map.on_planet_death("Mars", "S4", "993d00, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S5') // trigger mesh
                },
                function () {
                    map.on_planet_death("Jupiter", "S5", "b07f35, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S6') // trigger mesh
                },
                function () {
                    map.on_planet_death("Saturn", "S6", "b08f36, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S7') // trigger mesh
                },
                function () {
                    map.on_planet_death("Venus", "S7", "e6e6e6, 0.99")
                }
            )
        );
        player.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: a.m('S11') // trigger mesh
                },
                function () {
                    if (map.planet_count == 0) return;
                    change_state.die('Died From Sun');
                }
            )
        );
    },
    post: function () {
        a.u('S0');
        a.u('S1');
        a.u('S2');
        a.u('S3');
        a.u('S4');
        a.u('S5');
        a.u('S6');
        a.u('S7');
        a.u('S8');
        a.u('S9');
        a.u('S10');
        a.u('S12');
        a.u('E0');

        a.m('S0').parent = a.m('P32');
        a.m('S1').parent = a.m('P33');
        a.m('S2').parent = a.m('P34');
        a.m('S3').parent = a.m('P35');
        a.m('S4').parent = a.m('P36');
        a.m('S5').parent = a.m('P37');
        a.m('S6').parent = a.m('P38');
        a.m('S7').parent = a.m('P39');
        a.m('S9').parent = player;
        a.m('S10').parent = a.m('P38');

        a.m('P0').parent = a.m('S10');
        a.m('P1').parent = a.m('S10');
        a.m('P2').parent = a.m('S10');
        a.m('P3').parent = a.m('S10');
        a.m('P4').parent = a.m('S10');
        a.m('P5').parent = a.m('S10');
        a.m('P6').parent = a.m('S10');
        a.m('P7').parent = a.m('S10');
        a.m('P8').parent = a.m('S10');
        a.m('P9').parent = a.m('S10');
        a.m('P10').parent = a.m('S10');
        a.m('P11').parent = a.m('S10');
        a.m('P12').parent = a.m('S10');
        a.m('P13').parent = a.m('S10');
        a.m('P14').parent = a.m('S10');
        a.m('P15').parent = a.m('S10');
        a.m('P16').parent = a.m('S10');
        a.m('P17').parent = a.m('S10');
        a.m('P18').parent = a.m('S10');
        a.m('P19').parent = a.m('S10');
        a.m('P20').parent = a.m('S10');
        a.m('P21').parent = a.m('S10');
        a.m('P22').parent = a.m('S10');
        a.m('P23').parent = a.m('S10');
        a.m('P24').parent = a.m('S10');
        a.m('P25').parent = a.m('S10');
        a.m('P26').parent = a.m('S10');
        a.m('P27').parent = a.m('S10');
        a.m('P28').parent = a.m('S10');
        a.m('P29').parent = a.m('S10');
        a.m('P30').parent = a.m('S10');
        a.m('P31').parent = a.m('S10');

        cc.set_monkey("cameraDownAngle", 5 * Math.PI / 180);
        cc.set_monkey("camera.maxZ", 5000.0);
        cc.set_monkey("light.intensity", 0);
        cc.set_monkey("radius", 2.5);
        cc.set_monkey("camera.fov mul2", 1.0);
        cc.set_monkey("speed", default_speed * 0);
        cc.set_monkey("gravity", new BABYLON.Vector3(null, 0, null));
        cc.set_monkey("steer", 0.03);
        cc.set_monkey("jumpSpeed", 0);
        cc.set_monkey("jumpHeight", 0);
        cc.set_monkey("player.scaling",new BABYLON.Vector3(1, 1, 1));
        cc.refresh();
    },
    section_id: 0,
    ch: 0,
    cv: 0,
    cd: 0,
    skip: false,
    ss: 0,
    planet_count: 8,
    cooldown: false,
    section_update: function () {
        a.rot('P32', 'y', 1-0.1*(8-this.planet_count)) // mercury
        a.rot('P33', 'y', 0.62-0.05*(8-this.planet_count)) // earth
        a.rot('P34', 'y', 0.11) // neptune
        a.rot('P35', 'y', 0.14) // uranus
        a.rot('P36', 'y', 0.5-0.05*(8-this.planet_count)) // mars
        a.rot('P37', 'y', 0.27) // jupiter
        a.rot('P38', 'y', 0.2) // saturn
        a.rot('P39', 'y', 0.73-0.05*(8-this.planet_count)) // venus

        if (update.are_touching(player, a.m('E0'), 20)) { 
            change_state.win();
        }

        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 1) {
                    steer = default_steer * 0.0;
                    this.ch = cam_horizontal;
                    this.cv = cam_vertical;
                    this.cd = cam_depression;
                    cam_horizontal = 0;
                    cam_vertical = 4000;
                    cam_depression = 1.57;
                    this.section_id += 1
                }
                break;
            case 1:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (score > 10) {
                    a.msg_set("Press space to skip.")
                    this.section_id += 1
                }
                break;
            case 2:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (controls.space) {
                    this.skip = true;
                    this.section_id = 7;
                }
                if (score > 60) {
                    a.msg_del()
                    this.section_id += 1
                }
                break;
            case 3:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (controls.space) {
                    this.skip = true;
                    this.section_id = 7;
                }
                if (score > 120) {
                    a.re('P41', [0, -1000, 0], [0, 0, 0], [1, 1, 1]);
                    a.msg_del()
                    a.msg_set("You remember the day vividly. It was August 24, 2006.");
                    this.section_id += 1
                }
                break;
            case 4:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (score > 360) {
                    a.msg_del()
                    a.msg_set("It was the day Earth decided that Pluto was no longer a planet.");
                    this.section_id += 1
                }
                break;
            case 5:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (score > 600) {
                    a.msg_del()
                    a.msg_set("As revenge, you have vowed to destroy every single planet.");
                    this.section_id += 1
                }
                break;
            case 6:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (score > 840) {
                    a.msg_del()
                    a.msg_set("With each planet destroyed, the remaining orbit a little slower.");
                    this.section_id += 1
                }
                break;
            case 7:
                camera.position.x = -17.1789;
		        camera.position.z = -1612.05;
                if (score > 1080 || this.skip) {
                    steer = default_steer;
                    cam_horizontal = this.ch;
                    cam_vertical = this.cv;
                    cam_depression = this.cd;
                    speed = 10 * default_speed;
                    radius = 12;
                    a.cam_d(radius);
                    a.msg_del()
                    a.msg_set("Crash into a planet to destroy it!")

                    const skymat1 = new BABYLON.StandardMaterial("skyBox1", scene);
                    skymat1.backFaceCulling = false;
                    const texture1 = new BABYLON.Texture("assets/textures/skybox.jpg", scene);
                    skymat1.reflectionTexture = texture1;
                    skymat1.reflectionTexture.coordinatesMode = BABYLON.Texture.SPHERICAL_MODE;
                    skymat1.disableLighting = true;
                    skybox1 = BABYLON.Mesh.CreateBox("skyBox1", 5000, scene);
                    skybox1.infiniteDistance = true;
                    skybox1.material = skymat1;

                    skymat1.freeze();

                    this.ss = score
                    this.section_id += 1
                }
                break;
            case 8:
                if (score > this.ss+120) {
                    a.msg_del()
                    a.msg_set("Hold space for a burst of speed but slower turning.")
                    this.ss = score + 100;
                    this.section_id += 1
                }
                break;
            case 9:
                if (controls.space) {
                    speed = 20 * default_speed;
                    steer = 0.5 * default_steer;
                } else {
                    speed = 10 * default_speed;
                    steer = default_steer;
                }
                if (score > this.ss+100) {
                    a.msg_del()
                    a.msg_set("Be wary of the sun. While the planets are alive, it can kill you.")
                    this.section_id += 1
                }
                break;
            case 10:
                if (controls.space) {
                    speed = 20 * default_speed;
                    steer = 0.5 * default_steer;
                } else {
                    speed = 10 * default_speed;
                    steer = default_steer;
                }
                if (score > this.ss+240) {
                    a.msg_del()
                    this.ss = Infinity
                    if (this.planet_count == 0) {
                        a.msg_set("Go into the sun.")
                    }
                }
                break;
        }
    },
    reset: function () {
        this.section_id = 0;
        this.skip = false;
        this.ss = 0;
        this.planet_count = 8;
        this.cooldown = false;
        a.re('S0', [0.37007-(-17.17993), 0.50007-0.50042, -1298.91993-(-1612.04958)], [0, 0, 0], [22, 22, 22]); // mercury
        a.re('S1', [0.37014-(-17.17993), 0.50014-0.50042, -1114.79986-(-1612.04958)], [0, 0, 0], [45.9, 45.9, 45.9]); // earth
        a.re('S2', [0.37021-(-17.17993), 6.60021-0.50042, -367.64979-(-1612.04958)], [0, 0, 0], [60, 60, 60]); // neptune
        a.re('S3', [0.37028-(-17.17993), 6.60028-0.50042, -540.82972-(-1612.04958)], [0, 0, 0], [60, 60, 60]); // uranus
        a.re('S4', [0.37035-(-17.17993), 0.50035-0.50042, -1044.15965-(-1612.04958)], [0, 0, 0], [25.76, 25.76, 25.76]); // mars
        a.re('S5', [0.37042-(-17.17993), 6.80042-0.50042, -938.68958-(-1612.04958)], [0, 0, 0], [100, 100, 100]); // jupiter
        a.re('S6', [0.37049-(-17.17993), 6.05049-0.50042, -747.11951-(-1612.04958)], [0, 0, 0], [80, 80, 80]); // saturn
        a.re('S7', [0.37-(-17.17993), 0.5-0.50042, -1195.09-(-1612.04958)], [0, 0, 0], [45.9, 45.9, 45.9]); // venus
        a.re('S8', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [406.8, 406.8, 406.8]); // sun
        a.re('S9', [0, 0, 0], [0, 0, 0], [12, 12, 12]); // pluto
        a.re('S10', [0.37049-(-17.17993), 6.05049-0.50042, -747.11951-(-1612.04958)], [0, 0, 0], [1, 1, 1]); // saturn ring parent
        a.re('S11', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [300, 300, 300]);
        a.re('S12', [0, 0, 0], [0, 0, 0], [200, 200, 200]);

        a.m('S0').isVisible = true;
        a.m('S1').isVisible = true;
        a.m('S2').isVisible = true;
        a.m('S3').isVisible = true;
        a.m('S4').isVisible = true;
        a.m('S5').isVisible = true;
        a.m('S6').isVisible = true;
        a.m('S7').isVisible = true;
        
        a.re('P0', [81.3-0.37049, 1.15-6.05049, -700.6-(-747.11951)], [-2.1, 0.01, 0.3], [24.06, 0.12, 43.42]);
        a.re('P1', [-4.37-0.37049, -23.6-6.05049, -838.72-(-747.11951)], [-6.25, -0.26, -0.16], [24.06, 0.12, 43.42]);
        a.re('P2', [14.62-0.37049, -25.92-6.05049, -836.63-(-747.11951)], [-0.15, -0.28, -0.11], [24.06, 0.12, 43.42]);
        a.re('P3', [32.42-0.37049, -27.32-6.05049, -831.83-(-747.11951)], [-0.36, -0.3, -0.05], [24.06, 0.12, 43.42]);
        a.re('P4', [47.83-0.37049, -27.42-6.05049, -823.62-(-747.11951)], [-0.53, -0.3, 0.01], [24.06, 0.12, 43.42]);
        a.re('P5', [61.89-0.37049, -26.68-6.05049, -813.09-(-747.11951)], [-0.71, -0.3, 0.06], [24.06, 0.12, 43.42]);
        a.re('P6', [75.32-0.37049, -24.87-6.05049, -798.99-(-747.11951)], [-0.89, -0.28, 0.12], [24.06, 0.12, 43.42]);
        a.re('P7', [84.68-0.37049, -21.98-6.05049, -783.2-(-747.11951)], [-1.1, -0.25, 0.17], [24.06, 0.12, 43.42]);
        a.re('P8', [91.13-0.37049, -18-6.05049, -765.08-(-747.11951)], [-1.3, -0.21, 0.22], [24.06, 0.12, 43.42]);
        a.re('P9', [93.21-0.37049, -13.56-6.05049, -747.68-(-747.11951)], [-1.5, -0.16, 0.26], [24.06, 0.12, 43.42]);
        a.re('P10', [92.32-0.37049, -8.37-6.05049, -729.22-(-747.11951)], [-1.68, -0.12, 0.28], [24.06, 0.12, 43.42]);
        a.re('P11', [88.49-0.37049, -4.05-6.05049, -715.57-(-747.11951)], [-1.93, -0.04, 0.3], [24.06, 0.12, 43.42]);
        a.re('P12', [74.19-0.37049, 4.97-6.05049, -690.59-(-747.11951)], [-2.24, 0.05, 0.3], [24.06, 0.12, 43.42]);
        a.re('P13', [61.27-0.37049, 10.57-6.05049, -677.3-(-747.11951)], [-2.42, 0.1, 0.29], [24.06, 0.12, 43.42]);
        a.re('P14', [43.9-0.37049, 16.22-6.05049, -666.33-(-747.11951)], [-2.59, 0.15, 0.27], [24.06, 0.12, 43.42]);
        a.re('P15', [28.83-0.37049, 20.35-6.05049, -659.64-(-747.11951)], [-2.82, 0.2, 0.23], [24.06, 0.12, 43.42]);
        a.re('P16', [11.14-0.37049, 23.85-6.05049, -656.7-(-747.11951)], [-3.03, 0.25, 0.18], [24.06, 0.12, 43.42]);
        a.re('P17', [-5.6-0.37049, 26.25-6.05049, -657.23-(-747.11951)], [-3.29, 0.28, 0.11], [24.06, 0.12, 43.42]);
        a.re('P18', [-23.62-0.37049, 27.68-6.05049, -662.05-(-747.11951)], [-3.5, 0.3, 0.05], [24.06, 0.12, 43.42]);
        a.re('P19', [-43.43-0.37049, 28.28-6.05049, -670.88-(-747.11951)], [-3.59, 0.3, 0.02], [24.06, 0.12, 43.42]);
        a.re('P20', [-59.78-0.37049, 27.77-6.05049, -681.85-(-747.11951)], [-3.77, 0.3, -0.04], [24.06, 0.12, 43.42]);
        a.re('P21', [-70.4-0.37049, 26.17-6.05049, -693.63-(-747.11951)], [-3.97, 0.29, -0.1], [24.06, 0.12, 43.42]);
        a.re('P22', [-80.87-0.37049, 23.66-6.05049, -708.61-(-747.11951)], [-4.24, 0.25, -0.17], [24.06, 0.12, 43.42]);
        a.re('P23', [-89.08-0.37049, 19.49-6.05049, -728.42-(-747.11951)], [-4.36, 0.23, -0.2], [24.06, 0.12, 43.42]);
        a.re('P24', [-92.19-0.37049, 15.65-6.05049, -744.21-(-747.11951)], [-4.62, 0.17, -0.25], [24.06, 0.12, 43.42]);
        a.re('P25', [-92.09-0.37049, 10.8-6.05049, -761.87-(-747.11951)], [-4.82, 0.12, -0.28], [24.06, 0.12, 43.42]);
        a.re('P26', [-88.37-0.37049, 5.76-6.05049, -778.19-(-747.11951)], [-5.03, 0.06, -0.3], [24.06, 0.12, 43.42]);
        a.re('P27', [-81.06-0.37049, 0.33-6.05049, -793.98-(-747.11951)], [-5.28, -0.02, -0.3], [24.06, 0.12, 43.42]);
        a.re('P28', [-70.44-0.37049, -5.39-6.05049, -808.97-(-747.11951)], [-5.43, -0.06, -0.3], [24.06, 0.12, 43.42]);
        a.re('P29', [-56.7-0.37049, -10.93-6.05049, -821.54-(-747.11951)], [-5.62, -0.12, -0.28], [24.06, 0.12, 43.42]);
        a.re('P30', [-40.89-0.37049, -15.75-6.05049, -830.38-(-747.11951)], [-5.87, -0.18, -0.24], [24.06, 0.12, 43.42]);
        a.re('P31', [-23.45-0.37049, -20.02-6.05049, -836.26-(-747.11951)], [-6.07, -0.23, -0.2], [24.06, 0.12, 43.42]);
        
        a.re('P32', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P33', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P34', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P35', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P36', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P37', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P38', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P39', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);
        a.re('P40', [-17.17993, 0.50007, -1612.04993], [0, 0, 0], [1, 1, 1]);

        a.re('P41', [0, 0.5, 0], [0, 0, 0], [1, 1, 1]);

        a.re('E0', [0, 0.50042, -1612.04958], [0, 0, 0], [20, 20, 20]);
    },
    physics_update: function () {},
    render_update: function () {},
    on_planet_death: function (planet_name, mesh_name, colourStr) {
        if (this.cooldown) return;

        this.planet_count -= 1;
        if (this.planet_count != 0) {
            if (planet_name == "Earth") {
                a.msg_set(`Earth down. Who's the planet now? ${map.planet_count} to go.`);
            } else if (planet_name == "Uranus") { 
                a.msg_set(`Uranus down, it was never funny. ${map.planet_count} to go.`);
            } else {
                a.msg_set(`${planet_name} down. ${map.planet_count} to go.`); // msg
            }
        } else {
            a.msg_set(`${planet_name} down. You have wiped out every planet.`);
        }
        this.ss = score;

        a.m(mesh_name).isVisible = false; // make mesh invis
        if (mesh_name == "S6") {
            var childMeshes = a.m('S10').getChildMeshes();
            for (var i = 0; i < childMeshes.length; i++) {
                childMeshes[i].isVisible = false;
            }
        }

        var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
        
        particleSystem.particleTexture = new BABYLON.Texture("assets/textures/flare.png", scene);
        
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1.5;
        particleSystem.minSize = 0.1;
        particleSystem.maxSize = 0.5;
        particleSystem.emitRate = 100000;
        
        a.m('S12').position = a.m(mesh_name).getAbsolutePosition();
        particleSystem.emitter = a.m('S12'); // emitter mesh

        particleSystem.emitPower = 1000;
        
        let colour = decorations.hexToRgb(`#${colourStr}`); // colour object
        
        particleSystem.color1 = new BABYLON.Color4(colour.r, colour.g, colour.b, 1);
        particleSystem.color2 = new BABYLON.Color4(colour.r, colour.g, colour.b, 1);
        particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.5);

        particleSystem.start();
        this.cooldown = true;

        setTimeout(function() {
            particleSystem.stop();
            a.re(mesh_name, [-1000, -1000, 1000], [0, 0, 0], [1, 1, 1]);
            map.cooldown = false;
        }, 100);
    },
    run: function(full_reset=true) {
		if (isMapLoaded == false) {
			console.error("Map is not loaded");
			return;
		}
		if (full_reset == true) {
			currentMapId = null;
			isMapLoaded = false;
			map = {
				render_update: function() {},
				physics_update: function() {},
				section_update: function() {}
			}
			cc.hard_reset();
		}

		for (let i=0;i<maker.ending_count;i++) {
			let mesh_name = "E" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose(true);
		}
		for (let i=0;i<maker.platform_count;i++) {
			let mesh_name = "P" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose(true);
		}
		for (let i=0;i<maker.cone_count;i++) {
			let mesh_name = "C" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose(true);
		}
		for (let i=0;i<maker.cylinder_count;i++) {
			let mesh_name = "Y" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose(true);
		}
		for (let i=0;i<maker.sphere_count;i++) {
			let mesh_name = "S" + i;
			let mesh = scene.getMeshByName(mesh_name);
			mesh.dispose(true);
		}
        light1.dispose()
        light2.dispose()
        skybox1.dispose();
        settings.skyboxEnabled = rememberskybox;
        player.actionManager = null;
		cones = [];
		endings = [];
		jumppads = [];
		driftPads = [];
		maker.platform_count = 0;
		maker.cone_count = 0;
		maker.cylinder_count = 0;
		maker.sphere_count = 0;
		maker.ending_count = 0;
	}
}