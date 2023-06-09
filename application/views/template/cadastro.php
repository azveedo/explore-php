<div class="main-content">
      <section class="img-bg">
        <div class="img-bg-div">
          <img src="./public/assets/images/bg-login.jpg" alt="">
        </div>
      </section>
      <section class="content-box-form">
        <div class="container">
          <div class="user-form-login">
            <div class="form-content">
              <h1>Usuário</h1>
              <form action="cadastro/criar" method="post">
                <div class="input-box">
                  <label>Email *</label>
                  <input type="text" name="email" id="email" required>
                </div>
                <div class="input-box">
                  <label>Nome Completo *</label>
                  <input type="text" name="usuario" id="usuario" required>
                </div>
                <div class="grid-container-box-50">
                  <div class="input-box-50">
                    <label>Senha *</label>
                    <input type="password" name="senha" id="senha" required>
                  </div>
                  <div class="input-checkbox">
                    <input class="" type="checkbox" onclick="mostraSenha()">
                    <span>Mostrar Senha</span>
                  </div>
                </div>
                <div class="input-box">
                  <label>Telefone *</label>
                  <input type="tel" required="required" name="telefone" id="" aria-required="true" />
                </div>
              <!-- </form> -->
            </div>
          </div>
          <div class="user-form-address">
            <div class="form-content">
              <h1>Endereço</h1>
              <!-- <form action="cadastroUser.php" method="post"> -->
                <div class="input-box">
                  <label>País *</label>
                  <select class="form-select" name="pais" id="pais" name="pais">
                    <option value="">Selecione o seu País</option>
                    <option value="Afghanistan">Afeganistão</option>
                    <option value="Aland Islands">Ilhas Aland</option>
                    <option value="Albania">Albânia</option>
                    <option value="Algeria">Argélia</option>
                    <option value="American Samoa">Samoa Americana</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antártica</option>
                    <option value="Antigua and Barbuda">Antigua e Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armênia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Austrália</option>
                    <option value="Austria">Áustria</option>
                    <option value="Azerbaijan">Azerbaijão</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Bielo-Rússia</option>
                    <option value="Belgium">Bélgica</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermudas</option>
                    <option value="Bhutan">Butão</option>
                    <option value="Bolivia">Bolívia</option>
                    <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius e Saba</option>
                    <option value="Bosnia and Herzegovina">Bósnia e Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Ilha Bouvet</option>
                    <option value="Brazil">Brasil</option>
                    <option value="British Indian Ocean Territory">Território Britânico do Oceano Índico</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgária</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Camboja</option>
                    <option value="Cameroon">Camarões</option>
                    <option value="Canada">Canadá</option>
                    <option value="Cape Verde">cabo Verde</option>
                    <option value="Cayman Islands">Ilhas Cayman</option>
                    <option value="Central African Republic">República Centro-Africana</option>
                    <option value="Chad">Chade</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Ilha do Natal</option>
                    <option value="Cocos (Keeling) Islands">Ilhas Cocos (Keeling)</option>
                    <option value="Colombia">Colômbia</option>
                    <option value="Comoros">Comores</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, Democratic Republic of the Congo">Congo, República Democrática do Congo</option>
                    <option value="Cook Islands">Ilhas Cook</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                    <option value="Croatia">Croácia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curaçao</option>
                    <option value="Cyprus">Chipre</option>
                    <option value="Czech Republic">República Checa</option>
                    <option value="Denmark">Dinamarca</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">República Dominicana</option>
                    <option value="Ecuador">Equador</option>
                    <option value="Egypt">Egito</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Guiné Equatorial</option>
                    <option value="Eritrea">Eritreia</option>
                    <option value="Estonia">Estônia</option>
                    <option value="Ethiopia">Etiópia</option>
                    <option value="Falkland Islands (Malvinas)">Ilhas Falkland (Malvinas)</option>
                    <option value="Faroe Islands">ilhas Faroe</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finlândia</option>
                    <option value="France">França</option>
                    <option value="French Guiana">Guiana Francesa</option>
                    <option value="French Polynesia">Polinésia Francesa</option>
                    <option value="French Southern Territories">Territórios Franceses do Sul</option>
                    <option value="Gabon">Gabão</option>
                    <option value="Gambia">Gâmbia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Alemanha</option>
                    <option value="Ghana">Gana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Grécia</option>
                    <option value="Greenland">Groenlândia</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadalupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guiné</option>
                    <option value="Guinea-Bissau">Guinea-bissau</option>
                    <option value="Guyana">Guiana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">Ilha Heard e Ilhas McDonald</option>
                    <option value="Holy See (Vatican City State)">Santa Sé (Estado da Cidade do Vaticano)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungria</option>
                    <option value="Iceland">Islândia</option>
                    <option value="India">Índia</option>
                    <option value="Indonesia">Indonésia</option>
                    <option value="Iran, Islamic Republic of">Irã (Republic Islâmica do Irã</option>
                    <option value="Iraq">Iraque</option>
                    <option value="Ireland">Irlanda</option>
                    <option value="Isle of Man">Ilha de Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Itália</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japão</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordânia</option>
                    <option value="Kazakhstan">Cazaquistão</option>
                    <option value="Kenya">Quênia</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">Coréia, República Popular Democrática da</option>
                    <option value="Korea, Republic of">Republica da Coréia</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Quirguistão</option>
                    <option value="Lao People's Democratic Republic">República Democrática Popular do Laos</option>
                    <option value="Latvia">Letônia</option>
                    <option value="Lebanon">Líbano</option>
                    <option value="Lesotho">Lesoto</option>
                    <option value="Liberia">Libéria</option>
                    <option value="Libyan Arab Jamahiriya">Jamahiriya Árabe da Líbia</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lituânia</option>
                    <option value="Luxembourg">Luxemburgo</option>
                    <option value="Macao">Macau</option>
                    <option value="Macedonia, the Former Yugoslav Republic of">Macedônia, Antiga República Iugoslava da</option>
                    <option value="Madagascar">Madagáscar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malásia</option>
                    <option value="Maldives">Maldivas</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Ilhas Marshall</option>
                    <option value="Martinique">Martinica</option>
                    <option value="Mauritania">Mauritânia</option>
                    <option value="Mauritius">Maurício</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">México</option>
                    <option value="Micronesia, Federated States of">Micronésia, Estados Federados da</option>
                    <option value="Moldova, Republic of">Moldávia, República da</option>
                    <option value="Monaco">Mônaco</option>
                    <option value="Mongolia">Mongólia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Marrocos</option>
                    <option value="Mozambique">Moçambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Países Baixos</option>
                    <option value="Netherlands Antilles">Antilhas Holandesas</option>
                    <option value="New Caledonia">Nova Caledônia</option>
                    <option value="New Zealand">Nova Zelândia</option>
                    <option value="Nicaragua">Nicarágua</option>
                    <option value="Niger">Níger</option>
                    <option value="Nigeria">Nigéria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Ilha Norfolk</option>
                    <option value="Northern Mariana Islands">Ilhas Marianas do Norte</option>
                    <option value="Norway">Noruega</option>
                    <option value="Oman">Omã</option>
                    <option value="Pakistan">Paquistão</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">Território Palestino, Ocupado</option>
                    <option value="Panama">Panamá</option>
                    <option value="Papua New Guinea">Papua Nova Guiné</option>
                    <option value="Paraguay">Paraguai</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Filipinas</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Polônia</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Porto Rico</option>
                    <option value="Qatar">Catar</option>
                    <option value="Reunion">Reunião</option>
                    <option value="Romania">Romênia</option>
                    <option value="Russian Federation">Federação Russa</option>
                    <option value="Rwanda">Ruanda</option>
                    <option value="Saint Barthelemy">São Bartolomeu</option>
                    <option value="Saint Helena">Santa Helena</option>
                    <option value="Saint Kitts and Nevis">São Cristóvão e Neves</option>
                    <option value="Saint Lucia">Santa Lúcia</option>
                    <option value="Saint Martin">são Martinho</option>
                    <option value="Saint Pierre and Miquelon">São Pedro e Miquelão</option>
                    <option value="Saint Vincent and the Grenadines">São Vicente e Granadinas</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">São Tomé e Príncipe</option>
                    <option value="Saudi Arabia">Arábia Saudita</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Sérvia</option>
                    <option value="Serbia and Montenegro">Sérvia e Montenegro</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Serra Leoa</option>
                    <option value="Singapore">Cingapura</option>
                    <option value="Sint Maarten">St Martin</option>
                    <option value="Slovakia">Eslováquia</option>
                    <option value="Slovenia">Eslovênia</option>
                    <option value="Solomon Islands">Ilhas Salomão</option>
                    <option value="Somalia">Somália</option>
                    <option value="South Africa">África do Sul</option>
                    <option value="South Georgia and the South Sandwich Islands">Geórgia do Sul e Ilhas Sandwich do Sul</option>
                    <option value="South Sudan">Sudão do Sul</option>
                    <option value="Spain">Espanha</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudão</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">Svalbard e Jan Mayen</option>
                    <option value="Swaziland">Suazilândia</option>
                    <option value="Sweden">Suécia</option>
                    <option value="Switzerland">Suíça</option>
                    <option value="Syrian Arab Republic">República Árabe da Síria</option>
                    <option value="Taiwan, Province of China">Taiwan, província da China</option>
                    <option value="Tajikistan">Tajiquistão</option>
                    <option value="Tanzania, United Republic of">Tanzânia, República Unida da</option>
                    <option value="Thailand">Tailândia</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Ir</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad e Tobago</option>
                    <option value="Tunisia">Tunísia</option>
                    <option value="Turkey">Peru</option>
                    <option value="Turkmenistan">Turcomenistão</option>
                    <option value="Turks and Caicos Islands">Ilhas Turcas e Caicos</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ucrânia</option>
                    <option value="United Arab Emirates">Emirados Árabes Unidos</option>
                    <option value="United Kingdom">Reino Unido</option>
                    <option value="United States">Estados Unidos</option>
                    <option value="United States Minor Outlying Islands">Ilhas Menores Distantes dos Estados Unidos</option>
                    <option value="Uruguay">Uruguai</option>
                    <option value="Uzbekistan">Uzbequistão</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">Ilhas Virgens Britânicas</option>
                    <option value="Virgin Islands, U.s.">Ilhas Virgens, EUA</option>
                    <option value="Wallis and Futuna">Wallis e Futuna</option>
                    <option value="Western Sahara">Saara Ocidental</option>
                    <option value="Yemen">Iémen</option>
                    <option value="Zambia">Zâmbia</option>
                    <option value="Zimbabwe">Zimbábue</option>
                  </select>
                </div>
                <div class="input-box">
                  <label>Estado *</label>
                  <input type="text" name="estado" id="Estado" required>
                </div>
                <div class="input-box">
                  <label>Cidade *</label>
                  <input type="text" name="cidade" id="Estado" required>
                </div>
                <div class="input-box">
                  <label>Rua *</label>
                  <input type="text" name="rua" id="Estado" required>
                </div>
                <div class="grid-container-box-50">
                  <div class="input-box-50">
                    <label>Bairro *</label>
                    <input type="text" required="required" name="bairro" id="" aria-required="true" />
                  </div>
                  <div class="input-box-50">
                    <label>Número</label>
                    <input type="text" required="required" name="numero" id="" maxlength="15" aria-required="true" />
                  </div>
                </div>
              <!-- </form> -->
            </div>
          </div>
          <div class="input-box-btn" style="margin-top: 10px;">
            <input type="submit" value="Entrar" name="btnEntrar">
          </div>
        </form>
          <div class="input-box">
            <p>E aí, já tem uma conta? <a href="login">Entrar</a>
            </p>
          </div>
        </div>
      </section>
    </div>