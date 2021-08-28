let sectionTitleToggles = document.querySelectorAll('.sectionTitleToggles');
for (let i = 0; i < sectionTitleToggles.length; i++) {
    let sectionTitleToggle = sectionTitleToggles[i];
    sectionTitleToggle.addEventListener('click', function(e) {
        if (sectionTitleToggle.classList.contains('.coloration', '.colorationUnderline') === true) {
            sectionTitleToggle.classList.remove('.coloration', '.colorationUnderline')

        } else {
            sectionTitleToggle.classList.add('.coloration', '.colorationUnderline')
        }
    })
}