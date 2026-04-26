import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.176.0/build/three.module.js";

const menu = document.querySelector("#menu");
const instructionsScreen = document.querySelector("#instructionsScreen");
const sceneScreen = document.querySelector("#sceneScreen");
const startButton = document.querySelector("#startButton");
const sceneButton = document.querySelector("#sceneButton");
const readyButton = document.querySelector("#readyButton");
const backToMenuButton = document.querySelector("#backToMenuButton");
const backButton = document.querySelector("#backButton");
const canvas = document.querySelector("#scene");

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearAlpha(0);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  220,
);
camera.position.set(0, 2.4, 34);
camera.lookAt(0, 10, -8);

scene.background = new THREE.Color(0x0c0906);
scene.fog = new THREE.Fog(0x0c0906, 50, 150);

const stoneMaterial = new THREE.MeshStandardMaterial({
  color: 0x8a7b68,
  roughness: 0.94,
  metalness: 0.05,
});
const darkStoneMaterial = new THREE.MeshStandardMaterial({
  color: 0x5a5148,
  roughness: 0.95,
  metalness: 0.04,
});
const woodMaterial = new THREE.MeshStandardMaterial({
  color: 0x5c3c24,
  roughness: 0.88,
  metalness: 0.05,
});
const bannerMaterial = new THREE.MeshStandardMaterial({
  color: 0x7a1714,
  roughness: 0.8,
  metalness: 0.02,
  side: THREE.DoubleSide,
});
const marbleMaterial = new THREE.MeshStandardMaterial({
  color: 0xb7ab97,
  roughness: 0.72,
  metalness: 0.08,
});
const brassMaterial = new THREE.MeshStandardMaterial({
  color: 0xb2853d,
  roughness: 0.42,
  metalness: 0.72,
});
const candleMaterial = new THREE.MeshStandardMaterial({
  color: 0xffcc7a,
  emissive: 0xff8a2a,
  emissiveIntensity: 1.2,
});

const church = new THREE.Group();
scene.add(church);

const naveFloor = new THREE.Mesh(
  new THREE.CylinderGeometry(34, 34, 0.5, 56),
  darkStoneMaterial,
);
naveFloor.position.set(0, -0.25, -12);
church.add(naveFloor);

const centralCarpet = new THREE.Mesh(
  new THREE.BoxGeometry(8, 0.05, 72),
  bannerMaterial,
);
centralCarpet.position.set(0, 0.03, -10);
church.add(centralCarpet);

const outerDrum = new THREE.Mesh(
  new THREE.CylinderGeometry(34, 34, 22, 40, 1, true),
  stoneMaterial,
);
outerDrum.position.set(0, 11, -12);
church.add(outerDrum);

const entranceArch = new THREE.Mesh(
  new THREE.BoxGeometry(14, 12, 1),
  stoneMaterial,
);
entranceArch.position.set(0, 6, 21.5);
church.add(entranceArch);

const entrancePlatform = new THREE.Mesh(
  new THREE.BoxGeometry(12, 0.6, 8),
  darkStoneMaterial,
);
entrancePlatform.position.set(0, 0.05, 26);
church.add(entrancePlatform);

const narthexCeiling = new THREE.Mesh(
  new THREE.BoxGeometry(13.5, 0.5, 7.5),
  stoneMaterial,
);
narthexCeiling.position.set(0, 8.4, 25.5);
church.add(narthexCeiling);

const leftEntryWall = new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 9, 7.5),
  stoneMaterial,
);
leftEntryWall.position.set(-6.1, 4.5, 25.5);
church.add(leftEntryWall);

const rightEntryWall = leftEntryWall.clone();
rightEntryWall.position.x = 6.1;
church.add(rightEntryWall);

const topEntryWall = new THREE.Mesh(
  new THREE.BoxGeometry(10.8, 2.4, 1.1),
  stoneMaterial,
);
topEntryWall.position.set(0, 8.2, 22.2);
church.add(topEntryWall);

const doorGeometry = new THREE.BoxGeometry(2.1, 6.8, 0.28);
doorGeometry.translate(1.05, 0, 0);

