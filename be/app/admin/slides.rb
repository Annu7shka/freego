ActiveAdmin.register Slide do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
  permit_params :image, :title, :description, :link
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
    column :title
    column :description
    column :link
    actions
  end

  form do |f|
    f.inputs "Upload" do
      f.input :image, required: true, as: :file
    end
    f.input :title
    f.input :description
    f.input :link
    f.actions
  end

end
