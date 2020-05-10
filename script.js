function fpl() {
    let yum = ['McDonalds', 'Subway', 'Taco Bell', 'Chick-fil-A', 'Burger King', 'Wendys', 'Dominos', 'Panera Bread', 'Pizza Hut', 'Chipotle Mexican Grill',
        'Sonic Drive-In', 'KFC', 'Applebees', 'Olive Garden', 'Arbys', 'Little Caesars', 'Buffalo Wild Wings', 'Dairy Queen', 'Panda Express',
        'Chilis Grill & Bar', 'Jack in the Box', 'IHOP', 'Popeyes', 'Texas Roadhouse', 'Papa Johns', 'Dennys', 'Outback Steakhouse',
        'Cracker Barrel', 'Whataburger', 'Red Lobster', 'Jimmy Johns Gourmet Sandwiches', 'The Cheesecake Factory', 'Hardees', 'Zaxbys',
        'Longhorn Steakhouse', 'Golden Corral', 'Five Guys Burgers and Fries', 'Culvers', 'Red Robin', 'Carls Jr', 'Waffle House', 'Bojangles',
        'Wingstop', 'Raising Canes Chicken Fingers', 'TGI Fridays', 'Jersey Mikes Subs', 'BJs Restaurant & Brewhouse', 'Steak n Shake',
        'In-N-Out Burger', 'PF Changs', 'El Pollo Loco', 'Bob Evans', 'Qdoba Mexsican Eats', 'Del Taco', 'Krispy Kreme', 'Hooters',
        'Papa Murphys Pizza', 'Firehouse Subs', 'Tim Hortons', 'Ruths Chris Steak House', 'Churchs Chicken', 'Moes Southwest Grill',
        'Cheddars Scratch Grill', 'Jasons Deli', 'Ruby Tuesday', 'McAlisters Deli', 'Carrabbas Itali8an Grill', 'California Pizza Kitchen',
        'Baskin-Robbins', 'Perkins Restaurant & Bakery', 'Marcos Pizza', 'Bonefish Grill', 'Yard House', 'Checkers Drive-In Restaurants',
        'Auntie Annes', 'Boston Market', 'Captain Ds Seafood Kitchen', 'White Castle', 'Dave & Busters', 'Noodles & Co',
        'Logans Roadhouse', 'Einstein Bros Bagels', 'Dutch Bros Coffee', 'Jamba Juice', 'Freddys Frozen Custard & Steakburgers',
        'Tropical Smoothie Cafe', 'O Charleys', 'Shake Shack', 'Potbelly Sandwich Shop', 'The Capital Grille', 'Long John Silvers',
        'The Habit Burger Grill', 'Round Table Pizza', 'Mellow Mushroom', 'Smoothie King', 'Millers Ale House', 'Maggianos Little Italy',
        'First Watch', 'Starbucks', 'Dunkin'];
    let yummy = yum[Math.floor(Math.random() * yum.length)];
    document.getElementById("result").innerHTML = "Lets go to " + yummy + " or click the button to try again";
}
