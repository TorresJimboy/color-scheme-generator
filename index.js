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

                colorBox.innerHTML = `
                    <div class="hex">${color.hex.value}</div>
                    <div class="color-name">${color.name.value}</div>
                `
                colorBox.addEventListener("click", function () {
                    navigator.clipboard.writeText(color.hex.value)

                    const hexDiv = colorBox.querySelector(".hex")
                    const originalText = hexDiv.textContent

                    hexDiv.textContent = "Copied!"

                    setTimeout(() => {
                        hexDiv.textContent = originalText
                    }, 1000)
                })

                colorsDiv.appendChild(colorBox)
            })
        })
}

getColorScheme()

getBtn.addEventListener("click", function() {
    getColorScheme()
})