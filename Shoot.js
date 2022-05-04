AFRAME.registerComponent("bullets",{

init:function(){
     this.showBullet()
},

showBullet:function(){
    window.addEventListener("keydown", (e)=>{
        if(e.key === "z"){
            var bullet = document.createElement("a-entity")
            bullet.setAttribute("geometry", {primitive : "sphere", radius : 0.1})
            bullet.setAttribute("material", {color : "black"})
            var cam = document.querySelector("#camera")
               pos = cam.getAttribute("position")
            bullet.setAttribute("position", {x : pos.x, y : pos.y, z : pos.z})
            // to access the camera entity as three.js object we use .object3D
            var camera = document.querySelector("#camera").object3D
            //get the camera direction as Three.js Vector
            var direction = new THREE.Vector3()
             //get the direction of camera element we use .getWorldDirection
            camera.getWorldDirection(direction)
            // multiplyScalar is used to increase the speed of bullet
            bullet.setAttribute("velocity", direction.multiplyScalar(-10))
            
            var scene = document.querySelector("#scene")
            scene.appendChild(bullet)
        }
    })
}
})