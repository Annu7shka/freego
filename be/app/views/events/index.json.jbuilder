json.array! @events do |event|
  json.created_at event.created_at
  json.start event.start
  json.end event.end
  json.event_type event.event_type
  json.title event.title
  json.description event.description
  json.latitude event.latitude
  json.longitude event.longitude
  json.age_start event.age_start
  json.age_end event.age_end
  json.image_url event.image.url(:medium)
  json.address event.address
  json.url event.url
end