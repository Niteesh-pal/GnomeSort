const container = document.querySelector(".data-container");




function generatebars(num = 20) {
  
  
  for (let i = 0; i < num; i += 1) {
    
    
    const value = Math.floor(Math.random() * 100) + 1;

    const bar = document.createElement("div");
  

    bar.classList.add("bar");
  
    
    bar.style.height = `${value * 3}px`;
      
    
    bar.style.transform = `translateX(${i * 30}px)`;
  
    
    const barLabel = document.createElement("label");
  
    
    barLabel.classList.add("bar__id");
  
    
    barLabel.innerHTML = value;
	barLabel.style.color="white";
  
    
    bar.appendChild(barLabel);
  
    
    container.appendChild(bar);
  }
}




async function CombSort(delay = 600) {

	let bars = document.querySelectorAll(".bar");

	var pos = 0;

	while (pos < 20) {
		if (pos == 0) {
			pos++;
		}


		var value1 = parseInt(bars[pos].childNodes[0].innerHTML);
		bars[pos].style.backgroundColor = "green";


		var value2 = parseInt(bars[pos - 1].childNodes[0].innerHTML);
		bars[pos - 1].style.backgroundColor = "green";


		if (value1 >= value2) {
			pos++;
		} else {


			bars[pos].style.backgroundColor = "red";


			bars[pos - 1].style.backgroundColor = "red";


			var temp1 = bars[pos].style.height;
			var temp2 = bars[pos].childNodes[0].innerText;

			
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 700)
			);

			
			bars[pos].style.height = bars[pos - 1].style.height;
			bars[pos].childNodes[0].innerText =
				bars[pos - 1].childNodes[0].innerText;
			bars[pos - 1].style.height = temp1;
			bars[pos - 1].childNodes[0].innerText = temp2;
			pos--;
		}

		
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 700)
		);

		for (var x = 0; x < 20; x++) {
			bars[x].style.backgroundColor = "rgb(0, 183, 255)";
		}
	}

	
	for (var x = 0; x < 20; x++) {
		bars[x].style.backgroundColor = "rgb(49, 226, 13)";
	}

	
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";

	
	document.getElementById("Button2").disabled = false;
	document.getElementById("Button2").style.backgroundColor = "#6f459e";
}


generatebars();




function generate() {
	window.location.reload();
}


function disable() {


	document.getElementById("Button1").disabled = true;
	document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

	
	document.getElementById("Button2").disabled = true;
	document.getElementById("Button2").style.backgroundColor = "#d8b6ff";
}