const leftDoorHinge = new THREE.Group();
leftDoorHinge.position.set(-2.25, 3.4, 22.35);
leftDoorHinge.rotation.y = Math.PI * 0.58;
church.add(leftDoorHinge);

const leftDoor = new THREE.Mesh(doorGeometry, woodMaterial);
leftDoorHinge.add(leftDoor);

const rightDoorHinge = new THREE.Group();
rightDoorHinge.position.set(2.25, 3.4, 22.35);
rightDoorHinge.rotation.y = -Math.PI * 0.58;
church.add(rightDoorHinge);

const rightDoor = new THREE.Mesh(doorGeometry, woodMaterial);
rightDoor.rotation.y = Math.PI;
rightDoorHinge.add(rightDoor);

const doorLintel = new THREE.Mesh(
  new THREE.BoxGeometry(5.2, 0.7, 0.5),
  marbleMaterial,
);
doorLintel.position.set(0, 7.1, 22.1);
church.add(doorLintel);

const innerEntryLeft = new THREE.Mesh(
  new THREE.BoxGeometry(1, 6.8, 0.8),
  stoneMaterial,
);
innerEntryLeft.position.set(-3.25, 3.4, 18.8);
church.add(innerEntryLeft);

const innerEntryRight = innerEntryLeft.clone();
innerEntryRight.position.x = 3.25;
church.add(innerEntryRight);

const innerEntryLintel = new THREE.Mesh(
  new THREE.BoxGeometry(7.5, 1, 0.8),
  stoneMaterial,
);
innerEntryLintel.position.set(0, 6.3, 18.8);
church.add(innerEntryLintel);

const apseWall = new THREE.Mesh(
  new THREE.CylinderGeometry(13, 13, 20, 30, 1, true, Math.PI, Math.PI),
  stoneMaterial,
);
apseWall.rotation.y = Math.PI / 2;
apseWall.position.set(0, 10, -42);
church.add(apseWall);

const sideAisleRoof = new THREE.Mesh(
  new THREE.CylinderGeometry(31, 31, 0.6, 40),
  stoneMaterial,
);
sideAisleRoof.position.set(0, 12.4, -12);
church.add(sideAisleRoof);

const upperGallery = new THREE.Mesh(
  new THREE.CylinderGeometry(16, 16, 0.45, 36),
  marbleMaterial,
);
upperGallery.position.set(0, 14.8, -12);
church.add(upperGallery);

const dome = new THREE.Mesh(
  new THREE.SphereGeometry(21, 40, 28, 0, Math.PI * 2, 0, Math.PI / 2),
  marbleMaterial,
);
dome.position.set(0, 14, -12);
church.add(dome);

const halfDomeA = new THREE.Mesh(
  new THREE.SphereGeometry(13, 32, 20, 0, Math.PI * 2, 0, Math.PI / 2),
  marbleMaterial,
);
halfDomeA.rotation.x = Math.PI / 2;
halfDomeA.position.set(0, 9.5, -33);
church.add(halfDomeA);

const halfDomeB = halfDomeA.clone();
halfDomeB.rotation.x = -Math.PI / 2;
halfDomeB.position.z = 9;
church.add(halfDomeB);

const archMaterial = new THREE.MeshStandardMaterial({
  color: 0x6f6153,
  roughness: 0.9,
});

for (const x of [-11.5, 11.5]) {
  for (const z of [18, 6, -6, -18, -30, -42]) {
    const column = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 1.15, 16, 16),
      marbleMaterial,
    );
    column.position.set(x, 8, z);
    church.add(column);

    const capital = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.1, 0.9, 16),
      stoneMaterial,
    );
    capital.position.set(x, 16.45, z);
    church.add(capital);
  }
}

for (const z of [18, 6, -6, -18, -30, -42]) {
  const arch = new THREE.Mesh(
    new THREE.BoxGeometry(24, 1.2, 1.6),
    archMaterial,
  );
  arch.position.set(0, 16.9, z);
  church.add(arch);
}

