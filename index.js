

function newImage(doodle, lftP, btmP) {
   
    
let pic = document.createElement('img');
pic.src = doodle;
pic.style.position = 'fixed';
pic.style.left = lftP;
pic.style.bottom = btmP;
document.body.append(pic);
}
newImage('assets/green-character.gif', '100px', '100px',);
newImage('assets/pine-tree.png', '450px', '200px',);

newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');

function newItem(things, lftP, btmP) {
    let pic = document.createElement('img');
    pic.src = things;
    pic. style.position = 'fixed';
    pic.style.left = lftP;
    pic.style.bottom = btmP;
    document.body.append(pic);

    pic.addEventListener('dblclick', function(){
        pic.remove()
    })

}

newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');







// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = '500px'
// sword.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })


// let greenCharacter = pic
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

// let pineTree = pic
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

