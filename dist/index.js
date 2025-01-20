"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const name = 'Akshat Verma';
    const role = 'Backend Developer';
    typingEffectName(name, role);
});
function typingEffectName(nameContent, role) {
    const name = nameContent.split('');
    let curr1 = '';
    let nameSpace = document.getElementById('name');
    if (nameSpace) {
        for (let i = 0; i < name.length; i++) {
            setTimeout(() => {
                curr1 += name[i];
                nameSpace.textContent = curr1;
                if (i === name.length - 1) {
                    typingEffectRole(role);
                }
            }, 150 * i);
        }
    }
}
function typingEffectRole(roleContent) {
    const role = roleContent.split('');
    let curr2 = '';
    let roleSpace = document.getElementById('role');
    if (roleSpace) {
        for (let i = 0; i < role.length; i++) {
            setTimeout(() => {
                curr2 += role[i];
                roleSpace.textContent = curr2;
            }, 150 * i);
        }
    }
}
