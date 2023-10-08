var map = {
    title: "Cone Invaders",
    song: "env2",
    maker: "applepear",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0, 0.5, 2], [0, 0, 0], [26, 2, 2], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([12, 0.5, 0], [4.71, 0, 0], [2, 2, 2], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([-12, 0.5, 0], [4.71, 0, 0], [2, 2, 2], "-1", 0, 0, 0.6, false, false, false, false);
        a.p([0, -1, 0.5], [0, 0, 0], [24, 2, 3], "e61010", 0, 0, 0.6, false, true, false, false);
        a.c([0, 0.15999999999999998, -14], true);
        a.c([2, 0.15999999999999998, -14], true);
        a.c([4, 0.15999999999999998, -14], true);
        a.c([6, 0.15999999999999998, -14], true);
        a.c([8, 0.15999999999999998, -14], true);
        a.c([10, 0.15999999999999998, -14], true);
        a.c([0, 0.15999999999999998, -12], true);
        a.c([2, 0.15999999999999998, -12], true);
        a.c([4, 0.15999999999999998, -12], true);
        a.c([6, 0.15999999999999998, -12], true);
        a.c([8, 0.15999999999999998, -12], true);
        a.c([10, 0.15999999999999998, -12], true);
        a.c([0, 0.15999999999999998, -12], true);
        a.c([2, 0.15999999999999998, -12], true);
        a.c([4, 0.15999999999999998, -12], true);
        a.c([6, 0.15999999999999998, -12], true);
        a.c([8, 0.15999999999999998, -12], true);
        a.c([10, 0.15999999999999998, -12], true);
        a.c([0, 0.15999999999999998, -10], true);
        a.c([2, 0.15999999999999998, -10], true);
        a.c([4, 0.15999999999999998, -10], true);
        a.c([6, 0.15999999999999998, -10], true);
        a.c([8, 0.15999999999999998, -10], true);
        a.c([10, 0.15999999999999998, -10], true);
        a.c([0, 0.15999999999999998, -10], true);
        a.c([2, 0.15999999999999998, -10], true);
        a.c([4, 0.15999999999999998, -10], true);
        a.c([6, 0.15999999999999998, -10], true);
        a.c([8, 0.15999999999999998, -10], true);
        a.c([10, 0.15999999999999998, -10], true);
        a.c([0, 0.15999999999999998, -8], true);
        a.c([2, 0.15999999999999998, -8], true);
        a.c([4, 0.15999999999999998, -8], true);
        a.c([6, 0.15999999999999998, -8], true);
        a.c([8, 0.15999999999999998, -8], true);
        a.c([10, 0.15999999999999998, -8], true);
        a.c([0, 0.15999999999999998, -8], true);
        a.c([2, 0.15999999999999998, -8], true);
        a.c([4, 0.15999999999999998, -8], true);
        a.c([6, 0.15999999999999998, -8], true);
        a.c([8, 0.15999999999999998, -8], true);
        a.c([10, 0.15999999999999998, -8], true);
        a.c([0, 0.15999999999999998, -6], true);
        a.c([0, 0.15999999999999998, -14], true);
        a.c([2, 0.15999999999999998, -14], true);
        a.c([4, 0.15999999999999998, -14], true);
        a.c([6, 0.15999999999999998, -14], true);
        a.c([8, 0.15999999999999998, -14], true);
        a.c([10, 0.15999999999999998, -14], true);
        a.c([2, 0.15999999999999998, -6], true);
        a.c([4, 0.15999999999999998, -6], true);
        a.c([6, 0.15999999999999998, -6], true);
        a.c([8, 0.15999999999999998, -6], true);
        a.c([10, 0.15999999999999998, -6], true);
        a.c([0, 0.15999999999999998, -6], true);
        a.c([2, 0.15999999999999998, -6], true);
        a.c([4, 0.15999999999999998, -6], true);
        a.c([6, 0.15999999999999998, -6], true);
        a.c([8, 0.15999999999999998, -6], true);
        a.c([10, 0.15999999999999998, -6], true);
        a.e([0, 0, 10]);
    },
    post: function() {
        cc.set_monkey("speed", 0);
        cc.set_monkey("steer", 0);
        cc.set_monkey("camera.maxZ", 20);
        cc.set_monkey("gravity", new BABYLON.Vector3(null, 0, null));
        cc.set_monkey("player.scaling", new BABYLON.Vector3(2, 0.16, 2));
        cc.refresh();

        for (let i=0;i<maker.cone_count;i++) {
            cones[i].unfreezeWorldMatrix();
        }
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < 1) {
                    a.fov_mul2(1);
                    cam_horizontal = 0;
                    cam_vertical = 20;
                    cam_depression = 1.57;
                    this.section_id += 1
                }
                break;
            case 1:
                if (score > 10) {
                    a.msg_set("Hold space to shoot!");
                    this.section_id += 1;
                }
                break;
            case 2:
                if (score > 180) {
                    a.msg_del();
                    a.msg_set("Don't let the cones reach you!");
                    this.section_id += 1;
                }
                break;
            case 3:
                if (score > 360) {
                    a.msg_del();
                    this.section_id += 1;
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        for (let dodo of this.mini_dodos) {
            dodo.dispose();
        }
        this.mini_dodos = [];
        this.ss = 0;
        this.sss = 0;
        this.count = 0;
        this.kill_count = 0;
        a.re('P0', [0, 0.5, 2], [0, 0, 0], [26, 2, 2]);
        a.re('P1', [12, 0.5, 0], [4.71, 0, 0], [2, 2, 2]);
        a.re('P2', [-12, 0.5, 0], [4.71, 0, 0], [2, 2, 2]);
        a.re('P3', [0, -1, 0.5], [0, 0, 0], [24, 2, 3]);
        a.re('C0', [0, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [2, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C2', [4, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [6, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [8, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [10, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [0, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [2, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [4, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [6, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [8, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [10, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [0, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [2, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [4, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [6, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [8, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [10, 0.15999999999999998, -12], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [0, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [2, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [4, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [6, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [8, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [10, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [0, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [2, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [4, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [6, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [8, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [10, 0.15999999999999998, -10], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [0, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [2, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [4, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C33', [6, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C34', [8, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C35', [10, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C36', [0, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C37', [2, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C38', [4, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C39', [6, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C40', [8, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C41', [10, 0.15999999999999998, -8], [0, 0, 0], [2, 2, 2]);
        a.re('C42', [0, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C43', [0, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C44', [2, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C45', [4, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C46', [6, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C47', [8, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C48', [10, 0.15999999999999998, -14], [0, 0, 0], [2, 2, 2]);
        a.re('C49', [2, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C50', [4, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C51', [6, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C52', [8, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C53', [10, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C54', [0, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C55', [2, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C56', [4, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C57', [6, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C58', [8, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('C59', [10, 0.15999999999999998, -6], [0, 0, 0], [2, 2, 2]);
        a.re('E0', [0, 0, 10], [0, 0, 0], [1, 1, 1]);
    },
    mini_dodos: [],
    ss: 0,
    sss: 0,
    count: 0,
    kill_count: 0,
    physics_update: function() {},
    render_update: function() {
        player.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, 0));
        if (controls.left) {
            player.position.x += 0.2;
        } else if (controls.right) {
            player.position.x -= 0.2;
        }
        player.position.z = 0;
        player.position.y = 0;
        camera.position.z = player.position.z - 7;
        camera.position.x = 0;

        if (controls.space && score > this.ss + 27) {
            this.mini_dodos.push(player.clone("player"+this.mini_dodos.length));
            this.mini_dodos[this.mini_dodos.length-1].position.y = 0;
            this.mini_dodos[this.mini_dodos.length-1].scaling = new BABYLON.Vector3(0.2, 0.16, 1);
            setTimeout(() => {
                this.mini_dodos[this.mini_dodos.length-1].physicsImpostor = new BABYLON.PhysicsImpostor(this.mini_dodos[this.mini_dodos.length-1], BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1.0, restitution: 1.0, friction: 0.5}, scene);
            }, 0);
            this.mini_dodos[this.mini_dodos.length-1].applyGravity = true;
            this.mini_dodos[this.mini_dodos.length-1].checkCollisions = true;
            this.ss = score;
        }

        for (let i=0;i<maker.cone_count;i++) {
            for (let j=0;j<this.mini_dodos.length;j++) {
                if (this.are_touching(this.mini_dodos[j], cones[i], 0.5)) {
                    cones[i].position.x = -200;
                    cones[i].position.z = -200;
                    this.mini_dodos[j].position.x = 200;
                    this.mini_dodos[j].position.z = -200;
                    this.kill_count += 1;

                    if (this.kill_count == 60) {
                        change_state.win();
                    }
                }
            }                    
        };

        if (score > this.sss+30) {
            for (let i=0;i<maker.cone_count;i++) {
                if (this.count != 0 &&
                    (this.count == 10 ||
                    this.count == 21 ||
                    this.count == 32 ||
                    this.count == 43 ||
                    this.count == 54 ||
                    this.count == 65 ||
                    this.count == 76 ||
                    this.count == 87 ||
                    this.count == 98)) {
                    cones[i].position.z += 2;
                } else if ((this.count >= 0 && this.count < 10) ||
                (this.count > 21 && this.count < 32) ||
                (this.count > 43 && this.count < 54) ||
                (this.count > 65 && this.count < 76) ||
                (this.count > 87 && this.count < 98)) {
                    cones[i].position.x -= 1;
                } else if ((this.count > 10 && this.count < 21) ||
                (this.count > 32 && this.count < 43) ||
                (this.count > 54 && this.count < 65) ||
                (this.count > 76 && this.count < 87) ||
                (this.count > 98 && this.count < 109)) {
                    cones[i].position.x += 1;
                }

                if (cones[i].position.z > -1) {
                    change_state.die('Died From Cone');
                }
            };
            this.count += 1;
            this.sss = score;
        }

        for (let dodo of this.mini_dodos) {
            dodo.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, 0, -5));
        }
    },
    are_touching: function(a, b, r) {
		let dz = a.position.z - b.position.z;
		if (Math.abs(dz) < r) {
			let dx = a.position.x - b.position.x;
			if (Math.abs(dx) < r) {
				let dy = a.position.y - b.position.y;
				if (Math.abs(dy) < r * 1.5) {
					return true;
				}
			}
		}
		return false;
	}
}
