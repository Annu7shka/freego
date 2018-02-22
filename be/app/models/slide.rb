class Slide < ApplicationRecord
  has_attached_file :image, styles: {
    full: '1600x400#'
  }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
