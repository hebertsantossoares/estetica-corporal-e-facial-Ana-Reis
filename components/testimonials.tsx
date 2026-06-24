export function Testimonials() {
  return (
    <section
      id="localizacao"
      className="py-16 sm:py-24 md:py-32 bg-secondary/40"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-primary/40 w-8 sm:w-12" />
            <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
              Localização
            </p>
            <div className="h-px bg-primary/40 w-8 sm:w-12" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground">
            Onde estamos
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Venha conhecer nosso espaço e desfrutar de uma experiência única de
            beleza e bem-estar.
          </p>
        </div>

        <div className="bg-card rounded-3xl overflow-hidden border border-border shadow-sm">

          <iframe
            src="https://www.google.com/maps?q=Rua+Elisete+Cardoso,+86,+Sorocaba,+SP&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="w-full"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="grid md:grid-cols-3 gap-6 p-6 sm:p-8">

            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Endereço
              </h3>

              <p className="text-muted-foreground text-sm">
                Rua Elisete Cardoso, 86
                <br />
                Sala 2
                <br />
                Júlio de Mesquita
                <br />
                Sorocaba - SP
              </p>
            </div>

            <div>
             <p className="text-muted-foreground text-sm leading-relaxed">
              📅 Horários de atendimento:
              <br />
              Segunda a Sexta: 14h às 20h
              <br />
               Sábados: 08h às 16h
              </p>
            </div>

            <div className="flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Rua+Elisete+Cardoso,+86,+Sorocaba,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                Abrir no Google Maps
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
 