<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>explore.</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../../../public/css/style.scss" />
</head>

<body>
  <div class="rellax parallax-el" data-rellax-speed="1"></div>
  <div class="rellax text" data-rellax-speed="5"></div>
  <div class="rellax clouds" data-rellax-speed="3"></div>
  <div class="rellax mouse-scroll" data-rellax-speed="-3"></div>
  <div class="whitespace"></div>

  <section class="depoimentos">
    <div class="box-title-section">
      <h5>O QUE ESTÃO FALANDO</h5>
      <h4>Confira o que os intercambistas acham de viajar com a Explore</h4>
    </div>

    <div class="container">
      <div id="carousel-depoimentos-desktop" class="swiperCarousel">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="item">
              <div class="dados-depoimento">
                <div class="box-textos">
                  <div class="d-flex">
                    <?php foreach ($data['depoimentos'] as $depoimento) { ?>
                      <h3>
                        <?= $depoimento['nomeUsuario'] ?>
                      </h3>
                      <ul>
                        <li>
                          <?= $depoimento['cidade'] ?>
                        </li>
                        <li>
                          <?= $depoimento['pais'] ?>
                        </li>
                      </ul>
                    </div>

                    <p>
                      <?= $depoimento['depoimento'] ?>
                    </p>

                  <?php } ?>


                  <div class="box-avatar"
                    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/dDYRYivNzbI); background-repeat: no-repeat; background-size: cover;">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="item">
              <div class="dados-depoimento box-right">
                <div class="box-textos">
                  <div class="d-flex">
                    <h3>Vagnão Junior's</h3>
                    <ul>
                      <li>Boston</li>
                      <li>Estados Unidos</li>
                    </ul>
                  </div>

                  <p>
                    A agência Explore foi fundamental na minha viagem de intercâmbio. Eles ofereceram suporte completo,
                    desde a seleção do destino até a hospedagem. Além disso, a diversidade de culturas que conheci foi
                    enriquecedora. Recomendo a Explore pela excelência em serviços de intercâmbio.
                  </p>

                  <div class="box-avatar"
                    style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/MChSQHxGZrQ); background-repeat: no-repeat; background-size: cover;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>

<script src="../index.js" type="module"></script>

</html>