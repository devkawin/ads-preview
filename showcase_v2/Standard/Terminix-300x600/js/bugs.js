!function(t, e) {
    function i() {
        var t = this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));
        return t.gotoAndStop(this.currentFrame),
        t.paused = this.paused,
        t.framerate = this.framerate,
        t
    }
    function s(e, s, a) {
        var o = t.extend(e, t.MovieClip);
        return o.clone = i,
        o.nominalBounds = s,
        o.frameBounds = a,
        o
    }
    var a, o = {}, n = {}, h = {};
    o.ssMetadata = [],
    (o.WingLower = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AhEAwQg2gLgogQQgZgKgPgKQgJgGgCgIQgCgJAHgLQAXgiBFAFQAYADAhAGIAxALQBQARCEAZQAbAMgfAFIgCACQgEABgGAGQgnAlhSABQgzAAhSgQg"),
        this.shape.setTransform(.0207, -.0071),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.WingLower, new t.Rectangle(-21.4,-6.3,42.9,12.7), null),
    (o.LTWing = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("ABIBVQgwgIgzgTQglgOhVglQhTgjgIgEQgSgMALgQQAIgLATgIQAXgKAhACQAgABAzAQQAiALA/AZQAuATChBEQAxASghADQgTgEgSADQgJABgRAHQgYAIgfAAQgXAAgagEg"),
        this.shape.setTransform(.0189, .0417),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.LTWing, new t.Rectangle(-25.2,-8.8,50.5,17.700000000000003), null),
    (o.L3_S3 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgBAQIABgGIgDAFQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAGgOADgOIgDgBIgBgBIAHACQAAAHgDAIIgEAPIgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAg"),
        this.shape.setTransform(.025, .025),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L3_S3, new t.Rectangle(-.6,-1.6,1.2999999999999998,3.3), null),
    (o.L3_S2 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AAEAiQgCgCgBgDIgFgZIgHgaQgCgEAAgFIABgFIAFAAIgBACQgBAFADAHIAJAaIAKAaQABAEgDACIAAABg"),
        this.shape.setTransform(.0061, 0),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L3_S2, new t.Rectangle(-1.3,-3.6,2.7,7.300000000000001), null),
    (o.L3_S1 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgaAgQgDgIANgQIAggnQAeAMguAZIgKANIgHAKIgEADg"),
        this.shape.setTransform(1.247, -.875),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L3_S1, new t.Rectangle(-1.5,-4.1,5.6,6.5), null),
    (o.L2_S3 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgJAKQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBIAGgFIgHADQAAABgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBIAUgLIADACIgTAQIgCABIgBAAg"),
        this.shape.setTransform(-.005, .0063),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L2_S3, new t.Rectangle(-1.3,-1,2.6,2), null),
    (o.L2_S2 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgQAaQADgOAJgPQAJgSAJgHIADADIgDAFQgGAIgGAQQgGASgCADIgFADIgCAAIAAABg"),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L2_S2, new t.Rectangle(-1.7,-2.8,3.5,5.699999999999999), null),
    (o.L2_S1 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgQANIABgCQABgDAEgEIAQgPQATgKgOAUIgPANQgCACgDABIgDAAIgBABg"),
        this.shape.setTransform(.295, -.1517),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L2_S1, new t.Rectangle(-1.4,-1.7,3.4,3.0999999999999996), null),
    (o.L1_S3 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AABAFIgFgEIgFgBIgBgCQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIAGACIgEgFQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAABABAAQADAEAJAEQADACAAAEIgCACQgFAAgDgEg"),
        this.shape.setTransform(.025, .0107),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L1_S3, new t.Rectangle(-1.1,-.9,2.3,1.9), null),
    (o.L1_S2 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgDACQgEgHAAgIIACgCQAHAAADAMQADAGAAALIgCACQgGgGgDgIg"),
        this.shape.setTransform(-.0028, .025),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L1_S2, new t.Rectangle(-.8,-1.6,1.6,3.3), null),
    (o.L1_S1 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AAEAJQgPgKgBgDIgBgGIACgCIAAABQAJgEALARQAIALgEAAQgCAAgHgEg"),
        this.shape.setTransform(.8112, -.0189),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.L1_S1, new t.Rectangle(-.6,-1.3,2.8000000000000003,2.6), null),
    (o.thorax = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgaAsQgFgBAAgJIgDgDQgCgKAGgIIAAgOIgCgNQgCgMAHgJQgCgKAHgDIABgCQAUgJAXAJIABACQAHADgCAKQAGAJgBAMIgCANIAAAOQAGAIgDAKIgCADQgBAJgDABQgNALgOAAQgMAAgPgLg"),
        this.shape.setTransform(.0132, .3407),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.thorax, new t.Rectangle(-3.5,-5.2,7.1,11.100000000000001), null),
    (o.head = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgVAKIAAgBQgDgKAGgGIAEgJIADgCIADgCIADgBIAAgDQABgEAEAAQAEAAABAEIACADQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIADACIAHAJQAGAIgDAKIAAABQgLATgLAAQgKAAgLgTg"),
        this.shape.setTransform(-.4891, 3.8586),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.head, new t.Rectangle(-2.8,1,4.6,5.8), null),
    (o.abdomen = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgUBHQgHgIgFgMQgJgWAEgdIAEgUIAHgXIAAgHQAag+AcA+IgBAHIAHAXIAEAUQAEAdgJAWQgFAMgHAIQgKALgLAAQgKAAgKgLg"),
        this.shape.setTransform(.024, -1.5361),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.abdomen, new t.Rectangle(-3.9,-9.7,7.9,16.4), null),
    (o.antennae = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AgNAFQAAgZAUgQIABgBIACgCQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgRAPAAAXQAAAKAHAMIACAFQAHAHgLACQgNgRAAgSg"),
        this.shape.setTransform(.005, .0083),
        this.timeline.addTween(t.Tween.get(this.shape).wait(1))
    }
    ).prototype = s(o.antennae, new t.Rectangle(-1.3,-4,2.7,8), null),
    (o.wing_T = function(e, i, s) {
        this.initialize(e, i, s, {
            flap: 0,
            fold: 9,
            unfold: 27
        }),
        this.frame_8 = function() {
            var t = this;
            t.gotoAndPlay("flap")
        }
        ,
        this.frame_26 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_33 = function() {
            var t = this;
            t.gotoAndPlay("flap")
        }
        ,
        this.timeline.addTween(t.Tween.get(this).wait(8).call(this.frame_8).wait(18).call(this.frame_26).wait(7).call(this.frame_33).wait(1)),
        this.instance = new o.LTWing,
        this.instance.parent = this,
        this.instance.setTransform(26.3, 8.15, 1, 1, -98.8017, 0, 0, 24.6, 7),
        this.instance._off = !0,
        this.timeline.addTween(t.Tween.get(this.instance).wait(27).to({
            _off: !1
        }, 0).to({
            regY: 6.9,
            rotation: 0,
            x: 26.2,
            y: 8.2
        }, 6, t.Ease.cubicIn).wait(1)),
        this.instance_1 = new o.LTWing,
        this.instance_1.parent = this,
        this.instance_1.setTransform(26.2, 8.2, 1, 1, 0, 0, 0, 24.6, 6.9),
        this.instance_1._off = !0,
        this.timeline.addTween(t.Tween.get(this.instance_1).wait(9).to({
            _off: !1
        }, 0).to({
            regY: 7,
            rotation: -98.8017,
            x: 26.3,
            y: 8.15
        }, 5, t.Ease.quadIn).to({
            rotation: -93.8462,
            x: 26.35
        }, 2).to({
            rotation: -98.8017,
            x: 26.3
        }, 2).to({
            regX: 24.5,
            rotation: -94.6019,
            x: 26.35,
            y: 8.25
        }, 3).to({
            regX: 24.6,
            rotation: -98.8017,
            x: 26.3,
            y: 8.15
        }, 5).to({
            _off: !0
        }, 1).wait(7)),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("ADSB7QgRgIgPAAQgIgBgQADQgjAHg3gXQgrgRgsgdQghgWhKg0IhRg6QgQgQAKgNQAHgJARgFQAVgFAcAHQAcAIAtAaQAeASA3AmQApAbCOBkQAlAYgSAAIgGAAg"),
        this.shape.setTransform(4.687, -3.775),
        this.shape_1 = new t.Shape,
        this.shape_1.graphics.f("#76C27F").s().p("AB9B9QgJgGgJAAQgFAAgJAEQgWAIgbgZIgyg1QgagbgrgvQgrgxgFgJQgHgNgBgTQgBgTARAJQATAKAZAWQAZAXAUAQQARANAdAhQAXAWBMBVQAVAWgNAAIgCAAg"),
        this.shape_1.setTransform(13.6803, -3.8506),
        this.shape_2 = new t.Shape,
        this.shape_2.graphics.f("#76C27F").s().p("ABdCCQgGgGgHAAQgDAAgHAEQgQAHgQgaQgQgbgWgdQgWgdgfgvQgfgxgEgLQgEgLgEgWQgFgWARAPQATAOAXAcIAiApQAKANAVAfQAQAWAzBTQAOAVgJAAIgCAAg"),
        this.shape_2.setTransform(17.0436, -4.3461),
        this.shape_3 = new t.Shape,
        this.shape_3.graphics.f("#76C27F").s().p("AAtBoIgzgzQgbgagrguQgsgwgFgJQgIgMAAgUQgCgTASAJQAUAJAZAWQAZAWAUAPQARAOAeAfQAXAVBNBUQAYAXgRgCQgKgGgJABQgFAAgJAEQgGACgGAAQgRAAgUgSg"),
        this.shape_3.setTransform(13.484, -3.4722),
        this.shape_4 = new t.Shape,
        this.shape_4.graphics.f("#76C27F").s().p("ABGBVQgvgIgxgUQgjgOhTglIhYgoQgSgMALgQQAIgLASgJQAXgJAfACQAfACAyAQQAgALA9AbQAtASCcBGQAvASggADQgSgFgRADQgJACgRAGQgWAIgdAAQgXAAgagFg"),
        this.shape_4.setTransform(2.4358, 1.1063),
        this.shape_5 = new t.Shape,
        this.shape_5.graphics.f("#76C27F").s().p("AAgA5Qg1gJgbgKQgYgHgugKQgtgKgGgDQgMgIAIgRQAFgNAOgMQAQgNAXgEQAWgFAkAIQAYAFAsAOQAhAKBxAoQAiAKgXAIQgNgBgNAGIgaARQgQAJgZAAQgTAAgYgFg"),
        this.shape_5.setTransform(9.1448, 5.8111),
        this.shape_6 = new t.Shape,
        this.shape_6.graphics.f("#76C27F").s().p("AAUAvIhMgNQgUgEghABQghACgGgDQgKgGAGgTQAFgMAMgOQAOgQAUgHQAUgHAfADQAVACAnAIQAcAGBjAaQAeAGgUAKQgMABgLAIIgbAUQgNALgdAAQgQAAgTgDg"),
        this.shape_6.setTransform(11.3548, 8.0007),
        this.shape_7 = new t.Shape,
        this.shape_7.graphics.f("#76C27F").s().p("AAhA6Qg1gKgcgJQgZgIgugJQgugKgGgDQgMgIAIgRQAFgNAOgMQAQgNAYgFQAWgEAlAHQAYAFAsAOQAhALBzAnQAiAKgXAIQgNgBgNAHIgbAQQgPAJgbAAQgSAAgYgEg"),
        this.shape_7.setTransform(8.92, 5.8447),
        this.shape_8 = new t.Shape,
        this.shape_8.graphics.f("#76C27F").s().p("ABIBVQgwgIgzgTQglgOhVglQhTgjgIgEQgSgMALgQQAIgLATgIQAXgKAhACQAgABAzAQQAiALA/AZQAuATChBEQAxASghADQgTgEgSADQgJABgRAHQgYAIgfAAQgXAAgagEg"),
        this.shape_8.setTransform(1.6189, 1.3417),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(25))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-24.9,-17.3,60.699999999999996,77.1),
    (o.wing_B = function(e, i, s) {
        this.initialize(e, i, s, {
            flap: 0,
            fold: 9,
            unfold: 26
        }),
        this.frame_8 = function() {
            var t = this;
            t.gotoAndPlay("flap")
        }
        ,
        this.frame_25 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_30 = function() {
            var t = this;
            t.gotoAndPlay("flap")
        }
        ,
        this.timeline.addTween(t.Tween.get(this).wait(8).call(this.frame_8).wait(17).call(this.frame_25).wait(5).call(this.frame_30).wait(1)),
        this.instance = new o.WingLower,
        this.instance.parent = this,
        this.instance.setTransform(23.65, -4.05, 1, 1, -91.0291, 0, 0, 20.8, .6),
        this.instance._off = !0,
        this.timeline.addTween(t.Tween.get(this.instance).wait(25).to({
            _off: !1
        }, 0).to({
            rotation: 0,
            x: 23.7,
            y: -3.9
        }, 5, t.Ease.quadInOut).wait(1)),
        this.instance_1 = new o.WingLower,
        this.instance_1.parent = this,
        this.instance_1.setTransform(23.7, -3.9, 1, 1, 0, 0, 0, 20.8, .6),
        this.instance_1._off = !0,
        this.timeline.addTween(t.Tween.get(this.instance_1).wait(9).to({
            _off: !1
        }, 0).to({
            rotation: -91.0291,
            x: 23.65,
            y: -4.05
        }, 4).to({
            regX: 20.7,
            rotation: -87.2056,
            x: 23.6,
            y: -3.95
        }, 2).to({
            regX: 20.8,
            rotation: -90.7773,
            x: 23.65,
            y: -4.05
        }, 2).to({
            regX: 20.7,
            regY: .7,
            rotation: -85.5523,
            x: 23.75
        }, 3).to({
            regX: 20.8,
            regY: .6,
            rotation: -89.4518,
            x: 23.65
        }, 5).to({
            _off: !0
        }, 1).wait(5)),
        this.shape = new t.Shape,
        this.shape.graphics.f("#76C27F").s().p("AA2BQQgqgJhDgeQgtgVghgWQgUgOgMgNQgIgJgBgHQgCgJAGgLQATgdA4ARQATAGAcANIAoAUQBBAfBsAvQAXASgZAAIgCAAQgEACgEAEQgXAUgmAAQgSAAgUgEg"),
        this.shape.setTransform(6.7999, -8.8263),
        this.shape_1 = new t.Shape,
        this.shape_1.graphics.f("#76C27F").s().p("AAxBcQgmgQg9gqQgogbgegcQgSgRgMgQQgGgJgCgIQgBgJAFgKQARgaAzAaQASAKAZARIAkAaQA6ApBjBCQAUAVgXgEIgCAAQgDABgEAEQgOAMgXAAQgWAAgegMg"),
        this.shape_1.setTransform(8.474, -11.975),
        this.shape_2 = new t.Shape,
        this.shape_2.graphics.f("#76C27F").s().p("AA2BUQgqgLhDgiQgtgXgggYQgUgPgNgOQgHgJgCgIQgCgJAHgKQASgcA4AUQAUAHAbAPQAPAHAZAOQBAAjBtA0QAWATgZgBIgCAAQgDABgFAEQgUASgiAAQgTAAgZgGg"),
        this.shape_2.setTransform(6.8664, -9.7948),
        this.shape_3 = new t.Shape,
        this.shape_3.graphics.f("#76C27F").s().p("AhHAyQg4gIgqgOQgagIgPgKQgKgGgCgGQgCgJAIgMQAXgjBIABQAZABAjAFIAyAIQBTAMCKARQAcALggAHIgCABQgEACgGAGQgqAnhUAFIgbABQguAAhCgIg"),
        this.shape_3.setTransform(2.0013, -3.0341),
        this.shape_4 = new t.Shape,
        this.shape_4.graphics.f("#76C27F").s().p("AhWBJQgfAAgWgGQgOgDgHgGQgGgHgBgLQgCgfAogTQASgPAmgGIArgGICHgkQAnADAVARQAHACgJAEIgDAIQgIAjgqAaQgkAZhFARQgpAKgtAAIgFgBg"),
        this.shape_4.setTransform(7.5004, 2.3512),
        this.shape_5 = new t.Shape,
        this.shape_5.graphics.f("#76C27F").s().p("Ah2BgQgJgBgEgEQgFgGAAgMQgBgmAsgdQAPgIAYgLIAigOQA3gZBagrQAWgDgQATIgBACIgDALQgIAvgwAmQgfAYg4AbQgmARgfAGQgQADgLAAIgGAAg"),
        this.shape_5.setTransform(11.3486, 5.5328),
        this.shape_6 = new t.Shape,
        this.shape_6.graphics.f("#76C27F").s().p("AiNBHQgOgDgHgFQgHgHgBgLQgBgeAngUQATgPAmgIIAtgIQAygNBVgYQAoAAAXANQAHACgJAEIgDAIQgIAjgqAbQgkAahHATQgsAMgxABIgMAAQgYAAgSgDg"),
        this.shape_6.setTransform(7.1769, 3.085),
        this.shape_7 = new t.Shape,
        this.shape_7.graphics.f("#76C27F").s().p("AirAwQgbgEgQgHQgKgFgCgHQgCgIAIgNQAYgmBJgKQAZgEAkAAIAzAAQBVgBCLgEQAdAGggAMIgDACIgKAJQgqAthWATQg2AMhXACIgOAAQgwAAglgGg"),
        this.shape_7.setTransform(1.6627, 1.1313),
        this.shape_8 = new t.Shape,
        this.shape_8.graphics.f("#76C27F").s().p("AhEAwQg2gLgogQQgZgKgPgKQgJgGgCgIQgCgJAHgLQAXgiBFAFQAYADAhAGIAxALQBQARCEAZQAbAMgfAFIgCACQgEABgGAGQgnAlhSABQgzAAhSgQg"),
        this.shape_8.setTransform(2.9207, -4.5071),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.shape
            }]
        }).to({
            state: [{
                t: this.shape_1
            }]
        }, 1).to({
            state: [{
                t: this.shape_2
            }]
        }, 1).to({
            state: [{
                t: this.shape_3
            }]
        }, 1).to({
            state: [{
                t: this.shape_4
            }]
        }, 1).to({
            state: [{
                t: this.shape_5
            }]
        }, 1).to({
            state: [{
                t: this.shape_6
            }]
        }, 1).to({
            state: [{
                t: this.shape_7
            }]
        }, 1).to({
            state: [{
                t: this.shape_8
            }]
        }, 1).to({
            state: []
        }, 1).wait(22))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-21,-22.4,51.2,60.9),
    (o.thorax_assembly = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.ikNode_12 = new o.L1_S3,
        this.ikNode_12.name = "ikNode_12",
        this.ikNode_12.parent = this,
        this.ikNode_12.setTransform(9.05, -14.25, 1, 1, 0, -4.7115, 175.2885, .8, .7),
        this.ikNode_11 = new o.L1_S2,
        this.ikNode_11.name = "ikNode_11",
        this.ikNode_11.parent = this,
        this.ikNode_11.setTransform(7.95, -11.4, 1, 1, 0, -4.7115, 175.2885, .4, 1.1),
        this.ikNode_10 = new o.L1_S1,
        this.ikNode_10.name = "ikNode_10",
        this.ikNode_10.parent = this,
        this.ikNode_10.setTransform(5.75, -8.65, 1, 1, 0, -4.8606, 175.1394, 1.8, .9),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -4.8606,
                    skewY: 175.1394,
                    x: 5.75,
                    y: -8.65
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -4.7115,
                    skewY: 175.2885,
                    x: 7.95,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -4.7115,
                    skewY: 175.2885,
                    x: 9.05,
                    y: -14.25
                }
            }]
        }).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -6.48,
                    skewY: 173.52,
                    x: 5.7,
                    y: -8.65
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -6.2828,
                    skewY: 173.7172,
                    x: 7.85,
                    y: -11.5
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -6.2828,
                    skewY: 173.7172,
                    x: 8.95,
                    y: -14.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -4.8606,
                    skewY: 175.1394,
                    x: 5.75,
                    y: -8.65
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -4.7115,
                    skewY: 175.2885,
                    x: 7.95,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -4.7115,
                    skewY: 175.2885,
                    x: 9.05,
                    y: -14.25
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -3.24,
                    skewY: 176.76,
                    x: 5.7,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -3.1411,
                    skewY: 176.8589,
                    x: 8,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -3.1411,
                    skewY: 176.8589,
                    x: 9.25,
                    y: -14.15
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -1.6203,
                    skewY: 178.3797,
                    x: 5.75,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -1.5704,
                    skewY: 178.4296,
                    x: 8.1,
                    y: -11.3
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -1.5704,
                    skewY: 178.4296,
                    x: 9.35,
                    y: -14.05
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 5.7,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 8.2,
                    y: -11.25
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 9.55,
                    y: -13.95
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 5.7,
                    y: -8.75
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 8.25,
                    y: -11.3
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 9.6,
                    y: -14
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -1.6203,
                    skewY: 178.3797,
                    x: 5.75,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -1.5704,
                    skewY: 178.4296,
                    x: 8.1,
                    y: -11.3
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -1.5704,
                    skewY: 178.4296,
                    x: 9.35,
                    y: -14.05
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10,
                p: {
                    skewX: -3.24,
                    skewY: 176.76,
                    x: 5.7,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11,
                p: {
                    skewX: -3.1411,
                    skewY: 176.8589,
                    x: 8,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12,
                p: {
                    skewX: -3.1411,
                    skewY: 176.8589,
                    x: 9.25,
                    y: -14.15
                }
            }]
        }, 1).wait(1)),
        this.ikNode_6 = new o.L2_S3,
        this.ikNode_6.name = "ikNode_6",
        this.ikNode_6.parent = this,
        this.ikNode_6.setTransform(13.55, 4.7, 1, 1, 0, -4.7729, 175.2271, .8, -.3),
        this.ikNode_5 = new o.L2_S2,
        this.ikNode_5.name = "ikNode_5",
        this.ikNode_5.parent = this,
        this.ikNode_5.setTransform(9.95, -.4, 1, 1, 0, -4.7729, 175.2271, 1.2, -2.1),
        this.ikNode_4 = new o.L2_S1,
        this.ikNode_4.name = "ikNode_4",
        this.ikNode_4.parent = this,
        this.ikNode_4.setTransform(6.55, -3.25, 1, 1, 0, -1.8092, 178.1908, 1.6, -1.2),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -1.8092,
                    skewY: 178.1908,
                    x: 6.55,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -4.7729,
                    skewY: 175.2271,
                    x: 9.95,
                    y: -.4
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: -4.7729,
                    skewY: 175.2271,
                    x: 13.55,
                    y: 4.7
                }
            }]
        }).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -3.6184,
                    skewY: 176.3816,
                    x: 6.55,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -9.5457,
                    skewY: 170.4543,
                    x: 10,
                    y: -.45
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.4,
                    skewX: -9.5457,
                    skewY: 170.4543,
                    x: 14,
                    y: 4.25
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -5.4277,
                    skewY: 174.5723,
                    x: 6.6,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -14.3187,
                    skewY: 165.6813,
                    x: 10.15,
                    y: -.6
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: -14.3187,
                    skewY: 165.6813,
                    x: 14.5,
                    y: 3.85
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -7.2365,
                    skewY: 172.7635,
                    x: 6.55,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -19.0921,
                    skewY: 160.9079,
                    x: 10.15,
                    y: -.7
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: -19.0921,
                    skewY: 160.9079,
                    x: 14.95,
                    y: 3.35
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -5.4277,
                    skewY: 174.5723,
                    x: 6.6,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -14.3187,
                    skewY: 165.6813,
                    x: 10.15,
                    y: -.6
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: -14.3187,
                    skewY: 165.6813,
                    x: 14.5,
                    y: 3.85
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -3.6184,
                    skewY: 176.3816,
                    x: 6.55,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -9.5457,
                    skewY: 170.4543,
                    x: 10,
                    y: -.45
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.4,
                    skewX: -9.5457,
                    skewY: 170.4543,
                    x: 14,
                    y: 4.25
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: -1.8092,
                    skewY: 178.1908,
                    x: 6.55,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: -4.7729,
                    skewY: 175.2271,
                    x: 9.95,
                    y: -.4
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: -4.7729,
                    skewY: 175.2271,
                    x: 13.55,
                    y: 4.7
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 6.6,
                    y: -3.3
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 9.85,
                    y: -.25
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: 0,
                    skewY: 180,
                    x: 13,
                    y: 5.15
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 6.65,
                    y: -3.3
                }
            }, {
                t: this.ikNode_5,
                p: {
                    skewX: 0,
                    skewY: 180,
                    x: 9.9,
                    y: -.2
                }
            }, {
                t: this.ikNode_6,
                p: {
                    regY: -.3,
                    skewX: 0,
                    skewY: 180,
                    x: 13.05,
                    y: 5.2
                }
            }]
        }, 1).wait(1)),
        this.ikNode_12_1 = new o.L1_S3,
        this.ikNode_12_1.name = "ikNode_12_1",
        this.ikNode_12_1.parent = this,
        this.ikNode_12_1.setTransform(-1.7, -14, 1, 1, 0, 0, 0, .8, .7),
        this.ikNode_11_1 = new o.L1_S2,
        this.ikNode_11_1.name = "ikNode_11_1",
        this.ikNode_11_1.parent = this,
        this.ikNode_11_1.setTransform(-.35, -11.3, 1, 1, 0, 0, 0, .4, 1.1),
        this.ikNode_10_1 = new o.L1_S1,
        this.ikNode_10_1.name = "ikNode_10_1",
        this.ikNode_10_1.parent = this,
        this.ikNode_10_1.setTransform(2.2, -8.75, 1, 1, 0, 0, 0, 1.8, .9),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 0,
                    x: 2.2,
                    y: -8.75
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 0,
                    x: -.35,
                    y: -11.3
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 0,
                    x: -1.7,
                    y: -14
                }
            }]
        }).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 1.6203,
                    x: 2.15,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 1.5704,
                    x: -.2,
                    y: -11.3
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 1.5704,
                    x: -1.45,
                    y: -14.05
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 3.24,
                    x: 2.2,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 3.1411,
                    x: -.1,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 3.1411,
                    x: -1.35,
                    y: -14.15
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 4.8606,
                    x: 2.15,
                    y: -8.65
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 4.7115,
                    x: -.05,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 4.7115,
                    x: -1.15,
                    y: -14.25
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 6.48,
                    x: 2.2,
                    y: -8.65
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 6.2828,
                    x: .05,
                    y: -11.5
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 6.2828,
                    x: -1.05,
                    y: -14.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 4.8606,
                    x: 2.15,
                    y: -8.65
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 4.7115,
                    x: -.05,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 4.7115,
                    x: -1.15,
                    y: -14.25
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 3.24,
                    x: 2.2,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 3.1411,
                    x: -.1,
                    y: -11.4
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 3.1411,
                    x: -1.35,
                    y: -14.15
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 1.6203,
                    x: 2.15,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 1.5704,
                    x: -.2,
                    y: -11.3
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 1.5704,
                    x: -1.45,
                    y: -14.05
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_10_1,
                p: {
                    rotation: 0,
                    x: 2.2,
                    y: -8.7
                }
            }, {
                t: this.ikNode_11_1,
                p: {
                    rotation: 0,
                    x: -.3,
                    y: -11.25
                }
            }, {
                t: this.ikNode_12_1,
                p: {
                    rotation: 0,
                    x: -1.65,
                    y: -13.95
                }
            }]
        }, 1).wait(1)),
        this.ikNode_6_1 = new o.L2_S3,
        this.ikNode_6_1.name = "ikNode_6_1",
        this.ikNode_6_1.parent = this,
        this.ikNode_6_1.setTransform(-5.15, 5.2, 1, 1, 0, 0, 0, .8, -.3),
        this.ikNode_5_1 = new o.L2_S2,
        this.ikNode_5_1.name = "ikNode_5_1",
        this.ikNode_5_1.parent = this,
        this.ikNode_5_1.setTransform(-2, -.2, 1, 1, 0, 0, 0, 1.2, -2.1),
        this.ikNode_4_1 = new o.L2_S1,
        this.ikNode_4_1.name = "ikNode_4_1",
        this.ikNode_4_1.parent = this,
        this.ikNode_4_1.setTransform(1.25, -3.3, 1, 1, 0, 0, 0, 1.6, -1.2),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 0,
                    x: 1.25,
                    y: -3.3
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 0,
                    x: -2,
                    y: -.2
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 0,
                    x: -5.15,
                    y: 5.2,
                    regY: -.3
                }
            }]
        }).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 1.8092,
                    x: 1.35,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 4.7729,
                    x: -2.05,
                    y: -.4
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 4.7729,
                    x: -5.65,
                    y: 4.7,
                    regY: -.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 3.6184,
                    x: 1.35,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 9.5457,
                    x: -2.1,
                    y: -.45
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 9.5457,
                    x: -6.1,
                    y: 4.25,
                    regY: -.4
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 5.4277,
                    x: 1.3,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 14.3187,
                    x: -2.25,
                    y: -.6
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 14.3187,
                    x: -6.6,
                    y: 3.85,
                    regY: -.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 7.2365,
                    x: 1.35,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 19.0921,
                    x: -2.25,
                    y: -.7
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 19.0921,
                    x: -7.05,
                    y: 3.35,
                    regY: -.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 5.4277,
                    x: 1.3,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 14.3187,
                    x: -2.25,
                    y: -.6
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 14.3187,
                    x: -6.6,
                    y: 3.85,
                    regY: -.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 3.6184,
                    x: 1.35,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 9.5457,
                    x: -2.1,
                    y: -.45
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 9.5457,
                    x: -6.1,
                    y: 4.25,
                    regY: -.4
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 1.8092,
                    x: 1.35,
                    y: -3.25
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 4.7729,
                    x: -2.05,
                    y: -.4
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 4.7729,
                    x: -5.65,
                    y: 4.7,
                    regY: -.3
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_4_1,
                p: {
                    rotation: 0,
                    x: 1.3,
                    y: -3.3
                }
            }, {
                t: this.ikNode_5_1,
                p: {
                    rotation: 0,
                    x: -1.95,
                    y: -.25
                }
            }, {
                t: this.ikNode_6_1,
                p: {
                    rotation: 0,
                    x: -5.1,
                    y: 5.15,
                    regY: -.3
                }
            }]
        }, 1).wait(1)),
        this.ikNode_3 = new o.L3_S3,
        this.ikNode_3.name = "ikNode_3",
        this.ikNode_3.parent = this,
        this.ikNode_3.setTransform(7.75, 14.15, .9999, .9999, 0, -8.4256, 171.5744, .5, -.8),
        this.ikNode_2 = new o.L3_S2,
        this.ikNode_2.name = "ikNode_2",
        this.ikNode_2.parent = this,
        this.ikNode_2.setTransform(8.7, 6.65, 1, 1, 0, -8.426, 171.574, -1.1, -3.1),
        this.ikNode_1 = new o.L3_S1,
        this.ikNode_1.name = "ikNode_1",
        this.ikNode_1.parent = this,
        this.ikNode_1.setTransform(6.05, .1, 1, 1, 0, 14.2197, -165.7803, 2.8, -2.8),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 14.2197,
                    skewY: -165.7803,
                    x: 6.05,
                    regX: 2.8,
                    y: .1
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: -8.426,
                    skewY: 171.574,
                    x: 8.7,
                    y: 6.65
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .5,
                    skewX: -8.4256,
                    skewY: 171.5744,
                    x: 7.75,
                    y: 14.15
                }
            }]
        }).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: 10.4786,
                    skewY: -169.5214,
                    x: 6,
                    regX: 2.8,
                    y: .1
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: -5.5185,
                    skewY: 174.4815,
                    x: 8.95,
                    y: 6.4
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: -5.5188,
                    skewY: 174.4812,
                    x: 7.65,
                    y: 14
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: 6.7374,
                    skewY: -173.2626,
                    x: 5.9,
                    regX: 2.9,
                    y: .05
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: -2.6125,
                    skewY: 177.3875,
                    x: 9.4,
                    y: 6.15
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: -2.6126,
                    skewY: 177.3874,
                    x: 7.65,
                    y: 13.7
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 2.9977,
                    skewY: -177.0023,
                    x: 6,
                    regX: 2.8,
                    y: .05
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: .2876,
                    skewY: -179.7124,
                    x: 9.7,
                    y: 5.9
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: .2877,
                    skewY: -179.7123,
                    x: 7.65,
                    y: 13.35
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: -.7371,
                    skewY: 179.2629,
                    x: 5.95,
                    regX: 2.8,
                    y: .05
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 3.1938,
                    skewY: -176.8062,
                    x: 10.05,
                    y: 5.65
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: 3.1939,
                    skewY: -176.8061,
                    x: 7.65,
                    y: 12.95
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 2.9968,
                    skewY: -177.0032,
                    x: 6,
                    regX: 2.8,
                    y: .05
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: .2876,
                    skewY: -179.7124,
                    x: 9.65,
                    y: 5.9
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: .2885,
                    skewY: -179.7115,
                    x: 7.65,
                    y: 13.4
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    skewX: 6.7373,
                    skewY: -173.2627,
                    x: 5.9,
                    regX: 2.9,
                    y: .05
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: -2.6125,
                    skewY: 177.3875,
                    x: 9.35,
                    y: 6.15
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: -2.6126,
                    skewY: 177.3874,
                    x: 7.6,
                    y: 13.75
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: 10.4772,
                    skewY: -169.5228,
                    x: 6,
                    regX: 2.8,
                    y: .1
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: -5.5176,
                    skewY: 174.4824,
                    x: 8.9,
                    y: 6.35
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: -5.518,
                    skewY: 174.482,
                    x: 7.55,
                    y: 14
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: 14.2178,
                    skewY: -165.7822,
                    x: 5.95,
                    regX: 2.8,
                    y: .05
                }
            }, {
                t: this.ikNode_2,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    skewX: -8.4239,
                    skewY: 171.5761,
                    x: 8.6,
                    y: 6.55
                }
            }, {
                t: this.ikNode_3,
                p: {
                    regX: .6,
                    skewX: -8.4244,
                    skewY: 171.5756,
                    x: 7.6,
                    y: 14.15
                }
            }]
        }, 1).wait(1)),
        this.ikNode_3_1 = new o.L3_S3,
        this.ikNode_3_1.name = "ikNode_3_1",
        this.ikNode_3_1.parent = this,
        this.ikNode_3_1.setTransform(-.1, 14.15, .9999, .9999, 8.4256, 0, 0, .5, -.8),
        this.ikNode_2_1 = new o.L3_S2,
        this.ikNode_2_1.name = "ikNode_2_1",
        this.ikNode_2_1.parent = this,
        this.ikNode_2_1.setTransform(-1.05, 6.65, 1, 1, 8.426, 0, 0, -1.1, -3.1),
        this.ikNode_1_1 = new o.L3_S1,
        this.ikNode_1_1.name = "ikNode_1_1",
        this.ikNode_1_1.parent = this,
        this.ikNode_1_1.setTransform(1.7, .1, 1, 1, -14.2197, 0, 0, 2.9, -2.8),
        this.timeline.addTween(t.Tween.get({}).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.9,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -14.2197,
                    x: 1.7,
                    y: .1
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 8.426,
                    x: -1.05,
                    y: 6.65
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .5,
                    rotation: 8.4256,
                    x: -.1,
                    y: 14.15
                }
            }]
        }).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.8,
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: -10.4786,
                    x: 1.65,
                    y: .1
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: 5.5185,
                    x: -1.3,
                    y: 6.4
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: 5.5188,
                    x: 0,
                    y: 14
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.9,
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: -6.7374,
                    x: 1.75,
                    y: .05
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: 2.6125,
                    x: -1.75,
                    y: 6.15
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: 2.6126,
                    x: 0,
                    y: 13.7
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.8,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -2.9977,
                    x: 1.65,
                    y: .05
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -.2876,
                    x: -2.05,
                    y: 5.9
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: -.2877,
                    x: 0,
                    y: 13.35
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.8,
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: .7371,
                    x: 1.7,
                    y: .05
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -3.1938,
                    x: -2.4,
                    y: 5.65
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: -3.1939,
                    x: 0,
                    y: 12.95
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.8,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -2.9968,
                    x: 1.65,
                    y: .05
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -.2876,
                    x: -2,
                    y: 5.9
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: -.2885,
                    x: 0,
                    y: 13.4
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.9,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: -6.7373,
                    x: 1.75,
                    y: .05
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: 2.6125,
                    x: -1.7,
                    y: 6.15
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: 2.6126,
                    x: .05,
                    y: 13.75
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.8,
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: -10.4772,
                    x: 1.65,
                    y: .1
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: 5.5176,
                    x: -1.25,
                    y: 6.35
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: 5.518,
                    x: .1,
                    y: 14
                }
            }]
        }, 1).to({
            state: [{
                t: this.ikNode_1_1,
                p: {
                    regX: 2.8,
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: -14.2178,
                    x: 1.7,
                    y: .05
                }
            }, {
                t: this.ikNode_2_1,
                p: {
                    scaleX: .9999,
                    scaleY: .9999,
                    rotation: 8.4239,
                    x: -.95,
                    y: 6.55
                }
            }, {
                t: this.ikNode_3_1,
                p: {
                    regX: .6,
                    rotation: 8.4244,
                    x: .05,
                    y: 14.15
                }
            }]
        }, 1).wait(1)),
        this.instance = new o.thorax,
        this.instance.parent = this,
        this.instance.setTransform(3.75, -7.2),
        this.timeline.addTween(t.Tween.get(this.instance).wait(9))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-9.5,-16.1,26.9,32.900000000000006),
    (o.head_assembly = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.instance = new o.antennae,
        this.instance.parent = this,
        this.instance.setTransform(1.8, 1.9, 1, 1, 0, 0, 180, .6, 3.7),
        this.timeline.addTween(t.Tween.get(this.instance).to({
            regY: 3.6,
            skewX: 14.9983,
            skewY: 194.9983,
            y: 1.85
        }, 7).to({
            skewX: -4.7379,
            skewY: 175.2621,
            x: 1.75,
            y: 1.9
        }, 7).to({
            regY: 3.7,
            skewX: 0,
            skewY: 180,
            x: 1.8
        }, 3).wait(1)),
        this.instance_1 = new o.antennae,
        this.instance_1.parent = this,
        this.instance_1.setTransform(-.85, 1.9, 1, 1, 0, 0, 0, .6, 3.7),
        this.timeline.addTween(t.Tween.get(this.instance_1).to({
            regY: 3.6,
            rotation: -7.9375,
            y: 1.85
        }, 4).to({
            rotation: -4.4878
        }, 7).to({
            regY: 3.7,
            rotation: 0,
            y: 1.9
        }, 6).wait(1)),
        this.instance_2 = new o.head,
        this.instance_2.parent = this,
        this.instance_2.setTransform(.5, 5.9, 1, 1, 0, 0, 0, -.5, 6.8),
        this.timeline.addTween(t.Tween.get(this.instance_2).to({
            regX: -.4,
            scaleX: .9373,
            skewY: -4.1713,
            x: .6,
            y: 5.75
        }, 9).to({
            regX: -.5,
            scaleX: 1,
            skewY: 0,
            x: .5,
            y: 5.9
        }, 8).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-3.8,-5.8,9.5,11.8),
    (o.termite_winged = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.wing_T_L = new o.wing_T,
        this.wing_T_L.name = "wing_T_L",
        this.wing_T_L.parent = this,
        this.wing_T_L.setTransform(-11.85, -29, 2.394, 2.394, 0, 0, 0, 25.2, 7.8),
        this.timeline.addTween(t.Tween.get(this.wing_T_L).wait(18)),
        this.wing_T_R = new o.wing_T,
        this.wing_T_R.name = "wing_T_R",
        this.wing_T_R.parent = this,
        this.wing_T_R.setTransform(-.15, -29, 2.394, 2.394, 0, 0, 180, 25.2, 7.8),
        this.timeline.addTween(t.Tween.get(this.wing_T_R).wait(18)),
        this.wing_B_R = new o.wing_B,
        this.wing_B_R.name = "wing_B_R",
        this.wing_B_R.parent = this,
        this.wing_B_R.setTransform(0, -20.75, 2.394, 2.394, 0, 0, 180, 23.8, -3.5),
        this.timeline.addTween(t.Tween.get(this.wing_B_R).wait(18)),
        this.wing_B_L = new o.wing_B,
        this.wing_B_L.name = "wing_B_L",
        this.wing_B_L.parent = this,
        this.wing_B_L.setTransform(-11.95, -20.75, 2.394, 2.394, 0, 0, 0, 23.8, -3.5),
        this.timeline.addTween(t.Tween.get(this.wing_B_L).wait(18)),
        this.instance = new o.head_assembly("synched",10),
        this.instance.parent = this,
        this.instance.setTransform(-6.7, -35.05, 2.394, 2.394, 0, 0, 0, .5, 5.2),
        this.timeline.addTween(t.Tween.get(this.instance).to({
            regX: .6,
            rotation: -3.732,
            x: -6.5,
            y: -35.1
        }, 6).to({
            regX: .7,
            regY: 5.3,
            scaleX: 2.3938,
            scaleY: 2.3938,
            rotation: 1.9317,
            x: -6.2,
            y: -35
        }, 6).to({
            regX: .5,
            regY: 5.2,
            scaleX: 2.394,
            scaleY: 2.394,
            rotation: 0,
            x: -6.7,
            y: -35.05
        }, 5).wait(1)),
        this.thorax = new o.thorax_assembly,
        this.thorax.name = "thorax",
        this.thorax.parent = this,
        this.thorax.setTransform(-15.7, -9.35, 2.394, 2.394),
        this.timeline.addTween(t.Tween.get(this.thorax).wait(18)),
        this.instance_1 = new o.abdomen("synched",0),
        this.instance_1.parent = this,
        this.instance_1.setTransform(-6.95, -19.5, 2.394, 2.394, 0, 0, 0, -.1, -8.4),
        this.timeline.addTween(t.Tween.get(this.instance_1).to({
            regX: 0,
            regY: -8.3,
            scaleY: 2.2766,
            skewX: -2.0154,
            x: -6.75,
            y: -19.4
        }, 3, t.Ease.quadInOut).to({
            regX: .1,
            regY: -8.4,
            scaleY: 2.5139,
            skewX: 1.5172,
            x: -6.5,
            y: -19.55
        }, 3, t.Ease.quadInOut).to({
            regX: -.1,
            scaleY: 2.396,
            skewX: 2.2754,
            x: -6.85,
            y: -19.5
        }, 3, t.Ease.quadInOut).to({
            regX: .1,
            regY: -8.3,
            scaleY: 2.2752,
            skewX: .4112,
            x: -6.4,
            y: -19.4
        }, 2, t.Ease.quadInOut).to({
            regY: -8.4,
            scaleY: 2.5139,
            skewX: 1.5172,
            x: -6.5,
            y: -19.55
        }, 3, t.Ease.quadInOut).to({
            regX: -.1,
            scaleY: 2.394,
            skewX: 0,
            x: -6.95,
            y: -19.5
        }, 3, t.Ease.quadInOut).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-114.1,-86.2,216.2,182),
    (o.smallRoachFall3 = function(e, i, s) {
        this.initialize(e, i, s, {
            fall: 50
        }),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_33 = function() {
            var t = this;
            t.termite_2.wing_T_L.gotoAndPlay("fold"),
            t.termite_2.wing_T_R.gotoAndPlay("fold"),
            t.termite_2.wing_B_L.gotoAndPlay("fold"),
            t.termite_2.wing_B_R.gotoAndPlay("fold"),
            t.termite_2.thorax.stop()
        }
        ,
        this.frame_41 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_49 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_51 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_84 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(33).call(this.frame_33).wait(8).call(this.frame_41).wait(8).call(this.frame_49).wait(2).call(this.frame_51).wait(33).call(this.frame_84).wait(1)),
        this.termite_2 = new o.termite_winged,
        this.termite_2.name = "termite_2",
        this.termite_2.parent = this,
        this.termite_2.setTransform(20, 292.65, .1871, .1871, 16.8022, 0, 0, -4.7, -27.6),
        this.termite_2._off = !0,
        this.timeline.addTween(t.Tween.get(this.termite_2).wait(6).to({
            _off: !1
        }, 0).to({
            regX: -5.3,
            regY: -27.9,
            scaleX: .1872,
            scaleY: .1872,
            rotation: 31.7994,
            x: 109.65,
            y: -17.05
        }, 35, t.Ease.quadInOut).wait(9).to({
            regX: -5.2,
            regY: -28.3,
            scaleX: .1871,
            scaleY: .1871,
            rotation: 16.7977,
            x: 140.05,
            y: -183.9
        }, 34, t.Ease.cubicIn).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(75.1, -253.3, .1872, .1872, 151.797, 0, 0, -5.7, -27.9),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            x: 165.25,
            y: 14.05
        }, 33, t.Ease.quadInOut).wait(17).to({
            regX: -5.4,
            regY: -28.2,
            scaleX: .1871,
            scaleY: .1871,
            rotation: 136.7973,
            x: 387.35,
            y: 161.95
        }, 34, t.Ease.cubicIn).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(.4,-264,409.20000000000005,567.6),
    (o.smallRoachFall = function(e, i, s) {
        this.initialize(e, i, s, {
            fall: 59
        }),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_42 = function() {
            var t = this;
            t.termite_2.wing_T_L.gotoAndPlay("fold"),
            t.termite_2.wing_T_R.gotoAndPlay("fold"),
            t.termite_2.wing_B_L.gotoAndPlay("fold"),
            t.termite_2.wing_B_R.gotoAndPlay("fold"),
            t.termite_2.thorax.stop()
        }
        ,
        this.frame_50 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_58 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_60 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_89 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(8).call(this.frame_50).wait(8).call(this.frame_58).wait(2).call(this.frame_60).wait(29).call(this.frame_89).wait(1)),
        this.termite_2 = new o.termite_winged,
        this.termite_2.name = "termite_2",
        this.termite_2.parent = this,
        this.termite_2.setTransform(-199.95, 398.1, .1872, .1872, 31.7994, 0, 0, -5, -27.8),
        this.termite_2._off = !0,
        this.timeline.addTween(t.Tween.get(this.termite_2).wait(6).to({
            _off: !1
        }, 0).to({
            regX: -5.3,
            regY: -27.9,
            x: 117.15,
            y: 6.45
        }, 44, t.Ease.quadInOut).wait(9).to({
            regX: -5.2,
            regY: -28.3,
            scaleX: .1871,
            scaleY: .1871,
            rotation: 16.7977,
            x: 180.1,
            y: -222.4
        }, 30, t.Ease.cubicIn).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(-48.35, -222.85, .1872, .1872, 151.797, 0, 0, -5.7, -27.9),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            x: 119.25,
            y: 49.6
        }, 42, t.Ease.quadInOut).wait(17).to({
            regX: -5.4,
            regY: -28.2,
            scaleX: .1871,
            scaleY: .1871,
            rotation: 136.7973,
            x: 257.2,
            y: 164.35
        }, 30, t.Ease.cubicIn).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-217.3,-238.6,496.8,647.7),
    (o.SmallRoach_Scuttle2 = function(e, i, s) {
        this.initialize(e, i, s, {
            roachOut: 68
        }),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_31 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_66 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_69 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_86 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(35).call(this.frame_66).wait(3).call(this.frame_69).wait(17).call(this.frame_86).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(13.65, -145.35, .1872, .1872, 151.797, 0, 0, -5.7, -27.9),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            x: 119.25,
            y: 49.6
        }, 32, t.Ease.quadInOut).to({
            guide: {
                path: [119.2, 49.6, 123.9, 54.5, 127.2, 56.2, 129.8, 57.4, 132.5, 57.5, 135.4, 57.5, 137.6, 56.1, 140.1, 54.3, 142, 50.2, 144.7, 44, 144.2, 39.1, 143.9, 36.1, 142.6, 33.7, 141.2, 31, 139, 29.5, 136.5, 27.8, 132.6, 27.4, 130.3, 27.2, 125.7, 27.4, 122.5, 27.6, 119.2, 27.8, 116.1, 27.9, 114.4, 28.3, 111.8, 28.9, 110.2, 30.2, 107.6, 32.5, 108, 36.4, 108.3, 39.9, 110.8, 41.7],
                orient: "auto"
            }
        }, 34).wait(2).to({
            x: 244.35,
            y: 216.95
        }, 14, t.Ease.quadIn).to({
            _off: !0
        }, 1).wait(4))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-4.2,-156,271.59999999999997,392.1),
    (o.SmallRoach_Scuttle_noLand = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_104 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(104).call(this.frame_104).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(172.6, 83.35, .1871, .1871, 83.7506, 0, 0, -4.8, -27.4),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            regX: -5.4,
            regY: -28.4,
            rotation: 151.7967,
            guide: {
                path: [172.6, 83.5, 192.7, 85.1, 212.9, 77.1, 239.1, 66.7, 253.9, 44.7, 268.7, 22.5, 268.4, -5.5, 268.2, -33.6, 252.9, -55.4, 237.6, -77.2, 211.3, -87.1, 184.9, -96.9, 159, -90.5, 143.1, -86.6, 130.5, -76.9, 117.1, -66.7, 110.7, -52.7, 103.6, -37, 105.2, -15.9, 106.3, -.6, 112.6, 21.8, 129.3, 81.1, 159.4, 152.3, 175.7, 190.8, 210.9, 265.6],
                orient: "auto"
            }
        }, 104, t.Ease.none).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(85.3,-112.3,202,397),
    (o.SmallRoach_Scuttle = function(e, i, s) {
        this.initialize(e, i, s, {
            roachOut: 68
        }),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_31 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_66 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_69 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_99 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(35).call(this.frame_66).wait(3).call(this.frame_69).wait(30).call(this.frame_99).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(242.95, -112.85, .1872, .1872, -73.205, 0, 0, -5.3, -27.7),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            regX: -5.7,
            regY: -27.9,
            rotation: -208.203,
            guide: {
                path: [243, -112.8, 228.9, -121, 206.5, -127.5, 105.7, -156.4, 119.3, 49.6],
                orient: "auto"
            }
        }, 34, t.Ease.quadInOut).wait(33).to({
            regX: -5.4,
            regY: -28.2,
            scaleX: .1871,
            scaleY: .1871,
            rotation: -223.2027,
            x: 315.7,
            y: 212.35
        }, 32, t.Ease.cubicIn).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(101.4,-148.8,236.6,382.8),
    (o.bigRoachEF2 = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_35 = function() {
            var t = this;
            t.termite_2.wing_T_L.gotoAndPlay("fold"),
            t.termite_2.wing_T_R.gotoAndPlay("fold"),
            t.termite_2.wing_B_L.gotoAndPlay("fold"),
            t.termite_2.wing_B_R.gotoAndPlay("fold"),
            t.termite_2.thorax.stop()
        }
        ,
        this.frame_43 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_51 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_53 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_86 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(8).call(this.frame_43).wait(8).call(this.frame_51).wait(2).call(this.frame_53).wait(33).call(this.frame_86).wait(1)),
        this.termite_2 = new o.termite_winged,
        this.termite_2.name = "termite_2",
        this.termite_2.parent = this,
        this.termite_2.setTransform(-538.35, -553.75, .3715, .3715, 121.7981, 0, 0, -5, -27.7),
        this.termite_2._off = !0,
        this.timeline.addTween(t.Tween.get(this.termite_2).wait(6).to({
            _off: !1
        }, 0).to({
            regX: -5.3,
            regY: -27.9,
            x: 318.2,
            y: -168.45
        }, 37, t.Ease.quadInOut).wait(9).to({
            regX: -5.2,
            regY: -28.4,
            scaleX: .3714,
            scaleY: .3714,
            rotation: 106.7964,
            x: 775.7,
            y: -50.4
        }, 34, t.Ease.cubicIn).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(-169.55, -1317.8, .3715, .3715, 157.7817, 0, 0, -5.5, -27.9),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            regX: -5.8,
            regY: -27.8,
            x: 86.05,
            y: -260.45
        }, 35, t.Ease.quadInOut).wait(17).to({
            regX: -5.5,
            regY: -28.2,
            scaleX: .3714,
            scaleY: .3714,
            rotation: 142.7817,
            x: 304.95,
            y: 54.55
        }, 34).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-560.1,-1339.7,1368,1435.6000000000001),
    (o.bigRoachEF = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_35 = function() {
            var t = this;
            t.termite_2.wing_T_L.gotoAndPlay("fold"),
            t.termite_2.wing_T_R.gotoAndPlay("fold"),
            t.termite_2.wing_B_L.gotoAndPlay("fold"),
            t.termite_2.wing_B_R.gotoAndPlay("fold"),
            t.termite_2.thorax.stop()
        }
        ,
        this.frame_43 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_51 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.frame_53 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play(),
            t.termite_2.wing_T_L.gotoAndPlay("unfold"),
            t.termite_2.wing_T_R.gotoAndPlay("unfold"),
            t.termite_2.wing_B_L.gotoAndPlay("unfold"),
            t.termite_2.wing_B_R.gotoAndPlay("unfold"),
            t.termite_2.thorax.play()
        }
        ,
        this.frame_94 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(8).call(this.frame_43).wait(8).call(this.frame_51).wait(2).call(this.frame_53).wait(41).call(this.frame_94).wait(1)),
        this.termite_2 = new o.termite_winged,
        this.termite_2.name = "termite_2",
        this.termite_2.parent = this,
        this.termite_2.setTransform(-341.7, -398.65, .3715, .3715, 121.7981, 0, 0, -5, -27.7),
        this.termite_2._off = !0,
        this.timeline.addTween(t.Tween.get(this.termite_2).wait(6).to({
            _off: !1
        }, 0).to({
            regX: -5.3,
            regY: -27.9,
            x: 147.35,
            y: -129.3
        }, 37, t.Ease.quadInOut).wait(9).to({
            regX: -5.2,
            regY: -28.4,
            scaleX: .3714,
            scaleY: .3714,
            rotation: 106.7964,
            x: 975.2,
            y: 64.45
        }, 42, t.Ease.cubicIn).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(-298.4, -477.85, .3715, .3715, 126.5517, 0, 0, -5.4, -27.6),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            regX: -5.9,
            regY: -27.7,
            rotation: 141.5512,
            x: 61.85,
            y: -249.7
        }, 35, t.Ease.quadInOut).to({
            regX: -5.7,
            rotation: 141.5464,
            x: 62.9,
            y: -250.8
        }, 17).to({
            regY: -28.2,
            scaleX: .3714,
            scaleY: .3714,
            rotation: 150.7643,
            x: 290.8,
            y: 286.05
        }, 42).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-363.4,-510.4,1370.8,834.8),
    (o.bigRoach = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.frame_0 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_31 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("fold"),
            t.termite_1.wing_T_R.gotoAndPlay("fold"),
            t.termite_1.wing_B_L.gotoAndPlay("fold"),
            t.termite_1.wing_B_R.gotoAndPlay("fold"),
            t.termite_1.thorax.stop()
        }
        ,
        this.frame_76 = function() {
            var t = this;
            t.termite_1.wing_T_L.gotoAndPlay("unfold"),
            t.termite_1.wing_T_R.gotoAndPlay("unfold"),
            t.termite_1.wing_B_L.gotoAndPlay("unfold"),
            t.termite_1.wing_B_R.gotoAndPlay("unfold"),
            t.termite_1.thorax.play()
        }
        ,
        this.frame_92 = function() {
            var t = this;
            t.stop()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(45).call(this.frame_76).wait(16).call(this.frame_92).wait(1)),
        this.termite_1 = new o.termite_winged,
        this.termite_1.name = "termite_1",
        this.termite_1.parent = this,
        this.termite_1.setTransform(13.65, -145.35, .1872, .1872, 151.797, 0, 0, -5.7, -27.9),
        this.timeline.addTween(t.Tween.get(this.termite_1).to({
            x: 119.25,
            y: 49.6
        }, 34, t.Ease.quadInOut).to({
            guide: {
                path: [119.2, 49.6, 123.9, 54.5, 127.2, 56.2, 129.8, 57.4, 132.5, 57.5, 135.4, 57.5, 137.6, 56.1, 140.1, 54.3, 142, 50.2, 144.7, 44, 144.2, 39.1, 143.9, 36.1, 142.6, 33.7, 141.2, 31, 139, 29.5, 136.5, 27.8, 132.6, 27.4, 130.3, 27.2, 125.7, 27.4, 122.5, 27.6, 119.2, 27.8, 116.1, 27.9, 114.4, 28.3, 111.8, 28.9, 110.2, 30.2, 107.6, 32.5, 108, 36.4, 108.3, 39.9, 110.8, 41.7],
                orient: "auto"
            }
        }, 42).to({
            x: 244.35,
            y: 216.95
        }, 16, t.Ease.quadIn).wait(1))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-4.2,-156,271.59999999999997,392.1),
    (o.bugs = function(e, i, s) {
        this.initialize(e, i, s, {}),
        this.frame_0 = function() {
            this.stop();
            var t = this
              , e = this;
            void 0 === this.stage.presetAnimation && (this.stage.presetAnimation = function() {
                t.visible = !1,
                t.visible = !0
            }
            ),
            this.playBugs = function() {
                t.play(1)
            }
            ,
            void 0 === this.stage.runAnimation && (this.stage.runAnimation = function() {
                t.playBugs()
            }
            ),
            void 0 === this.stage.animation_rollover_1 && (this.stage.animation_rollover_1 = function() {
                e.smlRoach1a.gotoAndPlay("fall"),
                e.smlRoach1b.gotoAndPlay("fall"),
                e.bigRoach1c.play(),
                e.bigRoach1d.play()
            }
            ),
            void 0 === this.stage.animation_rollover_2 && (this.stage.animation_rollover_2 = function() {
                e.smlRoach2a.gotoAndPlay("fall"),
                e.smlRoach2b.gotoAndPlay("fall"),
                e.bigRoach2c.play(),
                e.bigRoach2d.play()
            }
            );
            void 0 === this.stage.gotoTime
        }
        ,
        this.frame_75 = function() {
            var t = this;
            t.smallRoach1.gotoAndPlay("roachOut"),
            t.smallRoach2.gotoAndPlay("roachOut"),
            t.smallRoach3.gotoAndPlay("roachOut"),
            t.smallRoach4.gotoAndPlay("roachOut"),
            t.smallRoach5.gotoAndPlay("roachOut"),
            t.smallRoach6.gotoAndPlay("roachOut")
        }
        ,
        this.frame_169 = function() {
            this.stop();
            for (var t = 0; t < this.numChildren; t++)
                for (var e = this.getChildAt(t), i = 0; i < e.numChildren; i++) {
                    var s = e.getChildAt(i);
                    s.stop()
                }
            window && window.ola && window.ola.enable_rollover && window.ola.enable_rollover()
        }
        ,
        this.timeline.addTween(t.Tween.get(this).call(this.frame_0).wait(75).call(this.frame_75).wait(94).call(this.frame_169).wait(1)),
        this.smallRoach7 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7.name = "smallRoach7",
        this.smallRoach7.parent = this,
        this.smallRoach7.setTransform(178.05, 813.2, 1.68, 1.6894, -66.1493, 0, 0, -172.8, 65.9),
        this.smallRoach7._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7).wait(23).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 99).wait(48)),
        this.smallRoach7_1 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_1.name = "smallRoach7_1",
        this.smallRoach7_1.parent = this,
        this.smallRoach7_1.setTransform(-134.15, -142.35, 1.1965, 1.1965, 52.7621, 0, 0, -172.8, 65.8),
        this.smallRoach7_1._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_1).wait(30).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 92).wait(48)),
        this.smallRoach7_2 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_2.name = "smallRoach7_2",
        this.smallRoach7_2.parent = this,
        this.smallRoach7_2.setTransform(355.4, -284.45, 1.1966, 1.1966, 122.7046, 0, 0, -172.8, 65.8),
        this.smallRoach7_2._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_2).wait(25).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 97).wait(48)),
        this.smallRoach7_3 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_3.name = "smallRoach7_3",
        this.smallRoach7_3.parent = this,
        this.smallRoach7_3.setTransform(879.7, -25.6, 1.6799, 1.6894, 173.8504, 0, 0, -172.8, 65.9),
        this.smallRoach7_3._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_3).wait(6).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 116).wait(48)),
        this.smallRoach7_4 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_4.name = "smallRoach7_4",
        this.smallRoach7_4.parent = this,
        this.smallRoach7_4.setTransform(598.8, 426.75, 1.1966, 1.1966, -124.1294, 0, 0, -172.8, 65.8),
        this.smallRoach7_4._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_4).wait(10).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 112).wait(48)),
        this.smallRoach7_5 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_5.name = "smallRoach7_5",
        this.smallRoach7_5.parent = this,
        this.smallRoach7_5.setTransform(507.55, -190.4, 1.1967, 1.1967, 138.6766, 0, 0, -172.7, 65.7),
        this.smallRoach7_5._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_5).wait(20).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 102).wait(48)),
        this.smallRoach7_6 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_6.name = "smallRoach7_6",
        this.smallRoach7_6.parent = this,
        this.smallRoach7_6.setTransform(569.05, 485.85, 1.1967, 1.1967, -122.3656, 0, 0, -172.7, 65.8),
        this.smallRoach7_6._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_6).wait(8).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 114).wait(48)),
        this.smallRoach7_7 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_7.name = "smallRoach7_7",
        this.smallRoach7_7.parent = this,
        this.smallRoach7_7.setTransform(-168.2, 711.45, 1.68, 1.6894, -36.1496, 0, 0, -172.8, 65.9),
        this.smallRoach7_7._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_7).wait(3).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 119).wait(48)),
        this.smallRoach7_8 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_8.name = "smallRoach7_8",
        this.smallRoach7_8.parent = this,
        this.smallRoach7_8.setTransform(-400.15, 70.3, 1.1967, 1.1967, 23.8496, 0, 0, -172.7, 65.9),
        this.smallRoach7_8._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_8).wait(14).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 108).wait(48)),
        this.smallRoach7_9 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_9.name = "smallRoach7_9",
        this.smallRoach7_9.parent = this,
        this.smallRoach7_9.setTransform(74, 675.75, 1.1967, 1.1967, -52.5953, 0, 0, -172.7, 65.8),
        this.smallRoach7_9._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_9).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 111).wait(48)),
        this.smallRoach7_10 = new o.SmallRoach_Scuttle_noLand,
        this.smallRoach7_10.name = "smallRoach7_10",
        this.smallRoach7_10.parent = this,
        this.smallRoach7_10.setTransform(-411.4, 419.3, 1.1967, 1.1967, -17.365, 0, 0, -172.7, 65.8),
        this.smallRoach7_10._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach7_10).wait(19).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 103).wait(48)),
        this.smallRoach1 = new o.SmallRoach_Scuttle,
        this.smallRoach1.name = "smallRoach1",
        this.smallRoach1.parent = this,
        this.smallRoach1.setTransform(-129.95, 436.8, 1.1967, 1.1967, -37.5955, 0, 0, -172.7, 65.8),
        this.smallRoach1._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach1).wait(16).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 153).wait(1)),
        this.smallRoach2 = new o.SmallRoach_Scuttle,
        this.smallRoach2.name = "smallRoach2",
        this.smallRoach2.parent = this,
        this.smallRoach2.setTransform(-11.3, 489.7, 1.1968, 1.1968, -59.9503, 0, 0, -172.7, 65.8),
        this.smallRoach2._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach2).wait(21).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 148).wait(1)),
        this.smallRoach3 = new o.SmallRoach_Scuttle2,
        this.smallRoach3.name = "smallRoach3",
        this.smallRoach3.parent = this,
        this.smallRoach3.setTransform(-35.35, -255.2, 1.488, 1.488, 0, -110.7985, 69.2015, -172.7, 65.8),
        this.smallRoach3._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach3).wait(11).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 158).wait(1)),
        this.smallRoach4 = new o.SmallRoach_Scuttle,
        this.smallRoach4.name = "smallRoach4",
        this.smallRoach4.parent = this,
        this.smallRoach4.setTransform(213.45, 555.2, 1.1969, 1.1969, -102.8003, 0, 0, -172.8, 65.8),
        this.smallRoach4._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach4).wait(9).to({
            _off: !1
        }, 0).wait(161)),
        this.smallRoach5 = new o.SmallRoach_Scuttle2,
        this.smallRoach5.name = "smallRoach5",
        this.smallRoach5.parent = this,
        this.smallRoach5.setTransform(-121.45, 413.85, 1.1968, 1.1968, -47.6001, 0, 0, -172.7, 66),
        this.smallRoach5._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach5).wait(7).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 162).wait(1)),
        this.smallRoach6 = new o.SmallRoach_Scuttle,
        this.smallRoach6.name = "smallRoach6",
        this.smallRoach6.parent = this,
        this.smallRoach6.setTransform(24.55, 653.9, 1.3367, 1.3367, -76.7138, 0, 0, -172.8, 65.8),
        this.smallRoach6._off = !0,
        this.timeline.addTween(t.Tween.get(this.smallRoach6).wait(2).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 167).wait(1)),
        this.smlRoach2a = new o.smallRoachFall3,
        this.smlRoach2a.name = "smlRoach2a",
        this.smlRoach2a.parent = this,
        this.smlRoach2a.setTransform(171.55, 485.95, 1, 1, 48.2146, 0, 0, 151.7, 145.5),
        this.smlRoach2a._off = !0,
        this.timeline.addTween(t.Tween.get(this.smlRoach2a).wait(107).to({
            _off: !1
        }, 0).wait(63)),
        this.smlRoach2b = new o.smallRoachFall3,
        this.smlRoach2b.name = "smlRoach2b",
        this.smlRoach2b.parent = this,
        this.smlRoach2b.setTransform(153.6, 199.5, 1, 1, 37.4945, 0, 0, 151.7, 145.5),
        this.smlRoach2b._off = !0,
        this.timeline.addTween(t.Tween.get(this.smlRoach2b).wait(110).to({
            _off: !1
        }, 0).wait(60)),
        this.smlRoach1a = new o.smallRoachFall,
        this.smlRoach1a.name = "smlRoach1a",
        this.smlRoach1a.parent = this,
        this.smlRoach1a.setTransform(291.7, 262.25, 1, 1, 0, 0, 0, 151.7, 145.5),
        this.smlRoach1a._off = !0,
        this.timeline.addTween(t.Tween.get(this.smlRoach1a).wait(106).to({
            _off: !1
        }, 0).wait(64)),
        this.smlRoach1b = new o.smallRoachFall,
        this.smlRoach1b.name = "smlRoach1b",
        this.smlRoach1b.parent = this,
        this.smlRoach1b.setTransform(323, 216.25, 1, 1, 0, 0, 0, 151.7, 145.5),
        this.smlRoach1b._off = !0,
        this.timeline.addTween(t.Tween.get(this.smlRoach1b).wait(103).to({
            _off: !1
        }, 0).wait(67)),
        this.bigRoach1c = new o.bigRoachEF,
        this.bigRoach1c.name = "bigRoach1c",
        this.bigRoach1c.parent = this,
        this.bigRoach1c.setTransform(304.9, 196.35, .4992, .4992, -136.797, 0, 0, 121.2, -73.8),
        this.bigRoach1c._off = !0,
        this.timeline.addTween(t.Tween.get(this.bigRoach1c).wait(109).to({
            _off: !1
        }, 0).wait(61)),
        this.bigRoach1d = new o.bigRoachEF,
        this.bigRoach1d.name = "bigRoach1d",
        this.bigRoach1d.parent = this,
        this.bigRoach1d.setTransform(243.45, 19.6, .4993, .4993, -158.0132, 0, 0, 121.4, -73.7),
        this.bigRoach1d._off = !0,
        this.timeline.addTween(t.Tween.get(this.bigRoach1d).wait(114).to({
            _off: !1
        }, 0).wait(56)),
        this.bigRoach2c = new o.bigRoachEF2,
        this.bigRoach2c.name = "bigRoach2c",
        this.bigRoach2c.parent = this,
        this.bigRoach2c.setTransform(349.5, 95.5, .4992, .4992, -127.3259, 0, 0, 121.2, -73.5),
        this.bigRoach2c._off = !0,
        this.timeline.addTween(t.Tween.get(this.bigRoach2c).wait(116).to({
            _off: !1
        }, 0).wait(54)),
        this.bigRoach2d = new o.bigRoachEF2,
        this.bigRoach2d.name = "bigRoach2d",
        this.bigRoach2d.parent = this,
        this.bigRoach2d.setTransform(341.2, 263.5, .4993, .4993, -114.5638, 0, 0, 121.4, -73.5),
        this.bigRoach2d._off = !0,
        this.timeline.addTween(t.Tween.get(this.bigRoach2d).wait(110).to({
            _off: !1
        }, 0).wait(60)),
        this.instance = new o.bigRoach,
        this.instance.parent = this,
        this.instance.setTransform(-68.85, 376.8, 1, 1, -33.7313, 0, 0, -198.9, 131.2),
        this.instance._off = !0,
        this.timeline.addTween(t.Tween.get(this.instance).wait(1).to({
            _off: !1
        }, 0).to({
            _off: !0
        }, 95).wait(74))
    }
    ).prototype = a = new t.MovieClip,
    a.nominalBounds = new t.Rectangle(-97.1,125.5,574.5,542.1),
    o.properties = {
        id: "D2D05D4C9FA14AC0889C2D321C5965B1",
        width: 300,
        height: 600,
        fps: 24,
        color: "#FFFFFF",
        opacity: 0,
        manifest: [],
        preloads: []
    },
    (o.Stage = function(t) {
        createjs.Stage.call(this, t)
    }
    ).prototype = a = new createjs.Stage,
    a.setAutoPlay = function(t) {
        this.tickEnabled = t
    }
    ,
    a.play = function() {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
    }
    ,
    a.stop = function(t) {
        t && this.seek(t),
        this.tickEnabled = !1
    }
    ,
    a.seek = function(t) {
        this.tickEnabled = !0,
        this.getChildAt(0).gotoAndStop(o.properties.fps * t / 1e3)
    }
    ,
    a.getDuration = function() {
        return this.getChildAt(0).totalFrames / o.properties.fps * 1e3
    }
    ,
    a.getTimelinePosition = function() {
        return this.getChildAt(0).currentFrame / o.properties.fps * 1e3
    }
    ,
    e.bootcompsLoaded = e.bootcompsLoaded || [],
    e.bootstrapListeners || (e.bootstrapListeners = []),
    e.bootstrapCallback = function(t) {
        if (e.bootstrapListeners.push(t),
        e.bootcompsLoaded.length > 0)
            for (var i = 0; i < e.bootcompsLoaded.length; ++i)
                t(e.bootcompsLoaded[i])
    }
    ,
    e.compositions = e.compositions || {},
    e.compositions.D2D05D4C9FA14AC0889C2D321C5965B1 = {
        getStage: function() {
            return exportRoot.getStage()
        },
        getLibrary: function() {
            return o
        },
        getSpriteSheet: function() {
            return n
        },
        getImages: function() {
            return h
        }
    },
    e.compositionLoaded = function(t) {
        e.bootcompsLoaded.push(t);
        for (var i = 0; i < e.bootstrapListeners.length; i++)
            e.bootstrapListeners[i](t)
    }
    ,
    e.getComposition = function(t) {
        return e.compositions[t]
    }
    ,
    e.makeResponsive = function(t, e, i, s, a) {
        function n() {
            var n = o.properties.width
              , A = o.properties.height
              , l = window.innerWidth
              , r = window.innerHeight
              , d = window.devicePixelRatio || 1
              , w = l / n
              , m = r / A
              , c = 1;
            t && ("width" == e && h == l || "height" == e && g == r ? c = _ : i ? 1 == s ? c = Math.min(w, m) : 2 == s && (c = Math.max(w, m)) : (n > l || A > r) && (c = Math.min(w, m))),
            a[0].width = n * d * c,
            a[0].height = A * d * c,
            a.forEach(function(t) {
                t.style.width = n * c + "px",
                t.style.height = A * c + "px"
            }),
            stage.scaleX = d * c,
            stage.scaleY = d * c,
            h = l,
            g = r,
            _ = c,
            stage.tickOnUpdate = !1,
            stage.update(),
            stage.tickOnUpdate = !0
        }
        var h, g, _ = 1;
        window.addEventListener("resize", n),
        n()
    }
}(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;
