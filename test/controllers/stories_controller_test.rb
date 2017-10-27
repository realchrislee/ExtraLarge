require 'test_helper'

class StoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stories_index_url
    assert_response :success
  end

  test "should get new" do
    get stories_new_url
    assert_response :success
  end

  test "should get create" do
    get stories_create_url
    assert_response :success
  end

  test "should get show" do
    get stories_show_url
    assert_response :success
  end

  test "should get edit" do
    get stories_edit_url
    assert_response :success
  end

  test "should get update" do
    get stories_update_url
    assert_response :success
  end

  test "should get destroy" do
    get stories_destroy_url
    assert_response :success
  end

end