for (const x of [-18, 18]) {
  for (const z of [20, 4, -12, -28, -44]) {
    const upperWindow = new THREE.Mesh(
      new THREE.PlaneGeometry(2.8, 5),
      new THREE.MeshBasicMaterial({
        color: 0xb9d4e8,
        transparent: true,
        opacity: 0.28,
        side: THREE.DoubleSide,
      }),
    );
    upperWindow.position.set(x, 13.2, z);
    upperWindow.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2;
    church.add(upperWindow);
  }
}

for (const angle of [-1.35, -0.95, -0.55, -0.15, 0.15, 0.55, 0.95, 1.35]) {
  const domeWindow = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 2.9),
    new THREE.MeshBasicMaterial({
      color: 0xe9c77d,
      transparent: true,
      opacity: 0.26,
      side: THREE.DoubleSide,
    }),
  );
  domeWindow.position.set(
    Math.sin(angle) * 14,
    18.2,
    -12 + Math.cos(angle) * 14,
  );
  domeWindow.lookAt(0, 18.2, -12);
  church.add(domeWindow);
}

for (const x of [-6, 6]) {
  const banner = new THREE.Mesh(
    new THREE.PlaneGeometry(4.6, 10),
    bannerMaterial,
  );
  banner.position.set(x, 10, -36);
  church.add(banner);
}

const sanctuarySteps = new THREE.Mesh(
  new THREE.BoxGeometry(16, 1.4, 10),
  darkStoneMaterial,
);
sanctuarySteps.position.set(0, 0.7, -39);
church.add(sanctuarySteps);

const altar = new THREE.Mesh(
  new THREE.BoxGeometry(5.8, 2.5, 3),
  marbleMaterial,
);
altar.position.set(0, 2.5, -41);
church.add(altar);

const altarCross = new THREE.Mesh(
  new THREE.BoxGeometry(0.35, 3.6, 0.35),
  brassMaterial,
);
altarCross.position.set(0, 4.7, -41);
church.add(altarCross);

const altarCrossBar = new THREE.Mesh(
  new THREE.BoxGeometry(1.7, 0.35, 0.35),
  brassMaterial,
);
altarCrossBar.position.set(0, 5.4, -41);
church.add(altarCrossBar);

const ambientLight = new THREE.AmbientLight(0xffe3bd, 0.34);
scene.add(ambientLight);

const sunShaft = new THREE.DirectionalLight(0xe6c78e, 0.48);
sunShaft.position.set(-14, 20, -8);
scene.add(sunShaft);

const torchLights = [];
for (const z of [18, 4, -10, -24, -38]) {
  const chandelierRing = new THREE.Mesh(
    new THREE.TorusGeometry(3.1, 0.1, 10, 48),
    brassMaterial,
  );
  chandelierRing.rotation.x = Math.PI / 2;
  chandelierRing.position.set(0, 10.8, z);
  church.add(chandelierRing);

  for (const angle of [0, 0.9, 1.8, 2.7, 3.6, 4.5, 5.4]) {
    const candle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.07, 0.07, 0.45, 10),
      candleMaterial,
    );
    candle.position.set(Math.cos(angle) * 3, 10.95, z + Math.sin(angle) * 3);
    church.add(candle);

    const torchLight = new THREE.PointLight(0xffa34a, 4.8, 16, 2);
    torchLight.position.copy(candle.position);
    scene.add(torchLight);
    torchLights.push(torchLight);
  }
}

let animationFrameId = null;
const clock = new THREE.Clock();
const pressedKeys = new Set();
const moveSpeed = 11;
const forwardVector = new THREE.Vector3();
const rightVector = new THREE.Vector3();
const worldUp = new THREE.Vector3(0, 1, 0);
const movement = new THREE.Vector3();
const lookDirection = new THREE.Vector3();
const minX = -26;
const maxX = 26;
const minZ = -55;
const maxZ = 30;
const mouseSensitivity = 0.0035;
const groundHeight = 2.4;
const jumpVelocity = 8.5;
const gravity = 22;
let previousMouseX = null;
let previousMouseY = null;
let yaw = 0;
let pitch = 0;
let verticalVelocity = 0;

