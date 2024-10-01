updateSearchView();
function updateSearchView() {
    searchPage = /*HTML*/`
    <div class="container">
        ${createHeader()}
        ${createDropdownMovie()}
        <div class="profileDropBtn" onclick="goProfile()"><img src="IMG/profile.png" height = 60px></div>
    </div>
    <div class="input-container">
        <input type="text" placeholder="Søk etter filmer..." oninput="model.input.search.inputSearch=this.value">
        <button onclick="searchPageResult()">Søk</button>
    </div>
    <div class="searchTable">
        <table>
            <tr>
                <th class="header"></th>
                <th class="header">Navn på film</th>
                <th class="header">Rating</th>
                <th class="header">Antall ratings</th>
                <th class="header">År laget</th>
            </tr>
            ${model.input.search.searchResults}
        </table>
    </div>
       `;
    appDiv.innerHTML = searchPage;
}