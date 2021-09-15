const systemRequirementsMin = document.getElementById('minSystemRequirements');
const systemRequirementsRecommend = document.getElementById('recommendSystemRequirements');

const systemRequirementsRequirement = document.createElement('div');
systemRequirementsRequirement.className = 'systemRequirementsRequirement';


const systemRequirementsMinArr = ['Windows 7', 'Intel(R) Core(TM) i3-2310M CPU @ 2.10GHz', '6 GB RAM', 'Intel(R) Intel HD Graphics 620', '50 GB available space', 'Requires a 64-bit processor and operating system'];
const systemRequirementsRecommendArr = ['Windows 10', 'Intel Core i7 CPU 920 @ 2.67GHz', '8 GB RAM', 'NVIDIA GeForce GTX 1050 Ti', '50 GB available space', 'Requires a 64-bit processor and operating system'];
systemRequirementsMinArr.forEach(createSystemRequirementsRequirement);


function createSystemRequirementsRequirement(element) {
    let requirement = document.createElement('div');
    requirement.className = 'requirement';
    requirement.innerHTML = `${element}`;
    systemRequirementsRequirement.appendChild(requirement);
}
systemRequirementsMin.appendChild(systemRequirementsRequirement);