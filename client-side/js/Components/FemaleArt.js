export default function FemaleArt(femaleArt) {
    return `
    <div class="femaleArt_container">
        <h4 id="title">Female Art of The Metropolitan Museum of Art</h4>
        <p class="show-id"></p>
        <div class="app-wrap">
    
          <div class="row">
            <div class="col-md-8">
              <div class="photo"><img src="${data.primaryImage}" class="primaryImage"/>
              </div>
            </div>
            <div class="col-md-4">
              <h4 class="title"></h4>
              <p class="artistDisplayName">${data.artistDisplayName}</p>
              <p class="artistNationality"></p>
              <p class="artistDisplayBio"></p>
              <p class="department"></p>
              <p class="culture"></p>
              <p class="period"></p>
              <p class="objectEndDate pb-5">${data.objectEndDate}</p>
              <p class="show-id"></p>
    
    
              <button id="nextButton">Next</button>
            </div>
          </div>
    
    
        </div>
      </div>
    `;
}