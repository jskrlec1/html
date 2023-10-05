/*jshint esversion: 6 */ 
(function () {
    var input = document.querySelector("input");
    var addButton = document.querySelector(".addButton");
    var clearButton = document.querySelector(".clearButton");
    var clearCheckedButton = document.querySelector(".clearCheckedButton");
  
    var table = document.querySelector(".todoTable");
  
    
    var originalPositions = new Map();
  
    function createItem(text) {
      let tbody = table.querySelector("tbody");
      let rows = Array.from(tbody.rows);
  
      let row = tbody.insertRow(getInsertIndex(rows));
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
  
      
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "taskCheckbox";
  
      let taskText = document.createElement("span");
      taskText.className = "taskText";
      taskText.textContent = text;
  
      cell1.appendChild(checkbox);
      cell2.appendChild(taskText);
  
      
      let removeButton = document.createElement("div");
      removeButton.className = "removeButton";
      removeButton.textContent = "OBRIŠI";
      removeButton.addEventListener("click", function () {
        removeItemWithAnimation(row);
      });
      cell3.appendChild(removeButton);
  
      
      row.style.opacity = 0;
     
      setTimeout(() => {
        row.style.opacity = 1;
      }, 10);
  
      
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          taskText.style.textDecoration = "line-through";
          row.style.backgroundColor = "red";
          moveItemToBottom(row);
          
          originalPositions.set(row, rows.indexOf(row));
        } else {
          taskText.style.textDecoration = "none";
          row.style.backgroundColor = "transparent";
         
          let originalPosition = originalPositions.get(row);
          if (originalPosition !== undefined) {
            moveItemToPosition(row, originalPosition);
            originalPositions.delete(row);
          }
        }
      });
    }
  
    function addItem() {
      let textInput = input.value;
      createItem(textInput);
      input.value = "";
      setFocusOnInput();
    }
  
    addButton.addEventListener("click", addItem);
  
    clearButton.addEventListener("click", function () {
      clearAllTasks();
    });
  
    clearCheckedButton.addEventListener("click", function () {
      clearCheckedTasks();
    });
  
    function removeItemWithAnimation(row) {
      let tbody = table.querySelector("tbody");
      row.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      row.style.transform = "translateX(100%)";
      row.style.opacity = 0;
      setTimeout(() => {
        row.remove();
      }, 500);
    }
  
    function moveItemToBottom(row) {
      let tbody = table.querySelector("tbody");
      tbody.appendChild(row);
    }
  
    function moveItemToPosition(row, position) {
      let tbody = table.querySelector("tbody");
      let rows = Array.from(tbody.rows);
      rows.splice(position, 0, rows.splice(rows.indexOf(row), 1)[0]);
      tbody.innerHTML = "";
      rows.forEach((r) => tbody.appendChild(r));
    }
  
    function getInsertIndex(rows) {
      let index = rows.findIndex((row) => {
        let checkbox = row.querySelector(".taskCheckbox");
        return checkbox && checkbox.checked;
      });
  
      if (index !== -1) {
        return index;
      } else {
        return rows.length;
      }
    }
  
    function clearAllTasks() {
      let tbody = table.querySelector("tbody");
      tbody.innerHTML = "";
    }
  
    function clearCheckedTasks() {
      let tbody = table.querySelector("tbody");
      let rows = Array.from(tbody.rows);
      rows.forEach((row) => {
        let checkbox = row.querySelector(".taskCheckbox");
        if (checkbox && checkbox.checked) {
          removeItemWithAnimation(row);
        }
      });
    }
  
    function setFocusOnInput() {
      input.focus();
    }
  })();
  