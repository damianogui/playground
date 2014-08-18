module Jekyll
  class Vimeo < Liquid::Tag
    @@width = 500
    @@height = 281

    def initialize(name, id, tokens)
      super
      @id = id
    end

    def render(context)
      %(<iframe width="#{@@width}" height="#{@@height}"
      src="http://player.vimeo.com/video/#{@id}" frameborder="0" title=0 byline=0 portrait=0
      webkitAllowFullScreen mozallowfullscreen allowFullScreen>&nbsp;</iframe>)
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)