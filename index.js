const colorPicker = document.getElementById("color-picker")
const schemeSelect = document.getElementById("scheme-select")
const getBtn = document.getElementById("get-btn")
const colorsDiv = document.getElementById("colors")

function getColorScheme() {
    const hex = colorPicker.value.substring(1)
    const mode = schemeSelect.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => {
            colorsDiv.innerHTML = ""

            data.colors.forEach(color => {
                const colorBox = document.createElement("div")
                colorBox.classList.add("color-box")
                colorBox.style.backgroundColor = color.hex.value
                colorBox.textContent = color.hex.value
                colorsDiv.appendChild(colorBox)
            })
        })
}

getColorScheme()

getBtn.addEventListener("click", function() {
    getColorScheme()
})
