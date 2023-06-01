        <section class="main-content">
            <div class="content">
                <h4>explore e estude idiomas!</h4>
                <p>
                    Esse é o tipo de programa mais procurado pelos intercambistas que querem aprender ou aperfeiçoar uma segunda língua. Para fazer esse programa não é necessário saber o idioma antes de embarcar. Isso porque antes das aulas começarem efetivamente, os alunos fazem um teste para indicar o nível de conhecimento da língua escolhida. Com isso, eles são direcionados a uma turma específica para seu nível.
                </p>

                <p>
                   Tanto pessoas com um nível muito básico, quanto pessoas com nível avançado podem participar desses programas, basta só escolher a língua desejada. A Explore disponibiliza cursos para inglês, espanhol e alemão.
                </p>
            </div>
        </section>

        <?php 
            $spanishPackages = $data['pacotes']['espanhol'];
            $englishCourses = $data['pacotes']['ingles'];
        ?>

        <section class="motivos">
            <div class="box-title-section">
                <h5>programas de estudar idiomas</h5>
                <h4>ESCOLHA O SEU!</h4>
            </div>

            <div class="box-title-section">
                <h5>Espanhol</h5>
            </div>
            
            <div class="container">
                <div id="carousel-idiomas-desktop" class="swiperCarousel swiperCarouselIdiomas">
                    <div class="swiper-wrapper">
                        <?php foreach ($spanishPackages as $package):?>
                            <div class="swiper-slide">
                                <div class="item" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/FtCcXKZV2N4); background-repeat: no-repeat; background-size: cover;">
                                    <div class="dados-depoimento box-right">
                                        <div class="box-textos-motivos">
                                            <div class="d-flex">
                                                <h3><?= $package['nomeCurso']?> ✦</h3>
                                            </div>

                                            <p><?= $package['descricaoCurso']?></p>

                                            <div class="btn-anchor-carousel">
                                                <a href="cursosIdiomas/ver/<?= $package['idCurso']?>">saiba mais</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>

            <div class="box-title-section">
                <h5>Inglês</h5>
            </div>
            
            <div class="container">
                <div id="carousel-idiomas-desktop" class="swiperCarousel swiperCarouselIdiomas">
                    <div class="swiper-wrapper">
                        <?php foreach ($englishCourses as $package):?>
                            <div class="swiper-slide">
                                <div class="item" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/FtCcXKZV2N4); background-repeat: no-repeat; background-size: cover;">
                                    <div class="dados-depoimento box-right">
                                        <div class="box-textos-motivos">
                                            <div class="d-flex">
                                                <h3><?= $package['nomeCurso']?> ✦</h3>
                                            </div>

                                            <p><?= $package['descricaoCurso']?></p>

                                            <div class="btn-anchor-carousel">
                                                <a href="cursosIdiomas/ver/<?= $package['idCurso']?>">saiba mais</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>

            <div class="box-title-section">
                <h5>Alemão</h5>
            </div>
            <div class="container">
                <div id="carousel-idiomas-desktop" class="oneSlide swiperCarouselIdiomas">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="item" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/G6RE_to6Lus); background-repeat: no-repeat; background-size: cover; background-position: center;">
                                <div class="dados-depoimento box-right">
                                    <div class="box-textos-motivos">
                                        <div class="d-flex">
                                            <h3>General German ✦</h3>
                                        </div>

                                        <p> O curso de General German é ideal para quem quer aprender sobre a língua alemã, desde o estudo da gramática à conversação. Não importa qual o nível de conhecimento em alemão, temos cursos desde o mais básico até o mais avançado.As aulas desse formato de curso são completas. Durante o período de intercâmbio, os professores trabalharão no desenvolvimento das habilidades de forma integrada. Isso quer dizer que durante as aulas todos os módulos de aprendizado (fala, escrita, audição e leitura) serão parte integrante do plano de estudos.</p>

                                        <div class="btn-anchor-carousel">
                                            <a href="cursosIdiomas/ver/<?= $package['idCurso']?>">saiba mais</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <?php require './application/views/template/cards-packs.php' ?>

        <?php require './application/views/template/form-question.php'?>