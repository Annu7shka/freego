json.array! @slides do |slide|
  json.title slide.title
  json.description slide.description
  json.image_url slide.image.url(:full)
  json.link slide.link
end