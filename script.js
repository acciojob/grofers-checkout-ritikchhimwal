// Create the button to get the total price
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

// Function to calculate and display the total price
const getSum = () => {
    // Select all elements with the class 'price'
    const prices = document.querySelectorAll(".price");
    let total = 0;

    // Calculate the total by summing up all price values
    prices.forEach(priceElement => {
        total += parseFloat(priceElement.textContent);
    });

    // Create a new row and cell for displaying the total price
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row"); // Add a class for easier future reference

    const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2"); // Make it span across two columns
    totalCell.textContent = `Total Price in Rs: ${total}`;

    // Append the cell to the row and the row to the table
    totalRow.appendChild(totalCell);
    document.querySelector("table").appendChild(totalRow);
};

// Attach event listener to the button
getSumBtn.addEventListener("click", getSum);
