export default {
    data: {
        
    },
    inputs: {
        width: 100,
        height: 100,
        text: "Click Here!"
    },
    outputs: {
        numClicks: 0,
        lastMouseDownTime: new Date(0).getTime(),
        lastMouseUpTime: new Date(0).getTime(),
        lastHoverLocation: {x: 0, y: 0},
    },
    methods: {
        onClick: function() {
            this.outputs.numClicks += 1;
        },
        onMouseDown: function() {
            this.outputs.lastMouseDownTime = new Date().getTime();
        },
        onMouseUp: function() {
            this.outputs.lastMouseUpTime = new Date().getTime();
        },
        onMouseMove: function(e) {
            this.outputs.lastHoverLocation = {
                x: e.clientX,
                y: e.clientY,
            }
        }
    }
}
