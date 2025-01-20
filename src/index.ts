
document.addEventListener('DOMContentLoaded', () => {
    const name: string = 'Akshat Verma';
    const role: string = 'Backend Developer';

    typingEffectName(name, role);
});

function typingEffectName(nameContent: string, role: string): void{
    const name: string[] = nameContent.split('');
    
    
    let curr1: string ='';
    let nameSpace: HTMLElement | null = document.getElementById('name');

    if(nameSpace){
        for(let i: number = 0; i < name.length; i++){
            setTimeout(() => {
                curr1 += name[i];
                nameSpace.textContent = curr1;

                if(i === name.length - 1){
                    typingEffectRole(role);
                }
            }, 150 * i);
        }
    }
}

function typingEffectRole(roleContent: string): void{
    const role: string[] = roleContent.split('');
    let curr2: string = '';
    let roleSpace: HTMLElement | null = document.getElementById('role');

    if(roleSpace){
        for(let i: number = 0; i < role.length; i++){
            setTimeout(() => {
                curr2 += role[i];
                roleSpace.textContent = curr2;
            }, 150 * i);
        }
    }
}