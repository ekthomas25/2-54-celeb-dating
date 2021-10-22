$(document).ready(function() {
    let barker = 0; 
    let queen = 0;
    let canyon = 0; 
    let zeus = 0; 
    let space = 0;
    
    $("form#quiz").submit(function(event) {
        event.preventDefault();
        let date = $("input:radio[name=date]:checked").val();
        let world = $("input:radio[name=world]:checked").val();
        let island = $("input:radio[name=island]:checked").val();
        let children = $("input:radio[name=children]:checked").val();
        let important = $("input:radio[name=important]:checked").val();
        
        if (date === "dinner") {
            barker +=1;
            queen +=1;
        } else if (date === "beach") {
            zeus +=1;
            space +=1;
        } else if (date === "sightseeing") {
            canyon +=1;
            space +=1;
        } else if (date === "show") {
            barker +=1;
            zeus +=1;
        } else {
            canyon +=1;
            queen +=1;
        }
        
        if (world === "england") {
            queen +=1;
        } else if (world === "greece") {
            zeus +=1;
        } else if (world === "hollywood") {
            barker +=1;
        } else if (world === "grand") {
            canyon +=1;
        } else {
            space +=1;
        }

        if (island === "water") {
            canyon +=1;
        } else if (island === "flashlight") {
            zeus +=1;
        } else if (island === "telescope") {
            space +=1;
        } else if (island === "jewels") {
            queen +=1;
        } else {
            barker +=1;
        }

        if (children === "yes") {
            queen +=1;
            zeus +=1;
            space +=1;
        } else {
            barker +=1;
            canyon +=1;
        }

        if (important === "money") {
            queen +=1;
            barker +=1;
        } else if (important === "power") {
            zeus +=1;
            queen +=1;
            space +=1;
        } else if (important === "fame") {
            barker +=1;
            zeus +=1;
            canyon +=1;
        } else {
            space +=1;
            canyon +=1;
        }

        if (barker > zeus && barker > queen && barker > space && barker > canyon) {
            $('#bob-barker').show();
        } else if (queen > barker && queen > zeus && queen > canyon && queen > space) {
            $('#queen-elizabeth').show();
        } else if (zeus > barker && zeus > queen && zeus > space && queen > canyon) {
            $('#the-big-man').show();
        } else if (space > barker && space > queen && space > zeus && space > canyon) {
            $('#the-final-frontier').show();
        } else if (canyon > barker && canyon > queen && canyon > zeus && canyon > space) {
            $('#grand-canyon').show();
        } else {
            $('#bob-barker').show();
        }
    });
});