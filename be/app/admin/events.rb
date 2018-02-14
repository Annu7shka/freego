ActiveAdmin.register Event do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :start, :end, :image, :event_type, :title, :description, :latitude, :longitude, :age_start, :age_end
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

  index do
    selectable_column
    id_column
    column :start
    column :end
    column 'Image', sortable: :image_file_name do |event| link_to event.image_file_name, event.image.url end
    column :image_file_size, sortable: :image_file_size do |event|
      if event.image_file_size
        "#{event.image_file_size / 1024} KB"
      else
        "no image file"
      end
    end
    # column "Version" do |event|
    #   if event.major_version
    #     "#{event.major_version}.#{event.minor_version}.#{event.patch_version}"
    #   else
    #     "no image file"
    #   end
    # end
    column :created_at
    column :event_type
    column :title
    column :description
    column :latitude
    column :longitude
    column :age_start
    column :age_end
    actions
  end

  form do |f|
    f.input :start
    f.input :end
    f.inputs "Upload" do
      f.input :image, required: true, as: :file
    end
    f.input :event_type
    f.input :title
    f.input :description
    f.input :latitude
    f.input :longitude
    f.input :age_start
    f.input :age_end
    f.actions
  end

end