camera.getWorldDirection(lookDirection);
yaw = Math.atan2(lookDirection.x, lookDirection.z);
pitch = Math.asin(lookDirection.y);

function applyCameraLook() {
  const clampedPitch = THREE.MathUtils.clamp(pitch, -Math.PI / 3, Math.PI / 3);
  pitch = clampedPitch;
  lookDirection.set(
    Math.sin(yaw) * Math.cos(pitch),
    Math.sin(pitch),
    Math.cos(yaw) * Math.cos(pitch),
  );
  camera.lookAt(camera.position.clone().add(lookDirection));
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onResize);
window.addEventListener("keydown", (event) => {
  pressedKeys.add(event.key);

  if (event.code === "Space" && camera.position.y <= groundHeight + 0.001) {
    verticalVelocity = jumpVelocity;
  }
});
window.addEventListener("keyup", (event) => {
  pressedKeys.delete(event.key);
});
window.addEventListener("mousemove", (event) => {
  if (sceneScreen.hidden) {
    previousMouseX = null;
    previousMouseY = null;
    return;
  }

  if (previousMouseX === null || previousMouseY === null) {
    previousMouseX = event.clientX;
    previousMouseY = event.clientY;
    return;
  }

  yaw -= (event.clientX - previousMouseX) * mouseSensitivity;
  pitch -= (event.clientY - previousMouseY) * mouseSensitivity;
  previousMouseX = event.clientX;
  previousMouseY = event.clientY;
  applyCameraLook();
});
window.addEventListener("mouseleave", () => {
  previousMouseX = null;
  previousMouseY = null;
});

function animate() {
  const delta = clock.getDelta();
  const elapsed = clock.elapsedTime;

  movement.set(0, 0, 0);

  forwardVector.set(Math.sin(yaw), 0, Math.cos(yaw)).normalize();
  rightVector.crossVectors(forwardVector, worldUp).normalize();

  if (pressedKeys.has("ArrowUp")) {
    movement.add(forwardVector);
  }
  if (pressedKeys.has("ArrowDown")) {
    movement.sub(forwardVector);
  }
  if (pressedKeys.has("ArrowLeft")) {
    movement.sub(rightVector);
  }
  if (pressedKeys.has("ArrowRight")) {
    movement.add(rightVector);
  }

  if (movement.lengthSq() > 0) {
    movement.normalize().multiplyScalar(moveSpeed * delta);
    camera.position.add(movement);
    camera.position.x = THREE.MathUtils.clamp(camera.position.x, minX, maxX);
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, minZ, maxZ);
  }

  verticalVelocity -= gravity * delta;
  camera.position.y += verticalVelocity * delta;

  if (camera.position.y < groundHeight) {
    camera.position.y = groundHeight;
    verticalVelocity = 0;
  }

  applyCameraLook();

  for (const [index, torchLight] of torchLights.entries()) {
    torchLight.intensity = 4.5 + Math.sin(elapsed * 3.8 + index * 0.7) * 0.55;
  }

  renderer.render(scene, camera);
  animationFrameId = window.requestAnimationFrame(animate);
}

function showScene() {
  menu.hidden = true;
  instructionsScreen.hidden = true;
  sceneScreen.hidden = false;
  previousMouseX = null;
  previousMouseY = null;
  onResize();

  if (animationFrameId === null) {
    animate();
  }
}

function showMenu() {
  sceneScreen.hidden = true;
  instructionsScreen.hidden = true;
  menu.hidden = false;
  previousMouseX = null;
  previousMouseY = null;

  if (animationFrameId !== null) {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

function showInstructions() {
  menu.hidden = true;
  sceneScreen.hidden = true;
  instructionsScreen.hidden = false;
  previousMouseX = null;
  previousMouseY = null;

  if (animationFrameId !== null) {
    window.cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }
}

startButton.addEventListener("click", showInstructions);
sceneButton.addEventListener("click", showScene);
readyButton.addEventListener("click", showScene);
backToMenuButton.addEventListener("click", showMenu);
backButton.addEventListener("click", showMenu);
